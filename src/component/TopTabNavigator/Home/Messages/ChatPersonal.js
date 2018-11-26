import React, { Component } from "react";
import {View} from 'react-native'
import { GiftedChat } from "react-native-gifted-chat";
import firebase from "react-native-firebase";
import Css from "./Css";

var uid;

export default class ChatPersonal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      online:null
    };

    this.user = firebase.auth().currentUser;
    //console.log("User:" + this.user.uid);

    const { params } = this.props.navigation.state;
    uid = params.uid;
    name = params.name;
    email = params.email;
    //console.log("User:" + uid);

    this.chatRef = this.getRef().child("chat/" + this.generateChatId());
    this.chatRefData = this.chatRef.orderByChild("order");
    this.onSend = this.onSend.bind(this);
  }

  //generate ChatId works cause when you are the user sending chat you take user.uid and your friend takes uid
  // when your friend is using the app to send message s/he takes user.uid and you take the uid cause you are the friend 

  generateChatId() {
    if (this.user.uid > uid) return `${this.user.uid}-${uid}`;
    else return `${uid}-${this.user.uid}`;
  }

  getRef() {
    return firebase.database().ref();
  }
  

  listenForItems(chatRef) {
    chatRef.on("value", snap => {
      // get children as an array
     
      var items = [];
      snap.forEach(child => {
        items.push({
          _id: child.val().createdAt,
          text: child.val().text,
          createdAt: new Date(child.val().createdAt),
          user: {
            _id: child.val().uid,
            name:this.user.displayName,
           // avatar: 'https://www.gravatar.com/avatar/'
          }
        });
      });
      

      this.setState({
        loading: false,
        messages: items
      });
    });
  }

  componentDidMount() {
    this.listenForItems(this.chatRefData);
  }

  componentWillUnmount() {
    this.chatRefData.off();
  }



  onSend(messages = []) {
    // this.setState({
    //     messages: GiftedChat.append(this.state.messages, messages),
    // });
    this.getRef().child('/people').on('value',snap=>{
      snap.forEach(child=>{
        if(child.val().uid===uid){
          this.setState({online:child.val().online})
        }
      })
    })

    this.chatRef.on("value", snap => {
      if (snap.val() === null) {
        firebase.database().ref().child('chatPerson/' + this.user.uid + '/' + uid).push({
          uid: uid,
          name: name,
          email: email,
          online : this.state.online,
        })
      }
    });
    messages.forEach(message => {
      var now = new Date().getTime();
      this.chatRef.push({
        _id: now,
        text: message.text,
        createdAt: now,
        uid: this.user.uid,
        order: -1 * now,
        person:uid,
        user: message.user,
      });
    });
    
  }
  render() {
    return (
      <View style={Css.containerChatPerson}>
        <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend.bind(this)}
        user={{
          _id: this.user.uid
        }}
      />
      </View>
    );
  }
}
