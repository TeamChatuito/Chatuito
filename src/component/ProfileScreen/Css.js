import {StyleSheet} from 'react-native'
let Css = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    button: {
        backgroundColor: 'gray',
        width: 150,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    buttonText:{
        color: 'white'
    },
    containerHeader:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:30,
        paddingBottom:30,
       //backgroundColor:'brown'
    },
    containerBody:{
        flex:2,
        //backgroundColor:'yellow'
    },
    containerLogOut:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    containerProfile:{
        flex:1,
        flexDirection:'column',
        marginBottom:20,
        borderBottomWidth: 0.4
        //backgroundColor: 'red'
    },
    containerSetting:{
        flex:1,
        flexDirection:'column',
        marginBottom:20,
        borderBottomWidth: 0.4,
        
        //backgroundColor:'green'
    },
    containerAvatar:{
        justifyContent:'center',
        alignItems:'center',
        flex:5,
       
    },
    name:{
        marginTop:10,
        flex:1,
        fontSize:30
    },
    Avatar:{
        height:100,
        width:100,
        borderRadius:100/2
    },
    contanerItem:{
        flex:1,
        flexDirection:'row',
        //backgroundColor:'yellow',
        height:50
    },
    avatarContainerItem:{
        flex:1,
        //backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center'
    },
    titleContainerItem:{
        borderBottomWidth:0.2,
        flex:7,
        //backgroundColor:'red',
        justifyContent:'center',
        paddingLeft:10,
        marginRight:10

    },
    titleText:{
        fontSize:20,
         
    },
    textInforRow:{
        flexDirection:'row',
        margin:5
    },

    profileInfor:{
        flexDirection:'column',
        justifyContent:'center',
        margin:10
    },
    text:{
        justifyContent:'center',
        alignItems:'center',
        fontSize:18
    },
    inputs: {
        height: 40,
        
        borderBottomColor: 'black',
    
    },
    editProfile:{
        justifyContent:'center',
        alignItems:'center',
        margin:10
    },
    buttonUpdate:{
        backgroundColor:'blue',
        width:100,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    },
    textButton:{
        fontSize:20,
        color:'white'
    },
    buttonLogOut:{
        backgroundColor:'red',
        width:100,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    }
})
export default Css