import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Image
} from 'react-native';
import Css from '../Css/Css'
import firebase from 'react-native-firebase'
import  Dialog from 'react-native-dialog'
import Icon from "react-native-vector-icons/Ionicons";
import * as AllHandle from '../../../Handling/AuthHandle'

export default class SignInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
             email   : "",
             password: "",
             dialogVisible:false,
             emailResetPassword:"",
             eye:true
        }

    }

    _signUp() {
        this.props.navigation.navigate('signUp');
    }
    _login(){
       try {
           const {email, password} = this.state;
           if (AllHandle._validateEmail(email.trim()) === true && password.trim() !== "") {
               firebase
                   .auth()
                   .signInWithEmailAndPassword(email, password)
                   .then(() => {
                       AllHandle._showToastSuccessFail('Logged in successfully !')
                   })
                   .catch(() => AllHandle._showToastErrorOrNotthing('Wrong Username or Password !'))
           }
       }
       catch (e) {
           if (e instanceof TypeError) {
              AllHandle._showToastErrorOrNotthing(e.message);
           }
       }
    }
    showDialog(){
        this.setState({ dialogVisible: true });
    }; 

    handleCancel() {
        this.setState({ dialogVisible: false });
    };

    handleSend(){
            firebase
                .auth()
                .sendPasswordResetEmail(this.state.emailResetPassword.trim())
                .then(() => AllHandle._showToastSuccessFail('Send to your email successfully. Please check your mail'))
                .catch(() => AllHandle._showToastSuccessFail('Can\'t send to your email to reset password '));
            this.setState({ dialogVisible: false });
    };


    render() {
        return (
            <View style={Css.container}>
                    <View>
                        <Text style={Css.nameApp}>Chatuito</Text>
                    </View>
                    <View style={Css.inputContainer}>
                        <Image style={Css.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                        <TextInput style={Css.inputs}
                                   placeholder="Email"
                                   keyboardType="email-address"
                                   underlineColorAndroid='transparent'
                                   onChangeText={(email) => {
                                       this.setState({email})
                                   }}/>
                    </View>
                    <View style={Css.inputContainer}>
                        <Image style={Css.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
                        <TextInput style={Css.inputs}
                                   placeholder="Password"
                                   secureTextEntry={this.state.eye}
                                   underlineColorAndroid='transparent'
                                   onChangeText={(password) => this.setState({password})}/>
                        {this.state.eye===true && <Icon name="md-eye-off" size={35} onPress={()=>this.setState({eye:false})}/>}
                        {this.state.eye===false && <Icon name="md-eye" size={35} onPress={()=>this.setState({eye:true})}/>}
                    </View>
                    <TouchableHighlight style={[Css.buttonContainer, Css.loginButton]} onPress={()=>this._login()}>
                        <Text style={Css.loginText}>Login</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={Css.buttonContainer} onPress={()=>this.showDialog()}>
                        <Text>Forgot your password?</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={Css.buttonContainer} onPress={() => this._signUp()}>
                        <Text>Register</Text>
                    </TouchableHighlight>
                <Dialog.Container visible={this.state.dialogVisible}>
                    <Dialog.Title>Reset password</Dialog.Title>
                    <Dialog.Description>
                        Please enter your email to reset password . We'll send to your email !
                    </Dialog.Description>
                    <Dialog.Input
                        wrapperStyle={Css.wrapperStyleResetPassword}
                        onChangeText={(inputText)=>{this.setState({emailResetPassword:inputText})}}
                    />
                    <Dialog.Button label="Cancel" onPress={()=>this.handleCancel()} />
                    <Dialog.Button label="Send" onPress={()=>this.handleSend()} />
                </Dialog.Container>
            </View>
        );
    }
}

