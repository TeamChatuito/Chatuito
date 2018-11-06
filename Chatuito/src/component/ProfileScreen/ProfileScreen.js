import React,{Component} from 'react'
import {View,Text,ScrollView,Image,TouchableOpacity,TextInput} from 'react-native'
import Css from './Css';
import Icon from 'react-native-vector-icons/Ionicons'
import firebase from 'react-native-firebase'
import * as AuthHandle from '../../Handling/AuthHandle'
import Dialog from 'react-native-dialog'

class  Item extends Component{
    render(){
        return(
            <View >
                <TouchableOpacity style={Css.contanerItem} onPress={this.props.onPress}>
                    <View style={Css.avatarContainerItem}>
                        <Icon name={this.props.avatarItem} size={25}/>
                    </View>
                    <View style={Css.titleContainerItem}>
                        <Text style={Css.titleText}>{this.props.titleItem}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

class TextInforRow extends Component{
    render(){
        return(
            <View style={Css.textInforRow}>
                <Text style={Css.text}>{this.props.titleInfor}</Text>
                <Text style={Css.text}> {this.props.valueInfor}</Text>
            </View>
        )
    }
}




export default class ProfileScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            infor: null,
            showProfile: false,
            showEditProfile: false,
            newName: null,
            newPhone: null,
            dialogVisible: false,
            name:'a'
        }
    }
  
    componentWillMount(){
        this.handleCancel();
        this.setState({name:firebase.auth().currentUser.displayName})
        
    }
    
    showProfile() {
        this.state.showProfile?this.setState({showProfile:false}):this.setState({showProfile:true})
    }

    showEditProfile(){
        this.state.showEditProfile?this.setState({showEditProfile:false}):this.setState({showEditProfile:true})
    }

    updateProfile(){
        const user = firebase.auth().currentUser;
        if(this.state.newName){
            user.updateProfile({displayName:this.state.newName.trim()}).then(()=>{
                AuthHandle._showToastSuccessFail('Update Success');
            })
        }
        if(this.state.newPhone) {
            user.updateProfile({phoneNumber:this.state.newPhone.trim()}).then(()=>{
                AuthHandle._showToastSuccessFail('Update Success');
            })
        }
        this.props.navigation.navigate('main');
    }
    handlerLogOut() {
        const user = firebase.auth().currentUser;
        if ( user!= null) {
            firebase
                .auth()
                .signOut(() => {
                    AuthHandle._showToastSuccessFail('Log out successfully !')
                    this.handleCancel();
                    //this.props.navigation.navigate('routerMain')
                })
                .catch((error) => AuthHandle._showToastErrorOrNotthing(error.message))
        }
    }
    handleCancel(){
        this.setState({ dialogVisible: false });
    }

    render(){
        const user = firebase.auth().currentUser;
        return(
            <ScrollView style={Css.container}>
                <View style={Css.containerHeader}>
                    <View style={Css.containerAvatar}>
                         <Image style={Css.Avatar} source={{uri:'https://www.gravatar.com/avatar/'}}/>
                    </View>
                    
                    <Text style={Css.name}>{this.state.name}</Text>
                </View>
                <View style={Css.containerBody}>
                    <View style={Css.containerProfile}>
                        <Item avatarItem='md-person' titleItem='Profile' onPress={()=>this.showProfile()}/>
                        {this.state.showProfile && <View style={Css.profileInfor}>
                                <TextInforRow titleInfor='Name :' valueInfor={this.state.name}/>
                                <TextInforRow titleInfor='Mail :' valueInfor={user.email}/>
                                <TextInforRow titleInfor='Phone :' valueInfor={user.phoneNumber}/>
                                <TextInforRow titleInfor='Uid :' valueInfor={user.uid}/>
                        </View>}
                    </View>
                    <View style={Css.containerSetting}>
                        <Item avatarItem='md-create' titleItem='Update Profile' onPress={()=>this.showEditProfile()}/>
                        {this.state.showEditProfile && <View style={Css.profileInfor}>
                            <View style={Css.editProfile}>
                                <TextInput placeholder="Name" style={Css.inputs} underlineColorAndroid='transparent' onChangeText={(newName)=>{this.setState({newName})}}/>
                                <TextInput placeholder="Phone" style={Css.inputs} underlineColorAndroid='transparent' onChangeText={(newPhone)=>this.setState({newPhone})}/>
                                <TouchableOpacity style={Css.buttonUpdate} onPress={()=>this.updateProfile()}><Text style={Css.textButton}>  Update</Text></TouchableOpacity>
                            </View>
                        </View>}
                        <Item avatarItem='md-person' titleItem='Profile'/>
                        <Item avatarItem='md-person' titleItem='Profile'/>
                         <Item avatarItem='md-person' titleItem='Profile'/>
                        <Item avatarItem='md-person' titleItem='Profile'/>
                    </View>
                </View>
                <View style={Css.containerLogOut}>
                    <TouchableOpacity style={Css.buttonLogOut} onPress={()=>this.setState({dialogVisible:true})}><Text style={Css.textButton}>Log Out</Text></TouchableOpacity>
                </View>
                <Dialog.Container visible={this.state.dialogVisible}>
                    <Dialog.Title>Log out</Dialog.Title>
                    <Dialog.Description>
                        You want to log out ?
                    </Dialog.Description>
                    <Dialog.Input
                        wrapperStyle={Css.wrapperStyleResetPassword}
                        onChangeText={(inputText)=>{this.setState({emailResetPassword:inputText})}}
                    />
                    <Dialog.Button label="Log out" onPress={()=>this.handlerLogOut()} />
                     <Dialog.Button label="Cancel" onPress={()=>this.handleCancel()} />
                </Dialog.Container>
            </ScrollView>
        )
    }
}