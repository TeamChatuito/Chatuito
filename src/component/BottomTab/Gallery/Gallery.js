import React,{Component} from 'react';
import {Text,  View} from 'react-native';
import firebase from 'react-native-firebase'
import * as AllHandle from '../../../Handling/AuthHandle'
import Css from './Css';
import LinearGradient from 'react-native-linear-gradient'
export default class Gallery extends Component{
    render(){
        return(
            <LinearGradient
            colors={['#004242','#000000']}
            start={{ x: 1, y: 1 }} 
            end={{x:0,y:0}} 
             style={Css.container}>

            </LinearGradient>
        )
    }
}