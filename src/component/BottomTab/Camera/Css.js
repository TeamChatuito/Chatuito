import {PixelRatio, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    avatarContainer: {
        backgroundColor:'#699DB6',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        borderRadius: 55,
        borderWidth:10,
        width: 200,
        height: 100,
    }
});
export default styles