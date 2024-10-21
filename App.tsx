import { StyleSheet, View} from 'react-native';
import React from 'react';
// import Navigation from './src/navigation/StackNavigation'
import { NavigationContainer } from '@react-navigation/native';
import {Provider as ReduxProvider} from 'react-redux';
import TabNavigator from './src/navigation/TabNavigation';
import Navigation from './src/navigation/StackNavigation'
import { store } from './src/redux/store';

const App = () => {
  return (
  
    <View style={{ flex: 1 }}>
     <ReduxProvider store={store}>
      <NavigationContainer>
      <Navigation />
      {/* <TabNavigator /> */}
      </NavigationContainer>
      </ReduxProvider>
    </View>

  );
};

export default App;

const styles = StyleSheet.create({});
