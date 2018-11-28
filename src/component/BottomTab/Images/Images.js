import MapView,{Marker} from 'react-native-maps';
import {Dimensions,StyleSheet,View} from 'react-native'
import React,{Component} from 'react'
const {width, height} = Dimensions.get('window')
import Css from './Css'
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default class Images extends Component {
    constructor() {
        super()
        this.state = {
            initialPosition: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0,
            },
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
                var lat = parseFloat(position.coords.latitude)
                var long = parseFloat(position.coords.longitude)

                var initialRegion = {
                    latitude: lat,
                    longitude: long,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                }

                this.setState({initialPosition: initialRegion})
            },
            (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});
    }


    renderScreen = () => {
        return (
            <View style={Css.container}>
                <MapView
                    style={Css.map}
                    initialRegion={this.state.initialPosition}>
                    <Marker coordinate={this.state.initialPosition} title={'you are here'}
                            description={'ban dang o day'}/>
                </MapView>
            </View>
        );
    }

    render() {
        return (
            this.renderScreen()
        );
    }
}