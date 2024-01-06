import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Login = () => {
  const { navigate } = useNavigation<any>();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          navigate('MainStack');
        }}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
