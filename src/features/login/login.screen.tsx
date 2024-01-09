import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Keyboard,
  Button,
  Alert,
} from 'react-native';
import MainStack from '../../navigators/main.stack';

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
      const response = await fetch('https://eshop-api.ngxhuyhoang.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        navigate('MainStack');
        Alert.alert('Thông báo', 'Đăng nhập thành công!');
      } else {
        Alert.alert('Thông báo', 'Đăng nhập thất bại!');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Lỗi', 'Có lỗi xảy ra. Vui lòng thử lại sau.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', paddingHorizontal: 16, backgroundColor: '#CFD8EF', }}>
      <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign:'center', marginBottom: 50 }}>Đăng nhập</Text>
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
              style={{ borderWidth: 1, paddingHorizontal: 10, borderRadius: 10, marginBottom: 20}}
            />
            
           
            <View>
              <Button title="Đăng nhập" onPress={handleLogin}
              />
            </View>

            <View style={{marginTop: 20}}>
              <Text style={{textAlign: 'right'}}>Bạn chưa có tài khoản?
              <TouchableOpacity
              onPress={() => {
                navigate(''); 
              }}
              >
                <Text style={{color: '#0c66e4'}}> Đăng ký</Text>
                </TouchableOpacity>
              </Text>
              
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
