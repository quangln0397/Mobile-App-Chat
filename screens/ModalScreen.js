import React from 'react';
import {
    Text,
    View,
} from 'react-native';



export default class ModalScreen extends React.Component {
    static navigationOptions = {
        tabBarVisible: false,
      };
    render() {
        return (
            <View>
                <Text>Đây là màn hình Modal</Text>
            </View>
        );
    }
};
