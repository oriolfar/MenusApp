import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

// import { BasicLateralMenu } from './src/navigator/BasicLateralMenu';
import { LateralMenu } from './src/navigator/LateralMenu';
import { Tabs } from './src/navigator/Tabs';
// import { Text } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      {/* <BasicLateralMenu /> */}
      <LateralMenu />
      {/* <Tabs /> */}
    </NavigationContainer>
  );
};

export default App;
