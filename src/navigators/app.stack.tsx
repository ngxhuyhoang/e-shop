import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MainStack from './main.stack';
import AuthStack from './auth.stack';
const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="MainStack" component={MainStack} />
    </Stack.Navigator>
  );
};
export default AppStack;
