import React from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';
import { scale, verticalScale } from '../../reponsive';


export default class LeftHeader extends React.Component {
    
    render() {
        return (
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={require('../../assets/images/avatar-user-1.jpg')}
                        style={{ borderRadius: scale(25), height: verticalScale(30), width: verticalScale(30) }}
                    />
                    <Text style={{ marginLeft: scale(10), fontSize: scale(24), fontWeight: 'bold' }}>Chat</Text>
                </View>
        );
    }
};

