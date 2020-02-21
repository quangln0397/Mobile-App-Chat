/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppTabs from './AppNavigator';



class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <AppTabs/>
      </NavigationContainer>
    );
  }
};

export default App;
