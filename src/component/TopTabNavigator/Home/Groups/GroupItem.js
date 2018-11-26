import React, { Component } from 'react';
import { View ,Image} from 'react-native';
import { Card, Text,} from 'react-native-paper';
import Css from './Css';
import PropTypes from 'prop-types';
import firebase from 'react-native-firebase';

export default class GroupItem extends Component {
    constructor(props){
        super(props);
        this.state={timeMessLast:null,hours:null,minutes:null,seconds:null}
         this.getTimeMessLast();
    }

    

    chooseTimeMessLast(sec_num){
        //895975
        
        const second = sec_num / 1000;
        const minutes = parseInt(second / 60);
        const hours = parseInt(minutes / 60);
        const days = parseInt(hours / 24);
        const years = parseInt(days/ 365);
        if(second<1) return '1 seconds ago'; //return seconds
        if(second>=1 && second<60) return second+' seconds ago';
        if(minutes<60) return minutes+' minutes ago';
        if(hours<24) return hours+' hours ago';
        if(days<365) return days+' days ago';
        return years+ 'years ago';
    }

    getTimeMessLast() {
        const {item} = this.props;
        let now = new Date().getTime();
        firebase.database().ref().child('/ChatGroup/' + item.name).limitToLast(1).on('value', (value) => {
            value.forEach((child) => {
                const time = now - child.val().createdAt;
                
                this.setState({timeMessLast:this.chooseTimeMessLast(time)})
            })
        })
    }
    componentDidMount(){
       
    }
    render() {
        const { item,navigate} = this.props;
        return (
            <Card style={Css.card} onPress={()=>navigate('GroupChatScreen',{nameGroup:item.name})}>
                <View style={Css.cardView}>
                    <View style={Css.nameView}>
                        <View style={Css.avatarLargeView}>
                            <Image style={Css.avatarImage} source={item.icon}/>
                        </View>
                        <Text style={Css.nameText}>{item.name}</Text>
                        <Text style={Css.last}>
                            Active {this.state.timeMessLast}
                        </Text>
                    </View>
                </View>
            </Card>
        );
    }
}

GroupItem.propTypes = {
    item: PropTypes.object
};
