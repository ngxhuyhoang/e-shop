import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import MainStack from './main.stack';
import AuthStack from './auth.stack';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const { navigate } = useNavigation<any>();
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        console.log(token)

        if (token) {
          navigate('MainStack');
        } else {
          navigate('AuthStack');
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };
    checkLoginStatus();
  }, [navigate]); 
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="MainStack" component={MainStack} />
    </Stack.Navigator>
  );
};

export default AppStack;
