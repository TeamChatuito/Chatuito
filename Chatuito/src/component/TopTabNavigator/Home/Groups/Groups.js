import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet } from "react-native";
import Backend from "./Backend";
import { GiftedChat } from 'react-native-gifted-chat';
import Css from './Css'
import GroupChat from './GroupChat';
 export default class Group extends Component{
  render(){
    return(
      <Text onPress={()=>this.props.navigation.navigate('GroupChatScreen')}>Click Join to Group Chat </Text>
    )
  }
}