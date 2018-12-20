import {StyleSheet} from 'react-native'
import AppStyles from '../../Handling/Css'
export default Css = StyleSheet.create({
    container:{
        flex:0.075,
        flexDirection:'row',
        backgroundColor: '#ffffff20'
    },
    textSearched:{
        color:'#909090',
        fontFamily:'CormorantGaramond-Light',
        fontSize:18
    },
    background:{
        flex:1
    },
    containerSearch:{
        flex:9,
    },
    containerAvatar:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    avatarStyle:{
        height:25,
        width:25,
        borderRadius:100/2,
    },
    searchIcon:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    searchTextInput:{
        flex:5,
        color:'#929292'
    },
    containerIconAndTextInPut:{
        flex:1,
        flexDirection: 'row',
    }
})