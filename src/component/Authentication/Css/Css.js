import {
    StyleSheet
} from 'react-native'
import AppStyles from '../../../Handling/Css'
export default Css = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    titleApp: {
        fontSize: 70,
        marginBottom: '10%',
        color:"#28D8A1",
        marginTop:'-20%'
    },
    //Loading
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    fontLoading: {
        fontSize: 30,
        marginBottom: 20,
        color:'#929292'
    },
    //SignIn
    textInput: {
        marginBottom:5,
        fontSize: 14,
        height:40,
        color:'#000',
        width:"90%",
        backgroundColor:'#fff',
        borderRadius:5
    },

    button: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: '90%',
        borderRadius: 5,
        marginTop:10,
        backgroundColor: '#28D8A1',
        
    },

    textButton:{
        marginBottom:'3%',
        color:'#000'
    },

    textInsideButton:{
        color:'#000',
        fontSize:15
    },

    loginText: {
        color:'#fff',
        fontSize:18
    },
})