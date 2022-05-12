import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import thaliAPI from "../API/thaliAPI";
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch(action.type){
        case 'add_error':
            return { ...state, errorMsg: action.payload };          //Basically for action add_error take all items from state but overrides errorMsg item with action payload
        case 'signup':
            return { errorMsg: '', token: action.payload };
        default:
            return state;
    }
};

//Here we will define some action functions i.e. actions that change the state of our app.
const signup = (dispatch) => {
    return async ({ userID, name, email, password, phoneNumber, address }) => {
        try{
            const response = await thaliAPI.post('/signup', { userID, name, email, password, phoneNumber, address });
            //Setting the token on our physical device
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signup', payload: response.data.token });         //Update the state with our token
            //Navigate user to walkthrough 
            navigate('tutorialFlow');
        } catch(error){
            const message = error.message;
            let userMsg = "";
            if(message.includes("duplicate key error")){
                userMsg = "Username or Email already in use!";
                //console.log(userMsg);    
            }
            else{
                userMsg = "Username/Email or Password left blank.";
                //console.log(userMsg);
            }
            dispatch({ type: 'add_error', payload: error.message });
        }
    };
};

const signin = (dispatch) => {
    return async ({ email, password }) => {
        try{
            const response = await thaliAPI.post('/signin', { emailOrName, password })
        } catch(error){
            console.log("[ERROR] from context action:\n", error);
        }
        //API request to express to signin+modify state and authenticate user
        //otherwise display error message: either email or password incorrect
    };
};

const signout = (dispatch) => {
    return () => {
        //Correctly logout the user
    };
};

export const { Provider, Context } = createDataContext(authReducer, { signup, signin, signout }, { token: null, errorMsg: '' });