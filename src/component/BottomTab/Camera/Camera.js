/** @format */

import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import styles from './Css'
import ImagePicker from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient'

export default class Camera extends React.Component {
    state = {
        avatarSource: null
    };

    constructor(props) {
        super(props);

        this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    }

    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
            },
        };

        ImagePicker.launchCamera(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                });
            }
        });
    }

    /*selectVideoTapped() {
        const options = {
            title: 'Video Picker',
            takePhotoButtonTitle: 'Take Video...',
            mediaType: 'video',
            videoQuality: 'medium',
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled video picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                this.setState({
                    videoSource: response.uri,
                });
            }
        });
    }*/

    render() {
        return (
            <LinearGradient 
                            colors={['#fdfbfb','#ebedee']}
                            start={{ x: 1, y: 1 }} 
                            end={{x:0,y:0}} 
                            style={styles.container}>
                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)} style={{alignItems:"center"}}>
                    <View
                        style={[
                            styles.avatarContainer,
                            { marginBottom: 20 },
                        ]}
                    >
                        {this.state.avatarSource === null ? (
                            <Text style={styles.textInsideButton}>Take a Photo</Text>
                        ) : (
                            <Image style={styles.avatar} source={this.state.avatarSource} />
                        )}
                    </View>
                </TouchableOpacity>
            </LinearGradient>
        );
    }
}

