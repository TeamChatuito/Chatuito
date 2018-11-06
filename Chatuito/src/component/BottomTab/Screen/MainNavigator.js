import {createMaterialTopTabNavigator} from 'react-navigation'
import Messages from '../../TopTabNavigator/Home/Messages/Messages'
import Active from '../../TopTabNavigator/Home/Active/Active'
import Groups from '../../TopTabNavigator/Home/Groups/Groups'
import Calls from '../../TopTabNavigator/Home/Call/Calls'

export default MainNavigator = createMaterialTopTabNavigator(
    {
        Messages:{screen:Messages},
        Active:{screen:Active},
        Groups:{screen:Groups},
        Calls:{screen:Calls},
    },

    {
        tabBarOptions:{

            style:{
                backgroundColor:'white',
                borderTopWidth:0.2,
                borderBottomWidth:0.2
            },
            labelStyle:{
                color:'black',
            },

        }
    }
)