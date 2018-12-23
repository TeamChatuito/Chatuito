import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { TouchableRipple, Text } from 'react-native-paper';

import Css from './Css'

export default class UserItem extends Component {
    
    onPress = () => {
        this.props.navigate("ChatPersonalScreen", {
            name: this.props.item.name,
            email: this.props.item.email,
            uid: this.props.item.uid,
        });
    };

    render() {
        const { name } = this.props.item;
        return (
            <TouchableRipple
                onPress={this.onPress}
                rippleColor='#ffffff20'
                style={{alignItems:'center'}}
            >
                <View style={Css.item}>
                    <View style={Css.containerAvatar}>
                         <Image style={Css.avatar} source={{uri:'https://www.gravatar.com/avatar/'}}/>
                         <Image style={Css.statusDot}/>
                    </View>
                    <View style={Css.containerName}>
                         <Text style={Css.userName}>
                            {name}
                        </Text>
                    </View>
                    <View style={Css.containerWave}>
                          <Image style={Css.wave} source={require('../../../../../src/assets/icon/wave_icon.png')} />
                    </View>
                </View>
            </TouchableRipple>
        );
    }
}
