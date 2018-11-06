import {
    StyleSheet
} from 'react-native'

export default Css = StyleSheet.create({
     container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#DCDCDC',
     },
      nameApp: {
          fontSize: 70,
          marginBottom: 30,
          color: '#00b5ec',
      },
        //Loading
        loading: {
            flex: 1,
            backgroundColor:'white',
            justifyContent: 'center',
            alignItems: 'center'
        },
        fontLoading: {
            fontSize: 30,
            marginBottom: 20
        },
        //SignIn
        inputContainer: {
            borderBottomColor: '#F5FCFF',
            backgroundColor: '#FFFFFF',
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
            borderBottomColor: '#FFFFFF',
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
            backgroundColor: "#00b5ec",
        },
        loginText: {
            color: 'white',
        },
        wrapperStyleResetPassword: {
            borderBottomColor: 'black',
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
            color: 'white',
        },
    }

)