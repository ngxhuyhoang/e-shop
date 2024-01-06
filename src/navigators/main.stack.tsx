import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AppTab from './app.tab';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AppTab" component={AppTab} />
    </Stack.Navigator>
  );
};

export default MainStack;
