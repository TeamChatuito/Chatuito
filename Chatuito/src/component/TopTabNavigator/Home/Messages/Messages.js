import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import firebase from 'react-native-firebase'
import Css from "./Css";
import StatusActiveUser from '../Active/StatusActiveUser'

//ClassItem hiển thị trong Flatlist
class FlatListItemMessager extends Component{
    constructor(props){
        super(props);
        this.state={textRecent:''}
        this.getMessagesRecent();
        //console.log('key : '+this.getKeyChatPerson(user.uid,this.props.item.uid))
    }

    //Lấy chuỗi key(keyChatPerson) trong /Chat với string1 và string2
    getKeyChatPerson(string1,string2){
       return string1+'-'+string2;
    }

    //Lấy tin nhắn cuối cùng giữa User và Person thông qua keyChatPerson
    getMessagesRecent(){
          const user = firebase.auth().currentUser;
          firebase.database().ref().child('/chat').on('value',(snap)=>{
              snap.forEach((child)=>{
                  if(child.key===this.getKeyChatPerson(user.uid,this.props.item.uid) || 
                  child.key===this.getKeyChatPerson(this.props.item.uid,user.uid)){
                        firebase.database().ref().child('/chat/'+child.key).limitToLast(1).on('value',(value)=>{
                            value.forEach((child)=>{
                               // console.log(child.val().text);
                                this.setState({textRecent:child.val().text});
                            })
                        })
                  }
              })
          })
    }
    render(){
       // console.log(this.props.item)
        
        return (
      <TouchableOpacity 
      onPress={() =>{
          //Khi nhấn => sẽ truyền tham số Person tới navigator ChatPersonalScreen
           this.props.navigate("ChatPersonalScreen", {
            name: this.props.item.name,
            email: this.props.item.email,
            uid: this.props.item.uid,
          });
        }}
      >
        <View style={Css.containerItemMess}>
            <View style={Css.containerAvatar}>
                <Image
                    source={{
                     uri: "https://www.gravatar.com/avatar/"
                    }}
                    style={Css.avatar}
                />
                 {this.props.item.online===1 && <Image style={Css.statusDot}/>}
            </View>
            <View style={Css.containerInfor}>
                <Text style={Css.nameText}>{this.props.item.name}</Text>
                <Text ellipsizeMode={"tail"} numberOfLines={1} style={Css.messageText}>{this.state.textRecent}</Text>
            </View>
          
        </View>
      </TouchableOpacity>
    );
    }
};

export default class Messages extends Component{
    constructor(props){
        super(props);
        this.state={uidFriend:[]}
    }
    componentWillMount(){
         StatusActiveUser();
         this.listenForItems();
    }

    generateChatId() {
        if (this.user.uid > uid) return `${this.user.uid}-${uid}`;
        else return `${uid}-${this.user.uid}`;
    }

    listenForItems(){
        const user = firebase.auth().currentUser;
        let items  = []
        firebase.database().ref().child('/chatPerson').on('value',snap1=>{
            snap1.forEach(child1=>{
                if(child1.key===user.uid) {
                    firebase.database().ref().child('/chatPerson/'+child1.key).on('value',snap2=>{
                        snap2.forEach(child2=>{
                            firebase.database().ref().child('/chatPerson/' + child1.key+'/'+child2.key).limitToLast(1).on('child_added',snap3=>{
                                    //console.log(snap3.val())
                                        if (items.length !== 0) {
                                        var found = items.some(function (el) {
                                            return el.uid === snap3.val().uid;
                                        });
                                        if (!found) {
                                            items.push({
                                                uid: snap3.val().uid,
                                                name: snap3.val().name,
                                                email: snap3.val().email,
                                                online:snap3.val().online
                                            })
                                        }
                                    } else {
                                        items.push({
                                            uid: snap3.val().uid,
                                            name: snap3.val().name,
                                            email: snap3.val().email,
                                            online: snap3.val().online
                                        })
                                    }
                                })
                        })
                    })
                    console.log(items);
                    this.setState({
                        uidFriend: items
                    })
                }
            })
        })
    }

    checkIndexOfArray(array,word){
        return array.indexOf(word);
    }

    renderItem = ({ item }) => {
        const {navigate} = this.props.navigation;
        return <FlatListItemMessager item={item} navigate={navigate}/>;
    };

    render(){
        //console.log(this.state.uidFriend);
        return(
            <View style={Css.containerMessages}>
                <View style={Css.containerFlatList}>
                    <FlatList
                    data={this.state.uidFriend}
                    keyExtractor={(item,index)=>index.toString()}
                    renderItem={this.renderItem}
                />
                </View>
            </View>
        )
    }
}