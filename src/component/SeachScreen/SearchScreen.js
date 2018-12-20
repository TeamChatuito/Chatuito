import React,{Component} from 'react'
import {Text} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Css from './Css'
export default class SearchScreen extends Component{
    render(){
        return(
            <LinearGradient
                            colors={['#004242','#000000']}
                            start={{ x: 1, y: 1 }} 
                            end={{x:0,y:0}} 
                            style={Css.background}
                            >
                <Text style={Css.textSearched}>abc</Text>
            </LinearGradient>
        )
    }
}