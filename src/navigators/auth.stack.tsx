
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../features/login/login.screen';
import Register from '../features/register/register.screen';
import Profile from '../features/profile/profile.screen';
import InfoUser from '../features/profile/profile-infoUser.screen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="InfoUser" component={InfoUser} />
    </Stack.Navigator>
    );
  
};

export default AuthStack;
