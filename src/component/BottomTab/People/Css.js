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
    marginBottom:0,
    backgroundColor:'#fff',
    alignItems:'center',
    borderRadius:5,
    height:50,
    justifyContent:'center',
    backgroundColor:'#28D8A1'
  },
  myFriends: {
    color: '#fff',
    fontSize: 16,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    height:50,
    marginTop:5,
    marginHorizontal:10,
    borderRadius:10,
    paddingLeft:10,
    backgroundColor:'#fff',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 5
  },
  profileName: {
    marginLeft: 6,
    fontSize: 16,
    color:'#000',
  }
})