import React from 'react'
import {
    View, Text, TouchableOpacity, Image
} from 'react-native'

import Css from './Css'
import LinearGradient from 'react-native-linear-gradient'

export default class SearchItems extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <TouchableOpacity
                                onPress={()=>{
                                    this.props.navigate('ChatPersonalScreen',{
                                        name: this.props.item.name,
                                        email: this.props.item.email,
                                        uid: this.props.item.uid
                                    })
                                }}
                                >
                                <View
                                        style ={Css.profileContainer}>
                                        <Image 
                                                style = {Css.profileImage}
                                                source={{uri:'https://www.gravatar.com/avatar/'}} />
                                        <Text style={Css.profileName}>{this.props.item.name}</Text>
                                </View>
            </TouchableOpacity>
        );
    }
}