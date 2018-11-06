import React,{Component} from 'react'
import {
    View, Text, FlatList, TouchableOpacity, Image 
} from 'react-native'
import firebase from 'react-native-firebase'
import Css from './Css'
import ChatPersonal from '../../../TopTabNavigator/Home/Messages/ChatPersonal'
class FlatListItem extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        
        return (
      <TouchableOpacity 
      onPress={() =>{
           this.props.navigate("ChatPersonalScreen", {
            name: this.props.item.name,
            email: this.props.item.email,
            uid: this.props.item.uid
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
          <Text style={Css.profileName}>{this.props.item.name}</Text>
        </View>
      </TouchableOpacity>
    );
    }
};

export default class People extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            uid:null,
            email:'',
            data:[],
            loading:true,
            test:''
        }
    }
    getRef(){
        return firebase.database().ref();    
    }

    listenForItems() {
        var user = firebase.auth().currentUser;
       // console.log('listforitem');
        firebase.database().ref('/people').on('value', snap => {
            // get children as an array
           // console.log('ref/on')
            var items = [];
            snap.forEach(child => {
                if (child.val().email != user.email)
                    items.push({
                        name: child.val().name,
                        uid: child.val().uid,
                        email: child.val().email
                    });
            });
           // console.log(items);
            
            this.setState({
                data: items,
                loading: false
            });
        });

    }
    componentWillMount(){
            
    }

    componentDidMount() {
        this.listenForItems();
    }
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={Css.container}>
                <View style={Css.topGroup}>
                    <Text style={Css.myFriends}>Everybody</Text>
                </View>
                <FlatList
                    data={this.state.data}
                   keyExtractor = {(item,index)=>index.toString()}
                     renderItem={({item})=>{
                         return(
                             <FlatListItem item={item} navigate={navigate}></FlatListItem>
                         );
                    }}
                />
            </View>
        )
    }
}