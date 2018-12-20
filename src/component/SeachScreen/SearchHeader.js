import React,{Component} from 'react'
import {Text,View,Image,TextInput,TouchableHighlight,TouchableOpacity} from 'react-native'
import Css from './Css';
import Icon from 'react-native-vector-icons/Ionicons'
import firebase from 'react-native-firebase'

export default class SearchHeader extends Component{
    constructor(props){
        super(props);
        let user = firebase.auth().currentUser.photoURL?firebase.auth().currentUser.photoURL.toString():null;
        console.log('user '+user)
        this.state={
            returnButton:false,
            image:user          
        }
    }

    // Tạo biến returnButton để thay đổi icon và xử lý navigation
    // Tạo biến identificationReturn để xác định xem action đó có thực thi navigation để trả về Main hay không?
    
    handleSearch(identificationReturn){
        if(this.state.returnButton===false){
            this.setState({returnButton:true});
            this.props.navigation.navigate('search');
        }
        else {
            if(identificationReturn){
                this.setState({returnButton:false})
                this.props.navigation.navigate('main')
            }
        }
    }
    render(){
        {console.log('render')}
        const { navigation } = this.props;
        this.state.image = navigation.getParam('image',this.state.image)
        {console.log("des "+this.state.image)}
        return(
            <View style={Css.container}>
                {this.state.returnButton===false &&
                <TouchableOpacity style={Css.containerSearch} onPress={()=>this.handleSearch(false)}>
                    <View style={Css.containerIconAndTextInPut}>
                        <View style={Css.searchIcon}>
                            <Icon name="md-search" size={25}/>
                        </View>
                        <TextInput style={Css.searchTextInput} placeholder="Search" onFocus={()=>this.handleSearch(false)}/>
                    </View>
                </TouchableOpacity>}

                {this.state.returnButton===true &&
                <TouchableOpacity style={Css.containerSearch} onPress={()=>this.handleSearch(true)}>
                    <View style={Css.containerIconAndTextInPut}>
                        <View style={Css.searchIcon}>
                            <Icon name="md-arrow-back" size={25}/>
                        </View>
                        <TextInput style={Css.searchTextInput} placeholder="Search" onFocus={()=>this.handleSearch(false)}/>
                    </View>
                </TouchableOpacity>}
                <View style={Css.containerAvatar}>
                    <TouchableHighlight activeOpacity={0.75} underlayColor='#a6a6a6' onPress={()=>this.props.navigation.navigate('profile')}>
                        {this.state.image?<Image style={Css.avatarStyle} source={{uri:this.state.image,isStatic:true}}></Image>:  <Image style={Css.avatarStyle} source={{uri:'https://www.gravatar.com/avatar/'}}/>}
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}