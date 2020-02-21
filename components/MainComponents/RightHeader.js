import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { scale, verticalScale } from '../../reponsive';


export default class RightHeader extends React.Component {

    render() {
        return (
            <View style={{ margin: scale(5) }}>
                <TouchableOpacity
                    onPress={() => alert('This is a button!')}
                >
                    <Text>Right Header</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

