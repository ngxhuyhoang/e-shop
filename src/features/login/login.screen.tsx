import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import axios from 'axios';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
  TextInput,
  Keyboard,
  Button,
  Alert,
} from 'react-native';
import MainStack from '../../navigators/main.stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const { navigate } = useNavigation<any>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('false');

  const validateEmail = (email: string) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      Alert.alert('Thông báo', 'Email không hợp lệ');
      return;
    }

    if (password.trim() === '') {
      Alert.alert('Thông báo', 'Password không được để trống');
      return;
    }

    try {
      const response = await axios.post('https://eshop-api.ngxhuyhoang.com/auth/login', {
        email: email,
        password: password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      await AsyncStorage.setItem('userToken', response.data.data.accessToken)
      navigate('MainStack');
    } catch (error) {
      console.error(error);
      Alert.alert('Lỗi', 'Email hoặc Password không chính xác!')
    }

  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', paddingHorizontal: 16, backgroundColor: '#CFD8EF', }}>
      <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ 
            borderWidth: 0.3,
            borderRadius: 15,
            paddingVertical: 10, 
            paddingHorizontal: 10, 
            //backgroundColor: '#fff',
            }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 50 }}>Đăng nhập</Text>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{ borderWidth: 1, paddingHorizontal: 10, borderRadius: 10, marginBottom: 10 }}
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              autoCorrect={false}
              secureTextEntry={true}
              style={{ borderWidth: 1, paddingHorizontal: 10, borderRadius: 10, marginBottom: 20 }}
            />
            <View>
              <TouchableOpacity
              style={{
                backgroundColor: '#0c66e4',
                padding: 10,
                borderRadius: 10,
              }}
              onPress={handleLogin}>
                <Text style={{textAlign: 'center', fontSize: 20}}>Đăng nhập</Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 20 }}>
              <Text style={{ textAlign: 'right' }}>Bạn chưa có tài khoản?
                <Text style={{ color: '#0c66e4' }}
                  onPress={() => {
                    navigate('Register');
                  }}> Đăng ký</Text>
              </Text>

            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
