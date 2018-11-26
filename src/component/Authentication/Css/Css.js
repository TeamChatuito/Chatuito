import {
    StyleSheet
} from 'react-native'
import AppStyles from '../../../Handling/Css'
export default Css = StyleSheet.create({
     container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: AppStyles.colors.appScreenColor,
     },
      nameApp: {
          fontSize: 70,
          marginBottom: 30,
          color: AppStyles.colors.appNameColor,
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
        inputContainer: {
            borderBottomColor: AppStyles.colors.borderBottomColor,
            backgroundColor: AppStyles.colors.appScreenColor,
            borderRadius: 30,
            borderBottomWidth: 1,
            width: 250,
            height: 45,
            marginBottom: 20,
            flexDirection: 'row',
            alignItems: 'center'
        },
        inputs: {
            height: 45,
            marginLeft: 16,
            borderBottomColor: AppStyles.colors.borderBottomColor,
            flex: 1,
        },
        inputIcon: {
            width: 30,
            height: 30,
            marginLeft: 15,
            justifyContent: 'center'
        },
        buttonContainer: {
            height: 45,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
            width: 250,
            borderRadius: 30,
        },
        loginButton: {
            backgroundColor: AppStyles.colors.buttonColor
        },
        loginText: {
            color: AppStyles.colors.white,
        },
        wrapperStyleResetPassword: {
            borderBottomColor: AppStyles.colors.borderBottomColor,
            borderBottomWidth: 1,
            paddingLeft: 10,
            paddingRight: 10,
            fontSize: 20
        },

        //SignUp
        signUpContainer: {
            flex: 1,
            marginTop: 50
        },
        signupButton: {
            backgroundColor: "#00b5ec",
        },
        signUpText: {
            color: AppStyles.colors.white,
        },
    }

)