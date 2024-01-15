import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import AuthStack from './auth.stack';
import MainStack from './main.stack';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const { navigate } = useNavigation<any>();

  useEffect(() => {
    checkLoginStatus();
  }, [navigate]);

  const checkLoginStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        navigate('MainStack');
      } else {
        navigate('AuthStack');
      }
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  };

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="MainStack" component={MainStack} />
    </Stack.Navigator>
  );
};
export default AppStack;
