import {StyleSheet} from 'react-native'

export default Css = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: "stretch",
    marginRight: 10,
    marginLeft: 10
  },
  rightButton: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 10,
    padding: 0
  },
  topGroup: {
    flexDirection: "row",
    margin: 10
  },
  myFriends: {
    flex: 1,
    color: "#3A5BB1",
    //secondaryColor: '#E9E9E9',
    //grayColor: '#A5A5A5',
    fontSize: 16,
    padding: 5
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    marginLeft: 6,
    marginBottom: 8
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 6
  },
  profileName: {
    marginLeft: 6,
    fontSize: 16
  }
})