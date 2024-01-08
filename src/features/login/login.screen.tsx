import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Text,
  View,
  TextInput,
  Keyboard,
  Button,
  Alert,
} from 'react-native';

const Login = () => {
  const { navigate } = useNavigation<any>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      Alert.alert('Thông báo', 'Email không hợp lệ');
      return;
    }

    if (password.trim() === '') {
      Alert.alert('Thông báo', 'Password không được để trống');
      return;
    }

    if (login) {
      navigate("Login", { userData: { email, password } });
      Alert.alert('Thông báo', 'Đăng nhập thất bại!')
    } else {
      Alert.alert('Thông báo', 'Đăng nhập thành công!')
    }

    navigate('MainStack');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', paddingHorizontal: 16 }}>
      <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign:'center' }}>Đăng nhập</Text>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}

            />
            <View>
              <Button title="Đăng nhập" onPress={handleLogin}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
