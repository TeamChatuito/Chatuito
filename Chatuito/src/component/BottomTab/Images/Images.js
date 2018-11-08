import React,{Component} from 'react';
import {Text, View} from 'react-native';
import Css from './Css';

export default class Images extends Component{
    render(){
        return(
            <View style={Css.container}>
                <Text>Image</Text>
            </View>
        )
    }
}