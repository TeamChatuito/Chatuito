import React,{Component} from 'react';
import {Text,  View, Image, TouchableOpacity, Modal, Slider} from 'react-native';
import firebase from 'react-native-firebase'
import Css from './Css';
import LinearGradient from 'react-native-linear-gradient'
import { showImagePicker } from 'react-native-image-picker';
export default class Gallery extends Component{
  constructor(props){
    super(props);
    this.state={
      rank5:[],
      rank4:[],
      rank3:[],
      rank2:[],
      rank1:[],
      image: null,
      modalVisible:false,
      value:5
    };
  }

  putImageIntoList(){
    this.setState({
      ['star'+this.state.value]:[...this.state['Rank' + this.state.value], this.state.image],
      modalVisible:false,
      value:5
    })
  }
  takePhoto(){
    showImagePicker.launchCamera({noData:true}, this.setImage);
  }

  chooseImage(){
    showImagePicker.lauchImageLibraly({nodata: true}, this.setImage);
  }
  setImage(response){
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
      this.setState({image: source, modalVisible: true});
    }
  }
    render(){
        return(
            <LinearGradient
            colors={['#fdfbfb','#ebedee']}
                            start={{ x: 1, y: 1 }} 
                            end={{x:0,y:0}} 
             style={Css.container}>


            </LinearGradient>
        )
    }
}