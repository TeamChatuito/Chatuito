import React, { Component } from 'react';
import { View ,Image} from 'react-native';
import { Card, Text,} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'
import Css from './Css';
import PropTypes from 'prop-types';

export default class GroupItem extends Component {
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
                            Active {item.last_active}
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
