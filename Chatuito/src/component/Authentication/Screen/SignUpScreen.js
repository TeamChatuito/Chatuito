import React from 'react'
import { Text, TextInput, View, Image,TouchableHighlight,AsyncStorage} from 'react-native'
import firebase from 'react-native-firebase'
import Css from '../Css/Css'
import Icon from "react-native-vector-icons/Ionicons";
import * as AllHandle from '../../../Handling/AuthHandle'


export default class SignUpScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = { email: '', password: '', eye:true ,name:''  }
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
                    this.getRef()
                        .child("people")
                        .push({
                            email: user.email,
                            uid: user.uid,
                            name:name,
                        });
                    AllHandle._showToastSuccessFail('Registration successful !');
                   
                })
                .catch(() => AllHandle._showToastSuccessFail('Registration fail !'));
                }
        }
    render(){
        return (
            <View style={Css.container}>
                <View style={Css.signUpContainer}>
                    <View style={Css.inputContainer}>
                        <Image style={Css.inputIcon} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZtjRRIDdh8WUosoNy1K1Rd167HVBohGGZiDaY1RXvElVqS2cR'}}/>
                        <TextInput style={Css.inputs}
                                   placeholder="Name"
                                   underlineColorAndroid='transparent'
                                   onChangeText={(name) => this.setState({name})}/>
                    </View>
                    <View style={Css.inputContainer}>
                        <Image style={Css.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                        <TextInput style={Css.inputs}
                                   placeholder="Email"
                                   keyboardType="email-address"
                                   underlineColorAndroid='transparent'
                                   onChangeText={(email) => this.setState({email})}/>
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
                    <TouchableHighlight style={[Css.buttonContainer, Css.signupButton]} onPress={()=>this.handleSignUp()}>
                        <Text style={Css.signUpText}>Sign up</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}


