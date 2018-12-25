import {StyleSheet} from 'react-native'
import AppStyles from '../../../../Handling/Css';
export default Css = StyleSheet.create({
    
    containerMessages:{
        flex:1,
        backgroundColor:'white',
    },
    containerChatPerson:{
        flex:1,
        justifyContent:'center',
        backgroundColor:AppStyles.colors.chatScreen,
    },
    containerItemMess:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginLeft: 6,
        marginBottom: 1,
        marginRight:6,
        marginTop:4,
        backgroundColor:'#fff',
        borderRadius:10,
        padding:5   
    },
    containerAvatar:{
        flex:1,
    },
    containerInfor:{
        flex:6
    },
    avatar:AppStyles.avatar,
    nameText:AppStyles.nameText,
    messageText:{
        fontSize:12,
        marginLeft:10
    },
    containerActive:{
        flex:1
    },
    
    containerFlatList:{
        flex:4
    },
    statusDot: {
        position: 'absolute',
        bottom: 0,
        right: 5,
        width: 16,
        height: 16,
        borderRadius: 9,
        borderWidth: 2,
        borderColor: AppStyles.colors.white,
        backgroundColor: AppStyles.colors.onlineGreen
    }
    

});