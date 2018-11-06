import React,{Component} from 'react';
import {Text,View,ActivityIndicator} from 'react-native';
import Css from '../Css/Css'
import firebase from 'react-native-firebase'

export default class LoadingScreen extends Component{
    getRef(){
        return firebase.database().ref();
    }
    componentDidMount(){
        firebase.auth()
            .onAuthStateChanged(user=>{
               
                if (user) console.log('user :'+user.email);
                this.props.navigation.navigate(user?'routerMain':'signIn')});
                        
    }
    render(){
        return(
            <View style={[Css.container,Css.loading]}>
                <Text style={Css.fontLoading}>Loading !</Text>
                <ActivityIndicator size="large" color="black"/>
            </View>
        )
    }
}