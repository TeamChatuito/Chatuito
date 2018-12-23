import {
    StyleSheet
} from 'react-native'
import AppStyles from '../../../Handling/Css'
export default Css = StyleSheet.create({
    container: {
        flex:1,
    },
    row:{
        flexDirection:'row',
        flexWrap: 'wrap'
      },
      rowCenter:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      image:{
        width:100,
        height:100
      },
      button: {
        backgroundColor: 'gray',
        width: 150,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
      },
      buttonText:{
        color: 'white'
      },
      modal:{
        height: 200,
        width: 300,
        marginTop: 200,
        padding: 10,
        alignSelf: 'center',
        backgroundColor:'lightblue',
        margin:10,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center'
      },
      closeButton:{
        alignSelf: 'flex-end'
      },
      submitButton:{
        alignSelf: 'center',
        backgroundColor: 'darkblue',
        width: 100,
        height: 44,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
      },
      headerText:{
        fontSize: 20,
        alignSelf: 'center'
      },
      title:{
        backgroundColor:'gray',
        padding:5
      },
      titleText:{
        color: 'white'
      }
})