import React from 'react'
import { Text, TextInput, View, Image,TouchableHighlight,AsyncStorage, TouchableOpacity} from 'react-native'
import firebase from 'react-native-firebase'
import Css from '../Css/Css'
import Icon from "react-native-vector-icons/Ionicons";
import * as AllHandle from '../../../Handling/AuthHandle'
import LinearGradient from 'react-native-linear-gradient'

export default class SignUpScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = { email: '', password: '', eye:true ,name:'',image:'https://www.gravatar.com/avatar/'}
    }
    getRef() {
        return firebase.database().ref();
    }
    handleSignUp() {
        const {email, password,name} = this.state
        
        if (AllHandle._validateEmail(email.trim()) === true && password.trim() !== "") {
            firebase
                .auth()
               .createUserWithEmailAndPassword(email.trim(), password.trim())
                .then(() => {
                    const user = firebase.auth().currentUser;
                    user.updateProfile({
                        displayName:name
                    }) 
                    var now = new Date().getTime();
                    this.getRef()
                        .child("people")
                        .push({
                            email: user.email,
                            uid: user.uid,
                            name:name,
                            online:1,
                            image:'https://www.gravatar.com/avatar/',
                            lastActive:now
                        });
                    AllHandle._showToastSuccessFail('Registration successful !');
                   
                })
                .catch(() => AllHandle._showToastSuccessFail('Registration fail !'));
                }
        }
    render(){
        return (
            <LinearGradient 
                        colors={['#fdfbfb','#ebedee']}
                        start={{ x: 1, y: 1 }} 
                        end={{x:0,y:0}} 
                        style={Css.container}>
                
                        <Text
                                    style={Css.titleApp}
                                    >Register</Text>
                        
                        <TextInput
                                    style={Css.textInput}
                                    placeholder="Name"
                                    placeholderTextColor="#515151"
                                    underlineColorAndroid='transparent'
                                    onChangeText={(name) => this.setState({name})}/>

                        <TextInput style={Css.textInput}
                                    placeholder="Email"
                                    keyboardType="email-address"
                                    placeholderTextColor="#515151"
                                    underlineColorAndroid='transparent'
                                    onChangeText={(email) => this.setState({email})}/>
                        <TextInput style={Css.textInput}
                                    placeholder="Password"
                                    secureTextEntry={this.state.eye}
                                    placeholderTextColor="#515151"
                                    underlineColorAndroid='transparent'
                                    onChangeText={(password) => this.setState({password})}/>
                    
                        {this.state.eye===true && <Icon name="md-eye-off" size={35} onPress={()=>this.setState({eye:false})}/>}
                        {this.state.eye===false && <Icon name="md-eye" size={35} onPress={()=>this.setState({eye:true})}/>}
                    
                        <TouchableOpacity 
                                    style={Css.button} onPress={()=>this.handleSignUp()}>
                            <Text 
                                    style={Css.loginText}>Sign up</Text>
                        </TouchableOpacity>
            </LinearGradient>
        )
    }
}


