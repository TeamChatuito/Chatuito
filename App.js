import React,{Component} from 'react'
import AuthNavigator from './src/Navigator/AuthNavigator'
import { YellowBox } from 'react-native';
import ProfileScreen from './src/component/ProfileScreen/ProfileScreen';



export  default  class App extends Component{
  constructor(props){
    super(props);
    YellowBox.ignoreWarnings(['Remote debugger']);
  }
  render(){
    return(
        <AuthNavigator/>
       //<ProfileScreen/>
    )
  }
}