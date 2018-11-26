import React,{Component} from 'react';
import {Text,  View} from 'react-native';
import firebase from 'react-native-firebase'
import * as AllHandle from '../../../Handling/AuthHandle'
import Css from './Css';
export default class Setting extends Component{
    constructor(props){
        super(props);
         this.state = {currentUser:null}
    }
    componentDidMount(){
        this.setState({currentUser:firebase.auth().currentUser})
    }
    handlerLogOut() {
        if (this.state.currentUser != null) {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    AllHandle._showToastSuccessFail('Log out successfully !')
                    this.props.navigation.navigate('routerMain', {
                        navigation1: 'hello'
                    })
                })
                .catch((error) => AllHandle._showToastErrorOrNotthing(error.message))
        }
    }
    render(){
        return(
            <View style={Css.container}>
                <Text >Log Out</Text>

            </View>
        )
    }
}