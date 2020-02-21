import React from 'react';
import {
    Text,
    View,
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import flatListData from '../data/flatListData';
import { scale, verticalScale } from '../reponsive';
import Icon from 'react-native-vector-icons/AntDesign';



class FlatListItem extends React.Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
            >
                <View style={{ height: verticalScale(70), flex: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={require('../assets/images/avatar-user-1.jpg')}
                            style={{ borderRadius: scale(25), height: verticalScale(45), width: verticalScale(45) }}
                        />
                        <View style={{ marginLeft: scale(12), marginTop: verticalScale(5) }}>
                            <Text style={{ fontWeight: 'bold' }}>{this.props.item.name}</Text>
                            <Text style={{ color: '#866E86' }}>{this.props.item.message}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

        );
    };
};

export default class MainScreen extends React.Component {

    const = { navigation } = this.props;
    render() {
        return (
            <View style={{ flex: 1, margin: scale(15), marginTop: verticalScale(10) }}>

                <View style={{ flex: 9.3 }}>

                    <View style={{ flex: 1 }}>

                        <View style={{ borderRadius: scale(25), backgroundColor: '#F5F5F5', height: verticalScale(40) }}>
                            <View style={{ flexDirection: 'row', marginTop: verticalScale(10), marginLeft: scale(10) }}>
                                <Icon name='search1' size={20} color='#866E86'></Icon>
                                <Text style={{ color: '#866E86', marginLeft: scale(5) }}>Search</Text>
                            </View>
                        </View>

                    </View>

                    <View style={{ flex: 8 }}>
                        <FlatList
                            data={flatListData}
                            renderItem={({ item, index }) => {
                                console.log(`item = ${JSON.stringify(item)}, index = ${index}`);
                                return (
                                    <FlatListItem
                                        item={item}
                                        index={index}
                                        onPress={() => navigation.navigate('ChatScreen')}>
                                    </FlatListItem>
                                );
                            }}
                        ></FlatList>
                    </View>


                </View>

            </View>
        );
    }
};

