import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../features/login/login.screen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
