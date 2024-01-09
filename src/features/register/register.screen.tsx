import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import axios from 'axios';
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
import AuthStack from '../../navigators/auth.stack';

const Register = () => {
  const { navigate } = useNavigation<any>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [register, setRegister] = useState('false');

  const validateEmail = (email: string) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return emailRegex.test(email);
  };

  const handleRegister = async () => {
    if (!validateEmail(email)) {
      Alert.alert('Thông báo', 'Email không hợp lệ');
      return;
    }

    if (password.trim() === '') {
      Alert.alert('Thông báo', 'Password không được để trống');
      return;
    }

    if (confirmPassword.trim() === ''){
        Alert.alert('Thông báo', 'ConfirmPassword');
        return;
    }

    if (firstName.trim() === ''){
        Alert.alert('Thông báo', 'First Name không để trống');
        return;
    }

    if (lastName.trim() === ''){
        Alert.alert('Thông báo', 'Last Name không để trống');
        return;
    }

    try {
        const response = await axios.post('https://eshop-api.ngxhuyhoang.com/auth/register', {
          email: email,
          password: password,
          confirmPassword: confirmPassword,
          firstName: firstName,
          lastName: lastName
          }, {
            headers: {
              'Content-Type': 'application/json',
              },
          });
          console.log(response.data);
          navigate('Login');
          Alert.alert('Thông báo', 'Đăng ký thành công!')
        }catch (error) {
          console.error(error);
          Alert.alert('Lỗi', 'Email đã tồn tại! Thử lại!')
        }
        
    };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', paddingHorizontal: 16, backgroundColor: '#CFD8EF', }}>
      <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{
            borderWidth: 0.3,
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 10, 
          }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign:'center', marginBottom: 50 }}>Đăng ký</Text>
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
            <TextInput
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              autoCorrect={false} 
              secureTextEntry={true} 
              style={{ borderWidth: 1, paddingHorizontal: 10, borderRadius: 10, marginBottom: 20}}
            />
            <TextInput
              placeholder="First Name"
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
              style={{ borderWidth: 1, paddingHorizontal: 10, borderRadius: 10, marginBottom: 20}}
            />
            <TextInput
              placeholder="Last Name"
              value={lastName}
              onChangeText={(text) => setLastName(text)}
              style={{ borderWidth: 1, paddingHorizontal: 10, borderRadius: 10, marginBottom: 20}}
            />
            
           
            <View>
                <TouchableOpacity style={{
                    backgroundColor: '#0c66e4',
                    borderRadius: 10,
                    padding: 10,
                }} 
                onPress={handleRegister}>
                    
                    <Text style={{ textAlign: 'center', fontSize: 20}}>Đăng ký</Text>
                </TouchableOpacity>
              
            </View>

            <View style={{marginTop: 20}}>
              <Text style={{textAlign: 'right'}}>Bạn đã có tài khoản?
              
                <Text style={{color: '#0c66e4'}} onPress={() => {navigate('Login')}}> Đăng nhập</Text>
              </Text>
              
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Register;
