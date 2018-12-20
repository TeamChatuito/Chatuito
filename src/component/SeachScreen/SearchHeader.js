import React,{Component} from 'react'
import {Text,View,Image,TextInput,TouchableHighlight,TouchableOpacity} from 'react-native'
import Css from './Css';
import Icon from 'react-native-vector-icons/Ionicons'
import firebase from 'react-native-firebase'
import LinearGradient from 'react-native-linear-gradient'
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
    //chay thu di
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
        return(

            <LinearGradient 
                            colors={['#001818','#001818']}
                            start={{ x: 1, y: 1 }} 
                            end={{x:0,y:0}} 
                            style={Css.container}
                            >
                
                {this.state.returnButton===false &&
                
                <TouchableOpacity 
                                    style={Css.containerSearch} 
                                    onPress={()=>this.handleSearch(false)}>
                    
                                    <View 
                                        style={Css.containerIconAndTextInPut}>
                                        
                                        <View 
                                            style={Css.searchIcon}>
                                            <Icon name="md-search" size={25} color={"#929292"}
                                            
                                            />
                                        </View>
                                        
                                        <TextInput 
                                            style={Css.searchTextInput} 
                                            placeholder="Search" 
                                            placeholderTextColor="#929292"
                                            onFocus={()=>this.handleSearch(false)}/>
                                    </View>


                </TouchableOpacity>}

                {this.state.returnButton===true &&
                
                <TouchableOpacity 
                                    style={Css.containerSearch} 
                                    onPress={()=>this.handleSearch(true)}>
                    
                                <View style={Css.containerIconAndTextInPut}>
                                <View style={Css.searchIcon}>
                                <Icon name="md-arrow-back" size={25} color={"#929292"}/>
                        </View>
                        <TextInput style={Css.searchTextInput} placeholderTextColor="#515151"
                                     placeholder="Search" onFocus={()=>this.handleSearch(false)}/>
                    </View>
                </TouchableOpacity>}
                <View style={Css.containerAvatar}>
                    <TouchableHighlight activeOpacity={0.75} underlayColor='#a6a6a6' onPress={()=>this.props.navigation.navigate('profile')}>
                    {this.state.image?<Image style={Css.AvatarStyle} source={{uri:this.state.image,isStatic:true}}></Image>:  <Image style={Css.AvatarStyle} source={{uri:'https://www.gravatar.com/avatar/'}}/>}                       
                    </TouchableHighlight>
                </View>
            </LinearGradient>
        )
    }
}