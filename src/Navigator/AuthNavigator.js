
import {createStackNavigator} from 'react-navigation'
import RootStack from './router'
import LoadingScreen from '../component/Authentication/Screen/LoadingScreen'
import SignInScreen from '../component/Authentication/Screen/SignInScreen'
import SignUpScreen from '../component/Authentication/Screen/SignUpScreen'
import React from 'react'
import SearchHeader from '../component/SeachScreen/SearchHeader';
import ProfileScreen from '../component/ProfileScreen/ProfileScreen';
import GroupChat from '../component/TopTabNavigator/Home/Groups/GroupChat';
import ChatPersonal from '../component/TopTabNavigator/Home/Messages/ChatPersonal';
export default AuthNavigator = createStackNavigator(
    {
        routerMain:{screen:RootStack,navigationOptions:({navigation})=>({
                header:<SearchHeader navigation={navigation}/>
            })
        },
        loading:{screen: LoadingScreen,
            navigationOptions:{
                header:null,
            }},
        signIn:{screen:SignInScreen, navigationOptions:{
                header:null,
            }},
        signUp:{screen:SignUpScreen, navigationOptions:{

            }},
        profile:{screen:ProfileScreen,
            navigationOptions:{
              title:'About me',
              
            }
        },
        GroupChatScreen: {
            screen: GroupChat
        },
        ChatPersonalScreen: {
            screen: ChatPersonal
        }
    },
    {
        initialRouteName:'loading'
    },

)