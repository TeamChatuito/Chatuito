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
        color:"#456E7D",
        
    },
    //Loading
    loading: {
        flex: 1,
        backgroundColor: AppStyles.colors.appScreenColor,
        justifyContent: 'center',
        alignItems: 'center'
    },

    fontLoading: {
        fontSize: 30,
        marginBottom: 20
    },
    //SignIn
    textInput: {
        marginBottom:5,
        fontSize: 20,
        fontFamily:'CormorantGaramond-Light',
        height:40,
        color:'#a0a0a0',
        width:"90%"
    },

    button: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: '70%',
        borderRadius: 30,
        marginTop:10,
        backgroundColor: '#ffffff20'
    },

    textButton:{
        marginBottom:'3%'
    },

    textInsideButton:{
        color:'#909090',
        fontFamily:'CormorantGaramond-Light',
        fontSize:15
    },

    loginText: {
        color:'#909090'
    },
})