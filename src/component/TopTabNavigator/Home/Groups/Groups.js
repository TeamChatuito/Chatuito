import React, { Component } from 'react';
import GroupsList from './GroupsList';
 export default class Group extends Component{
  render(){
    const {navigate} = this.props.navigation;
    return(
      <GroupsList navigate={navigate}/>
    )
  }
}