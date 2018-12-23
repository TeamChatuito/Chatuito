import {StyleSheet} from 'react-native'
import AppStyles from '../../Handling/Css'
export default Css = StyleSheet.create({
    container:{
        height:50,
        backgroundColor: '#ffffff20',
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    textSearched:{
        color:'#909090',
        fontFamily:'CormorantGaramond-Light',
        fontSize:18
    },
    background:{
        flex:1,
        alignItems:'center'
    },
    containerSearch:{
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        width:'90%'
    },
    containerAvatar:{
        justifyContent: 'center',
        alignItems:'center',
        width: '10%',
        height:'100%',
        marginTop:10
    },
    avatarStyle:{
        height:25,
        width:25,
        borderRadius:100/2,
    },
    searchIcon:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:'4%',
        marginRight:'3%'
    },
    searchTextInput:{
        color:'#000',
        fontSize:16
    },
    containerIconAndTextInPut:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    textInputStyle:{
        height:50,
        width:'95%',
        justifyContent:'center',
        backgroundColor:'#fff',
        marginTop:5,
        fontSize:16,
        color:'#000000',
        borderRadius:5,
        paddingLeft:20
    },
    scrollViewStyle:{
        backgroundColor:'#ffffff90',
        flex:1,
        width:'95%',
        borderRadius:10,
        marginTop:5,
        marginBottom:15
    },
    profileImage:{
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 5
    },
    profileContainer:{
        flexDirection: "row",
        alignItems: "center",
        height:50,
        marginTop:5,
        marginHorizontal:10,
        borderRadius:10,
        paddingLeft:10,
        backgroundColor:'#ffffff10',
    },
    profileName:{
        marginLeft: 6,
        fontSize: 14,
        color:'#929292',
    }
})