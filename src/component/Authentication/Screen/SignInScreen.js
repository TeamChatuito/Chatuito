import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Image,
    TouchableOpacity
} from 'react-native';
import Css from '../Css/Css'
import firebase from 'react-native-firebase'
import  Dialog from 'react-native-dialog'
import Icon from "react-native-vector-icons/Ionicons";
import * as AllHandle from '../../../Handling/AuthHandle'
import LinearGradient from 'react-native-linear-gradient'
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
            <LinearGradient 
                            colors={['#004242','#000000']}
                            start={{ x: 1, y: 1 }} 
                            end={{x:0,y:0}} 
                            style={Css.container}>
                    
                    
                    {/* Title */}
                    <View>
                        <Text style={Css.titleApp}>Chatuito</Text>
                    </View>

                        {/* Email */}

                        <TextInput 
                                    style={Css.textInput}
                                    placeholder="Email"
                                    keyboardType="email-address"
                                    placeholderTextColor="#515151"
                                    underlineColorAndroid='#515151'
                                    onChangeText={(email) => {
                                    this.setState({email})}}
                                    />
                        
                        {/* Password */}

                        <TextInput 
                                    style={Css.textInput}
                                    placeholder="Password"
                                    secureTextEntry={this.state.eye}
                                    placeholderTextColor="#515151"
                                    underlineColorAndroid='#515151'
                                    onChangeText={(password) => this.setState({password})}/>


                        {/* Eyes */}

                        {this.state.eye===true && <Icon name="md-eye-off" size={35} onPress={()=>this.setState({eye:false})}/>}
                        {this.state.eye===false && <Icon name="md-eye" size={35} onPress={()=>this.setState({eye:true})}/>}

                    <TouchableOpacity
                                    style={Css.button}
                                    onPress={()=>this._login()}>

                        <Text 
                                    style={Css.loginText}
                                    >Login</Text>
                    
                    </TouchableOpacity>


                    <TouchableOpacity 
                                    style={Css.textButton} onPress={()=>this.showDialog()}>
                        
                        <Text style={Css.textInsideButton}>Forgot your password?</Text>
                    
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                                    style={Css.textButton} onPress={() => this._signUp()}>
                        
                        <Text style={Css.textInsideButton}>Register</Text>
                    
                    </TouchableOpacity>
                
                
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
            </LinearGradient>
        );
    }
}

