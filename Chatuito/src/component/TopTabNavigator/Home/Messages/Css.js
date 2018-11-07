import {StyleSheet} from 'react-native'
import { Message } from 'react-native-gifted-chat';
export default Css = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#ccefff"
    },
    containerMessages:{
        flex:1,
        backgroundColor:'white',
    },
    containerItemMess:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop: 8,
        marginLeft: 6,
        marginBottom: 8,
        marginRight:6       
    },
    containerAvatar:{
        flex:1,
    },
    containerInfor:{
        flex:6
    },
    avatar:{
        width: 40,
        height: 40,
        borderRadius: 100/2,
        marginLeft: 6
    },
    nameText:{
        fontSize:15,
        color:'black'
    },
    messageText:{
        fontSize:12
    },
    containerActive:{
        flex:1
    },
    
    containerFlatList:{
        flex:4
    },

    

});