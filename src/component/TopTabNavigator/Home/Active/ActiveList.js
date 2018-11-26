import React, { Component } from 'react';
import { FlatList,View } from 'react-native';
import UserItem from './UserItem';
import StatusActiveUser from './StatusActiveUser';
import firebase from 'react-native-firebase';
import Css from './Css';

export default class ActiveList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            uid: null,
            email: '',
            data: [],
            loading: true,
            test: ''
        }
    }
    getRef() {
        return firebase.database().ref();
    }

    listenForItems() {
        var user = firebase.auth().currentUser;
        // console.log('listforitem');
        firebase.database().ref('/people').on('value', snap => {
            // get children as an array
            // console.log('ref/on')
            var items = [];
            snap.forEach(child => {
                if (child.val().email != user.email && child.val().online===1)
                    items.push({
                        name: child.val().name,
                        uid: child.val().uid,
                        email: child.val().email
                    });
            });
            // console.log(items);

            this.setState({
                data: items,
                loading: false
            });
           // console.log(this.state.data);
        });
    }
    componentDidMount() {
         StatusActiveUser();
        this.listenForItems();
    }


    renderItem = ({ item }) => {
        const {navigate} = this.props.navigation;
        return <UserItem item={item} navigate={navigate}/>;
    };

    render() {
        return (
            <View style={Css.container}>
                <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={(item,key) => key.toString()}
            />
            </View>
        );
    }
}
