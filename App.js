import { createAppContainer, createSwitchNavigator } from 'react-navigation';      //, createSwitchNavigator
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { StyleSheet, Text, View } from 'react-native';

import Dashboard from './src/screens/Dashboard';
import onBoardingPage from './src/screens/Onboarding';
import SignUp from './src/screens/Signup';
import Login from './src/screens/Login';
import ForgotPassword from './src/screens/ForgotPassword';
import WalkthroughStart from './src/screens/WalkthroughStart';
import WalkthroughDonate from './src/screens/WalkthroughPage1';
import WalkthroughRequest from './src/screens/WalkthroughPage2';
import WalkthroughAnalytics from './src/screens/WalkthroughPage3';
import ProfilePage from './src/screens/UserProfile';
import CreatePost from './src/screens/CreatePost';
import ViewPost from './src/screens/ViewPost';
import Map from './src/screens/Map';
import ChatList from './src/screens/ChatList';
import ViewChat from  './src/screens/ViewChat';
import tester from './src/screens/tester';


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Welcome to Thali 1.4</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const switchNavigator = createSwitchNavigator({
  authFlow: createStackNavigator({
    Initial: onBoardingPage,
    Signup: SignUp,
    Signin: Login,
    PasswordForgotten: ForgotPassword
  }),
  tutorialFlow: createStackNavigator({
    CreatedUser: WalkthroughStart,
    Walkthrough1: WalkthroughDonate,
    Walkthrough2: WalkthroughRequest,
    Walkthrough3: WalkthroughAnalytics
  }),
  mainFlow: createBottomTabNavigator({
    dashboardFlow: createStackNavigator({
      ViewDashboard: Dashboard,
      SeePost: ViewPost,
      MakePost: CreatePost
    }),
    SeeMap: Map,
    Chats: ChatList
  })
});

const navigator = createStackNavigator({
  Homepage: Dashboard,
  Initial: onBoardingPage,
  Signup: SignUp,
  Signin: Login,
  PasswordForgotten: ForgotPassword,
  CreatedUser: WalkthroughStart,
  Walkthrough1: WalkthroughDonate,
  Walkthrough2: WalkthroughRequest,
  Walkthrough3: WalkthroughAnalytics,
  Profile: ProfilePage,
  MakePost: CreatePost,
  SeePost: ViewPost,
  SeeMap: Map,
  Chats: ChatList,
  SeeChat: ViewChat,
  Trial: tester
}, {
  initialRouteName: "Signup",
  defaultNavigationOptions: {
    title: "Thali"
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default createAppContainer(navigator);
export default createAppContainer(switchNavigator);