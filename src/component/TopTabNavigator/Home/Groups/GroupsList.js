import React, { Component } from 'react';
import { FlatList } from 'react-native';
import GroupsItem from './GroupItem';
import Css from './Css';
import LinearGradient from 'react-native-linear-gradient'

const data = [
    {
        name: 'React Native Developers Forum',
        last_active: '15 days ago',
        icon: require('../../../../assets/icon/reactNative_icon.jpg')
    },
    {
        name: 'Android Developers Forum',
        last_active: '30 days ago',
        icon: require('../../../../assets/icon/android_icon.png')
    },
    {
        name: 'iOs Developers Forum',
        last_active: '30 days ago',
        icon: require('../../../../assets/icon/ios_icon.png')
    },
    {
        name: 'Java Developers Forum',
        last_active: '10 days ago',
        icon: require('../../../../assets/icon/java_icon.png')
    },
    {
        name: 'Game Developers Forum',
        last_active: '5 days ago',
        icon: require('../../../../assets/icon/gameDev_icon.jpg')
    },
    {
        name: 'Web Developers Forum',
        last_active: '24 days ago',
        icon: require('../../../../assets/icon/webDev_icon.png')
    },
    {
        name: 'Manga Forum',
        last_active: '1 day ago',
        icon: require('../../../../assets/icon/manga_icon.png')
    },
    {
        name: 'Marvel Forum',
        last_active: '28 days ago',
        icon: require('../../../../assets/icon/marvel_icon.png')
    }
];

export default class GroupsList extends Component {
    
    render() {
        const {navigate} = this.props;
        return (
            <LinearGradient 
                            colors={['#fdfbfb','#ebedee']}
                            start={{ x: 1, y: 1 }} 
                            end={{x:0,y:0}} 
                            style={{flex:1}}>
            <FlatList
                data={data}
                contentContainerStyle={Css.list}
                renderItem={this.renderItem}
                keyExtractor={(item,index)=>index.toString()}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                renderItem = {({ item }) => {return <GroupsItem item={item} navigate={navigate}/>}}
                  />
                  </LinearGradient>
        );
    }
}
