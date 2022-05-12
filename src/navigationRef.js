import { NavigationActions } from 'react-navigation';

let navigator;

export const setNavigator = (nav) => {
    navigator = nav;
};

//We can do this because react navigation & context work very similarly
//Via dispatch tell react tochange state & show the user a different screen
export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName, params                   //routeName: routeName & params: params
        })
    );
};