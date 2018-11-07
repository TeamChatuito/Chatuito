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
    
    componentDidMount(){
         const user = firebase.auth().currentUser;
         //Tạo 2 mảng a , b làm mảng tạm để xử lý
         //Mảng a : Chứa các UID Person từ server ( gồm những UID Person có chat với user)
         //Mảng b : Chứa các object Person (gồm UID , email , name ) bằng cách sử dụng UID trong mảng a .
         let a = [],
             b = []
         this.ChatRef = firebase.database().ref().child('/chat').on('value', data => {
             data.forEach(child => {
                 //console.log(child.key);      
                 const position = child.key.trim().indexOf('-'); //Cắt khoảng trắng và trả về vị trí của '-'
                 //console.log(position);
                 const chuoi1 = child.key.slice(0, position); //Cắt chuỗi
                 //console.log(chuoi1);
                 const chuoi2 = child.key.slice(position + 1, child.key.length); //cắt chuỗi
                 //console.log(chuoi2);
                 if (user.uid === chuoi1 || user.uid === chuoi2) { // kiểm tra xem chuỗi đó có chứa user hay không ?
                     if (user.uid != chuoi1 && this.checkIndexOfArray(a, chuoi1) === -1) a.push(chuoi1);// userUID in Array A ? Push string to Array : null
                     if (user.uid != chuoi2 && this.checkIndexOfArray(a, chuoi2) === -1) a.push(chuoi2); // userUID in Array A ? Push string to Array : null
                 }
             })
            //  firebase.database().ref().child('/chat').on('value', (snap) => {
            //      snap.forEach((value) => {
            //          firebase.database().ref().child('/chat/' + value.key)
            //              .orderByChild('createdAt')
            //              .startAt(Date.now())
            //              .on('child_added', snapshot => {
            //                  console.log(snapshot.val().person)
            //                  a.forEach(function (item, i) {
            //                      if (item === snapshot.val().person) {
            //                          a.splice(i, 1);
            //                          a.unshift(item);
            //                      }
            //                  });
            //              })
            //      })
            //  })

            //Lấy thông tin Person (gồm UID , email , name ) bằng cách sử dụng UID trong mảng a .
             a.forEach((childa) => {
                 let userInfor = {}
                 firebase.database().ref('/people').on('value', (snap) => {
                     snap.forEach((child) => {
                         if (child.val().uid === childa) {
                             userInfor['uid'] = child.val().uid;
                             userInfor['name'] = child.val().name;
                             userInfor['email'] = child.val().email;
                             //Nếu mảng b rỗng thì thêm dữ liệu vào 
                             if (b.length !== 0) {
                                 //Nếu mảng b không rỗng thì kiểm tra sự tồn tại của UID trong mảng B 
                                 //Nếu UID Person không có sẵn trong mảng b thì thêm vào , ngược lại null
                                 var found = b.some(function (el) {
                                     return el.uid === childa;
                                 });
                                 if (!found) {
                                     b.unshift(userInfor);
                                 }
                             } else {
                                 
                                b.unshift(userInfor);
                                 
                             }
                         }
                     })
                 })
             })
             // console.log(a);
             //console.log('b la :');
             //console.log(b);

             this.setState({
                 uidFriend: b
             })
         })
         
    }

    checkIndexOfArray(array,word){
        return array.indexOf(word);
    }

    getInforUser(uidUser) {
        let userInfor = {}
        firebase.database().ref('/people').on('value', (snap) => {
            snap.forEach((child) => {
                if (child.val().uid === uidUser) {
                     userInfor['uid']=child.val().uid;
                    userInfor['name'] = child.val().name;
                    userInfor['email'] = child.val().email;
                }
            })
        })
        return userInfor;
    }
    render(){
        //console.log(this.state.uidFriend);

        const {navigate} = this.props.navigation;
        return(
            <View style={Css.containerMessages}>
                <View style={Css.containerFlatList}>
                    <FlatList
                    data={this.state.uidFriend}
                    keyExtractor={(item,index)=>index.toString()}
                    renderItem={({item})=>{
                        return(
                             <FlatListItemMessager item={item} navigate={navigate}></FlatListItemMessager>
                        )
                    }}
                />
                </View>
            </View>
        )
    }
}