import {StyleSheet} from 'react-native'
import AppStyles from '../../../Handling/Css'
export default Css = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'stretch',
  },
  rightButton: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 10,
    padding: 0
  },
  topGroup: {
    flexDirection: "row",
    margin: 5,
    backgroundColor:'#ffffff20',
    padding:8,
    borderRadius:10
  },
  myFriends: {
    flex: 1,
    color: '#929292',
    fontSize: 20,
    
    fontFamily:'CormorantGaramond-Light',
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    height:50,
    marginTop:5,
    marginHorizontal:10,
    borderRadius:10,
    paddingLeft:10,
    backgroundColor:'#ffffff10',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 5
  },
  profileName: {
    marginLeft: 6,
    fontSize: 14,
    color:'#929292',
  }
})