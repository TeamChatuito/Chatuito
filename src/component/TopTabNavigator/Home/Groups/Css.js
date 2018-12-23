import {StyleSheet} from 'react-native'
import Metrics from '../../../../Handling/metrics'
import AppStyles from '../../../../Handling/Css'
export default Css = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    card: {
        width: Metrics.screenWidth / 2.5,
        height: Metrics.screenHeight / 3.6,
        margin: 5,
        backgroundColor:'#fff'
    },
    cardView: {
        width: Metrics.screenWidth / 2.5,
        height: Metrics.screenHeight / 3.6,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    nameView: {
        alignItems: 'center',
        padding: 8,
        paddingTop: 16
    },
    nameText: {
        marginTop: 8,
        color: AppStyles.colors.black,
        fontSize: 15,
        textAlign: 'center'
    },
    last: {
        marginTop: 4,
        color: '#313131',
        fontSize: 12,
        textAlign: 'center'
    },
    members: {
        color: AppStyles.colors.grey,
        fontSize: 12,
        textAlign: 'center'
    },
    list: {
        flexDirection: 'row',
        flexWrap:'wrap-reverse',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarLargeView: {
        width: 70,
        height: 70,
        backgroundColor: AppStyles.colors.separator,
        borderRadius: 32,
        justifyContent:'center',
        alignItems:'center'
    },
    avatarImage:{
        height:64,
        width:64,
        borderRadius:100/2,
    }
});