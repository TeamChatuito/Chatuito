import {StyleSheet} from 'react-native'
let Css = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    button: {
        backgroundColor: '#28D8A1',
        width: 150,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    buttonText:{
        color: '#fff'
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
        marginLeft:'5%'
    },
    containerLogOut:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    containerProfile:{
        flex:1,
        flexDirection:'column',
        marginBottom:5,
        backgroundColor:'#fff',
        width:'95%',
        borderRadius:5
    },
    containerSetting:{
        flex:1,
        flexDirection:'column',
        marginBottom:5,
        backgroundColor:'#fff',
        borderRadius:5,
        width:'95%'
    },
    containerAvatar:{
        justifyContent:'center',
        alignItems:'center',
        flex:5,
       
    },
    name:{
        marginTop:5,
        flex:1,
        fontSize:18,
        color:'#28D8A1',
        backgroundColor:'#fff',
        height:50,
        width: '90%',
        textAlign:'center',
        borderRadius:5,
        paddingTop:12
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
        flex:7,
        //backgroundColor:'red',
        justifyContent:'center',
        paddingLeft:10,
        marginRight:10

    },
    titleText:{
        fontSize:16,
        color:'#28D8A1'
    },
    textInforRow:{
        flexDirection:'row',
        height:40,
        backgroundColor:'#e5e5e5',
        alignItems:'center',
        borderRadius:5,
        marginBottom:5,
        paddingLeft:10
    },

    profileInfor:{
        flexDirection:'column',
        justifyContent:'center',
        margin:10
    },
    text:{
        justifyContent:'center',
        alignItems:'center',
        fontSize:14
    },
    inputs: {
        height: 40,
        backgroundColor:'#e0e0e0',
        borderBottomColor: 'black',
        width:'100%',
        marginBottom:5,
        borderRadius:5,
        paddingLeft:5
    },
    editProfile:{
        justifyContent:'center',
        alignItems:'center',
        margin:10
    },
    buttonUpdate:{
        backgroundColor:'#28D8A1',
        width:'100%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    },
    textButton:{
        fontSize:20,
        color:'#fff'
    },
    buttonLogOut:{
        backgroundColor:'#28D8A1',
        width:'90%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    }
})
export default Css