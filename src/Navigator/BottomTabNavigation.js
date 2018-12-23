import React from 'react'
import  {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import MainNavigator from '../component/BottomTab/Main/MainNavigator'
import  People from '../component/BottomTab/People/People'
import Camera from '../component/BottomTab/Camera/Camera'
import Images from '../component/BottomTab/Images/Images'
import Gallery from '../component/BottomTab/Gallery/Gallery'
import Icon from 'react-native-vector-icons/Ionicons'


export default BottomTabNavigator = createMaterialBottomTabNavigator(
    {
        Home:{
            screen:MainNavigator,
            navigationOptions:{
                tabBarIcon:({tintColor})=>(<Icon name="md-home" size={25} color={tintColor} />)
            }
        },
        People:{
            screen:People,
            navigationOptions:{
                tabBarIcon:({tintColor})=>(<Icon name="md-people" size={25} color={tintColor} />)
            }
        },
        Camera:{
            screen:Camera,
            navigationOptions:{
                tabBarIcon:({tintColor})=>(<Icon name="md-camera" size={25} color={tintColor} />)
            }
        },
        Location:{
            screen:Images,
            navigationOptions:{
                tabBarIcon:({tintColor})=>(<Icon name="md-map" size={25} color={tintColor} />)
            }
        },
        Gallery:{
            screen:Gallery,
            navigationOptions:{
                tabBarIcon:({tintColor})=>(<Icon name='ios-image' size={25} color={tintColor} />)
            }
        }
    },
    
    {
        barStyle:{
            backgroundColor:'#fff',
        }
    } ,
)