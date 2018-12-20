import React,{Component} from 'react';
import {Text, View} from 'react-native';
import Css from './Css'
import LinearGradient from 'react-native-linear-gradient'
export default class Calls extends Component{
    render(){
        return(
            <LinearGradient
            colors={['#004242','#000000']}
            start={{ x: 1, y: 1 }} 
            end={{x:0,y:0}} 
            style={Css.container}>
                <Text>Calls</Text>
            </LinearGradient>
        )
    }
}