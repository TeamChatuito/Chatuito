import React,{Component} from 'react';
import {Text,View,ActivityIndicator} from 'react-native';
import Css from '../Css/Css'
import firebase from 'react-native-firebase'
import LinearGradient from 'react-native-linear-gradient'

export default class LoadingScreen extends Component{
    getRef(){
        return firebase.database().ref();
    }
    
    componentDidMount(){
       
        firebase.auth()
            .onAuthStateChanged(user=>{
                if (user) console.log('user :'+user.email);
                this.props.navigation.navigate(user?'routerMain':'signIn')
            });
        
    }
    render(){
        return(
            <LinearGradient   colors={['#004242','#000000']}
            start={{ x: 1, y: 1 }} 
            end={{x:0,y:0}}  style={[Css.container,Css.loading]}>
                <Text style={Css.fontLoading}>Loading...</Text>
                <ActivityIndicator size="large" color="#515151"/>
            </LinearGradient>
        )
    }
}