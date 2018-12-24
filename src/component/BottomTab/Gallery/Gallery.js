var Platform = require('react-native').Platform;
var ImagePicker = require('react-native-image-picker');
import React, {Component} from 'react';
import {
  AppRegistry, StyleSheet, Text, View, Image, TouchableOpacity, Modal, Slider
} from 'react-native';
import styles from './Css'
export default class Gallery extends Component{
  constructor(props) {
    super(props);
    this.state = {
      star1:[],
      image: null,
      modalVisible:false,
      value:1,
      fullScreenImage: null,
      fullScreenModalVisible: false
    };
    this.takePhoto = this.takePhoto.bind(this);
    this.chooseImage = this.chooseImage.bind(this);
    this.setImage = this.setImage.bind(this);
    this.putImageIntoList = this.putImageIntoList.bind(this);
    this.openFullScreenModal = this.openFullScreenModal.bind(this);
  }

  putImageIntoList(){
    this.setState({
      ['star'+this.state.value]:
      [...this.state['star'+this.state.value], this.state.image],
      modalVisible:false,
      value:1
    });
  }


  takePhoto(){
    ImagePicker.launchCamera({noData: true }, this.setImage);
  }

  chooseImage(){
    ImagePicker.launchImageLibrary({noData: true }, this.setImage);
  }

  openFullScreenModal(source){
    this.setState({
      fullScreenImage: source,
      fullScreenModalVisible: true
    });
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

  render() {
    return (
      <View style={{flex: 1}}>
            <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.fullScreenModalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}}>
                    <TouchableOpacity 
                                      style={{flex:1}}
                                      onPress={() => this.setState({fullScreenModalVisible: false})}>
                                      <Image
                                      style={{flex:1}} source={this.state.fullScreenImage}/>
                    </TouchableOpacity>
            </Modal>
      
            <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}}>
                    <View style={styles.modal}>
                          <View>
                                <Text style={{textAlign:'center'}}>Do you want to save picture?</Text>
                                <View style={styles.wrapButtons}>
                                <TouchableOpacity style={styles.submitButton} 
                                                  onPress={() => {this.putImageIntoList();}}>
                                                  <Text style={styles.buttonText}>Yes</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.submitButton}
                                                  onPress={() => this.setState({modalVisible: false})}>
                                                  <Text style={styles.buttonText}>Close</Text>
                                </TouchableOpacity>
                                </View>
                          </View>
                    </View>
            </Modal>

            <View style={{flex: 1}}>
                  <Text style={styles.titleText}>Images</Text>
                  <View style={styles.row}>
                        {this.state.star1.map((source, i)=>
                          <TouchableOpacity onPress={()=> this.openFullScreenModal(source)}>
                                            <Image key={"star1-"+i} 
                                                   style={styles.image} 
                                                   source={source}/>
                          </TouchableOpacity>)}
                  </View>
            </View>
            
            <View style={styles.rowCenter}>
                  <TouchableOpacity style={styles.button} 
                                    onPress={this.takePhoto}>
                                    <Text style={styles.buttonText}>Camera</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} 
                                    onPress={this.chooseImage}>
                                    <Text style={styles.buttonText}>Gallery</Text>
                  </TouchableOpacity>
            </View>
      </View>
          );
        }
      }

     