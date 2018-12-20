import {PixelRatio, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    avatarContainer: {
        backgroundColor:'#ffffff20',
        borderWidth: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:200,
        borderWidth:0.1,
        width:200,
        height: 200
    },
    avatar: {
        borderRadius: 200,
        borderWidth:5,
        width: 200,
        height: 200,
        borderColor:'#ffffff50',
    },
    textInsideButton:{
        color:'#929292',
        fontFamily:'CormorantGaramond-Light',
        fontSize:20
    },
});
export default styles