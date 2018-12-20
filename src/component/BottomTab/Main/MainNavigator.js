import {createMaterialTopTabNavigator} from 'react-navigation'
import Messages from '../../TopTabNavigator/Home/Messages/Messages'
import Active from '../../TopTabNavigator/Home/Active/ActiveList'
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
                backgroundColor:'#002525',
                borderTopWidth:0.2,
                borderBottomWidth:0.2,
            
            },
            labelStyle:{
                color:'#929292',
                textDecorationColor:'black'
            },

        }
    }
)