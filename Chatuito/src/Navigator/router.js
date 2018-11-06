
import {createStackNavigator} from 'react-navigation';
import BottomTabNavigator from './BottomTabNavigation';
import SplashScreen from '../component/SplashScreen';
import SearchScreen from '../component/SeachScreen/SearchScreen';


export default RootStack = createStackNavigator(
    {
        main:{screen:BottomTabNavigator,
            navigationOptions:{
                header:null,
            }
        },
        splash:{screen:SplashScreen},
        search:{screen:SearchScreen,
            navigationOptions:{
              header:  null
            }
        },
    },

    {
        initialRouteName:'main'
    }

)