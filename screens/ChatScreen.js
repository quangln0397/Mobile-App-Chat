import React from 'react';
import {
    Text,
    View,
} from 'react-native';



export default class ChatScreen extends React.Component {
    static navigationOptions = {
        tabBarVisible: false,
      };
    render() {
        return (
            <View>
                <Text>Đây là màn hình chat</Text>
            </View>
        );
    }
};
