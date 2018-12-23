import {
    StyleSheet
} from 'react-native'
import AppStyles from '../../../../Handling/Css'
export default Css = StyleSheet.create({
    container: {
        backgroundColor: AppStyles.colors.appScreenColor,
        flex:1,
    },
    item: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        width:'95%',
        marginTop: 5,
        borderRadius:5,
        height:50
    },
    containerAvatar:{
        flex:1,
    },
    avatar:AppStyles.avatar,
    containerName:{
        flex:5,
        justifyContent:'center',
       
    },
    containerWave:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    userName: AppStyles.nameText,
    wave: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
    },
    statusDot:{
        position: 'absolute',
        bottom: 0,
        right: 5,
        width: 16,
        height: 16,
        borderRadius: 9,
        borderWidth: 2,
        borderColor: AppStyles.colors.white,
        backgroundColor: AppStyles.colors.onlineGreen
    }
   
})