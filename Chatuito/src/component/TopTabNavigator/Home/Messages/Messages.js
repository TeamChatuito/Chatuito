import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import firebase from 'react-native-firebase'
import Css from "./Css";


class FlatListItem extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
       // console.log(this.props.item)
        
        
        return (
      <TouchableOpacity 
      onPress={() =>{
           this.props.navigate("ChatPersonalScreen", {
            name: this.props.item.name,
            email: this.props.item.email,
            uid: this.props.item.uid,
          });
        }}
      >
        <View style={Css.profileContainer}>
          <Image
            source={{
              uri: "https://www.gravatar.com/avatar/"
            }}
            style={Css.profileImage}
          />
          <Text style={Css.profileName}>{}</Text>
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
        let a = [],b=[]
        this.ChatRef = firebase.database().ref().child('/chat').on('value', data => {
            data.forEach(child => {
                //console.log(child.key);      
                const position = child.key.trim().indexOf('-'); //Cắt khoảng trắng và trả về vị trí của '-'
                //console.log(position);
                const chuoi1 = child.key.slice(0, position); //Cắt chuỗi
                //console.log(chuoi1);
                const chuoi2 = child.key.slice(position + 1, child.key.length); //cắt chuỗi
                //console.log(chuoi2);
                if (user.uid != chuoi1 && this.checkIndexOfArray(a,chuoi1)===-1)a.push(chuoi1);
                if (user.uid != chuoi2 && this.checkIndexOfArray(a, chuoi2) === -1 )a.push(chuoi2);
            })
            a.forEach((childa)=>{
                let userInfor = {}
                firebase.database().ref('/people').on('value', (snap) => {
                    snap.forEach((child) => {
                        if (child.val().uid === childa) {
                            userInfor['uid'] = child.val().uid;
                            userInfor['name'] = child.val().name;
                            userInfor['email'] = child.val().email;
                        }
                    })
                })
                console.log(userInfor);
                b.push(userInfor);
            })
            b.forEach((childb) => {
               // console.log(childb)
               let test = {}
               test['uid'] = 1;
               test['name'] ='d.a';
               //console.log(test);
            })

           // console.log(a);
           console.log(b);
            
            this.setState({uidFriend:b})
        })
    }
    checkStringOfArrayObject(arrayObject,object) {
        for(let i=0;i<arrayObject.length;i++){
            console.log(arrayObject[i])
        }
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
                <FlatList
                    data={this.state.uidFriend}
                    keyExtractor={(item,index)=>index.toString()}
                    renderItem={({item})=>{
                        return(
                             <FlatListItem item={item} navigate={navigate}></FlatListItem>
                        )
                    }}
                />
            </View>
        )
    }
}