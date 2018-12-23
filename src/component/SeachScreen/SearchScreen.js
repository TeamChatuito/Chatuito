import React,{Component} from 'react'
import {Text, ScrollView, TextInput, FlatList} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Css from './Css'
import firebase from 'react-native-firebase'
import SearchItem from './SearchItems'
export default class SearchScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            uid:null,
            email:'',
            data:[],
            loading:true,
            test:'',
            searchText:''
        }
    }
    getRef(){
        return firebase.database.ref();
    }
    
    listenForItems(){
        var user = firebase.auth().currentUser;
        console.log(user);
        var dataRef = firebase.database().ref('/people');
        dataRef.orderByChild('searchable').startAt(this.state.searchText).endAt(this.state.searchText).on('value',snap=>{
            var items=[];
            snap.forEach(child=>{
                if (child.val().email!= user.email)
                    items.push({
                        name: child.val().name,
                        uid: child.val().uid,
                        email:child.val().email
                    });
            });
            this.setState({
                data:items,
                loading:false
            }) 
        });
        
    }
    
    
    
    render(){
        return(
            <LinearGradient
                            colors={['#fdfbfb','#ebedee']}
                            start={{ x: 1, y: 1 }} 
                            end={{x:0,y:0}} 
                            style={Css.background}
                            >
                            <TextInput
                                        style={Css.textInputStyle}
                                        keyboardType='default'
                                        placeholderTextColor="#515151"
                                        underlineColorAndroid='transparent'
                                        placeholder={'Search now'}
                                        onChangeText={(searchText)=>{
                                            this.setState({searchText})
                                        }}
                                        onSubmitEditing={()=> this.listenForItems()}
                                        />
                            <ScrollView
                                        style={Css.scrollViewStyle}
                                        >
                                        <FlatList
                                            data={this.state.data}
                                            keyExtractor ={(item,index)=>index.toString()}
                                            renderItem={({item})=>{
                                                return (<SearchItem item={item} navigate={navigate} />);
                                            }}      
                                        />
                            </ScrollView>
            </LinearGradient>
        )
    }
}