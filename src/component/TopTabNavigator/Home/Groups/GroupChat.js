import React, { Component } from 'react';
import { View } from "react-native";
import Backend from "./Backend";
import { GiftedChat } from 'react-native-gifted-chat';
import Css from './Css'
import LinearGradient from 'react-native-linear-gradient'
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
        
      <LinearGradient 
      colors={['#00101090','#00101090']}
      start={{ x: 1, y: 1 }} 
      end={{x:0,y:0}} 
      style={Css.container}>
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
      </LinearGradient>
    );
  }
  componentWillUnmount() {
    Backend.closeChat();
  }
}