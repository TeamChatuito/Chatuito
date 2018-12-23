import React,{Component} from 'react'
import {View,Text,ScrollView,Image,TouchableOpacity,TextInput} from 'react-native'
import Css from './Css';
let Platform = require('react-native').Platform;
let ImagePicker = require('react-native-image-picker');
import Icon from 'react-native-vector-icons/Ionicons'
import firebase from 'react-native-firebase'
import * as AuthHandle from '../../Handling/AuthHandle'
import Dialog from 'react-native-dialog'
import SearchHeader from '../SeachScreen/SearchHeader'
import LinearGradient from 'react-native-linear-gradient'
class  Item extends Component{
    render(){
        return(
            <View
                            >
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
            image: null,
            infor: null,
            showProfile: false,
            showEditProfile: false,
            showChangePassword:false,
            newName: null,
            newPhone: null,
            dialogVisible: false,
            oldPassword:null,
            newPassword:null,
            reNewPassword:null,
            name:'a'
        }
        this.chooseImage = this.chooseImage.bind(this);
    }

    componentWillMount(){
        this.handleCancel();
        this.setState({name:firebase.auth().currentUser.displayName})
        this.setState({image:firebase.auth().currentUser.photoURL})
    }
    chooseImage(){
        const user = firebase.auth().currentUser;
        ImagePicker.showImagePicker({noData: true }, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                //If it is iOS, remove 'file://' prefix
                let source = {uri: response.uri.replace('file://', ''), isStatic: true};

                //If android, don't need to remove the 'file://'' prefix
                if (Platform.OS === 'android') {
                    source = {uri: response.uri, isStatic: true};
                }
                this.setState({image: response.uri});
                this.updateImage()
            }
        });
    }
    showProfile() {
        this.state.showProfile?this.setState({showProfile:false}):this.setState({showProfile:true})
    }

    showEditProfile(){
        this.state.showEditProfile?this.setState({showEditProfile:false}):this.setState({showEditProfile:true})
    }
    showChangePassword(){
        this.state.showChangePassword?this.setState({showChangePassword:false}):this.setState({showChangePassword:true})
    }
    updateImage(){
        const { navigation } = this.props;
        const user = firebase.auth().currentUser;
        if(this.state.image){
            user.updateProfile({photoURL:this.state.image.trim()}).then(()=>{
                AuthHandle._showToastSuccessFail('Update Image Success');
            })
        }
        firebase.database().ref('/people').on('value', (snap) => {
            snap.forEach(child => {
                if (child.val().uid === user.uid) {
                    firebase.database().ref('/people/' + child.key + '/image').set(this.state.image)
                }
            })
        })
        this.props.navigation.push('routerMain', {
            image: this.state.image
            //={console.log(this.state.image)}
        })
        {console.log("link "+this.state.image)}
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

    reauthenticate = (currentPassword) => {
        var user = firebase.auth().currentUser;
        var cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
        return user.reauthenticateWithCredential(cred);
    }
    changePassword(){
        if (this.state.oldPassword===this.state.newPassword){
            AuthHandle._showToastSuccessFail('Update failed, old password and new password are the same!');
            return;
        }
        this.reauthenticate(this.state.oldPassword).then(() => {
            var user = firebase.auth().currentUser;
            if (this.state.newPassword!==this.state.reNewPassword){
                AuthHandle._showToastSuccessFail('Update failed, the two new password below does not match each other!');
                return;
            }
                user.updatePassword(this.state.newPassword).then(() => {
                AuthHandle._showToastSuccessFail('Updated your password')
                }).catch((error) => { console.log(error.message); });
                }).catch((error) => { console.log(error.message) });
            
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
        <LinearGradient   colors={['#fdfbfb','#ebedee']}
        start={{ x: 1, y: 1 }} 
        end={{x:0,y:0}} 
        style={Css.container}>  
            <ScrollView style={Css.container}>
                <View style={Css.containerHeader}>
                    <View style={Css.containerAvatar}>
                        {this.state.image?<Image style={Css.Avatar} source={{uri:this.state.image,isStatic:true}}></Image>:  <Image style={Css.Avatar} source={{uri:'https://www.gravatar.com/avatar/'}}/>}
                        <TouchableOpacity style={Css.button} onPress={this.chooseImage}>
                            <Text style={Css.buttonText}>Choose Images...</Text>
                        </TouchableOpacity>
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
                        </View>}
                    </View>
                    <View style={Css.containerSetting}>
                        <Item avatarItem='md-create' titleItem='Edit your profile' onPress={()=>this.showEditProfile()}/>
                        {this.state.showEditProfile && <View style={Css.profileInfor}>
                            <View style={Css.editProfile}>
                                <TextInput placeholder="Name" style={Css.inputs} underlineColorAndroid='transparent' onChangeText={(newName)=>{this.setState({newName})}}/>
                                <TextInput placeholder="Phone" style={Css.inputs} underlineColorAndroid='transparent' onChangeText={(newPhone)=>this.setState({newPhone})}/>
                                <TouchableOpacity style={Css.buttonUpdate} onPress={()=>this.updateProfile()}><Text style={Css.textButton}>Update</Text></TouchableOpacity>
                            </View>
                        </View>}
                    </View>
                    <View style={Css.containerSetting}>
                        <Item avatarItem='md-create' titleItem='Change Password' onPress={()=>this.showChangePassword()}/>
                        { this.state.showChangePassword && <View style={Css.profileInfor}>
                            <View style={Css.editProfile}>
                            <TextInput placeholder="Old Password" style={Css.inputs} underlineColorAndroid='transparent' onChangeText={(oldPassword)=>{this.setState({oldPassword})}}/>
                            <TextInput placeholder="New Password" style={Css.inputs} underlineColorAndroid='transparent' onChangeText={(newPassword)=>{this.setState({newPassword})}}/>
                            <TextInput placeholder="Re-type New Password" style={Css.inputs} underlineColorAndroid='transparent' onChangeText={(reNewPassword)=>{this.setState({reNewPassword})}}/>
                            <TouchableOpacity style={Css.buttonUpdate} onPress={()=>this.changePassword()}><Text style={Css.textButton}>Change Password</Text></TouchableOpacity>
                         </View>
                         </View>}
                    </View>
                    <View style={Css.containerSetting}>
                        <Item avatarItem='md-person' titleItem='Verifing Status'/>
                    </View>
                </View>


                <View style={Css.containerLogOut}>
                    <TouchableOpacity style={Css.buttonLogOut} onPress={()=>this.setState({dialogVisible:true})}><Text style={Css.textButton}>Log Out</Text></TouchableOpacity>
                </View>
                <Dialog.Container visible={this.state.dialogVisible}>
                    <Dialog.Title>Log out</Dialog.Title>
                    <Dialog.Description>
                       Do you want to log out?
                    </Dialog.Description>
                    <Dialog.Input
                        wrapperStyle={Css.wrapperStyleResetPassword}
                        onChangeText={(inputText)=>{this.setState({emailResetPassword:inputText})}}
                    />
                    <Dialog.Button label="Log out" onPress={()=>this.handlerLogOut()} />
                    <Dialog.Button label="Cancel" onPress={()=>this.handleCancel()} />
                </Dialog.Container>
            </ScrollView>
            </LinearGradient>
        )
    }
}