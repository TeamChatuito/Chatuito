import React, { Component } from 'react';
import { View } from "react-native";
import Backend from "./Backend";
import { GiftedChat } from 'react-native-gifted-chat';
import Css from './Css'
 export default class GroupChat extends Component {
  constructor(props){
    super(props);
    this.state = { name: false };
    
  }
  state = {
    messages: []
  };
  
  componentWillMount() {}

  componentDidMount() {
    const {params} = this.props.navigation.state;
    const nameGroup = params.nameGroup;
    Backend.loadMessages(message => {
      this.setState(previousState => {
        return {
          messages: GiftedChat.append(previousState.messages, message)
        };
      });
    },nameGroup.trim());
  }
  render() {
    return (
        
      <View style={Css.container}>
        <GiftedChat
          messages={this.state.messages}
          onSend={message => {
            Backend.sendMessage(message);
          }}
          user={{
            _id: Backend.getUid(),
            name: Backend.getNameUser(),
          }}
          loadEarlier
          
        />
      </View>
    );
  }
  componentWillUnmount() {
    Backend.closeChat();
  }
}