import {StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
  row:{
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent:'flex-start',
    width:'95%',
    alignSelf:'center',
    marginTop:5
  },
  rowCenter:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image:{
    width: 90,
    height:90,
    marginBottom:5,
    marginRight:2.5,
    marginLeft:2.5
  },
  button: {
    backgroundColor: '#fff',
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  buttonText:{
    color: '#000'
  },
  modal:{
    height: '25%',
    width: '70%',
    marginTop: 200,
    padding: 10,
    alignSelf: 'center',
    backgroundColor:'#fff',
    margin:10,
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeButton:{
  },
  submitButton:{
    backgroundColor: '#28D8A1',
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
  titleText:{
    backgroundColor:'white',
    borderRadius:10,
    width:'95%',
    height:40,
    marginTop:10,
    alignSelf:'center',
    textAlign:'center',
    paddingLeft:10,
    fontSize:16,
    textAlignVertical:'center'
  },
  wrapButtons:{
    justifyContent:'center',
    width:'90%',
    flexDirection:'row'
  }
});