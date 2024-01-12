import {  useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';
import InfoUser from './profile-infoUser.screen';
import ListOrder from '../list-order/list-order.screen';
import { data } from '../shopping-cart/shopping-cart.screen';

const Profile = () => {
  const { navigate } = useNavigation<any>();
  const isFocused = useIsFocused();
  interface UserInfo {
    displayName: string;
    email: string;
  }

  const [userInfo, setUserInfo] = useState<UserInfo>({
    displayName: '',
    email: '',
  });
  const fetchUserInfo = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('userToken');
      console.log('Access Token:', accessToken);
      const response = await axios.get('https://eshop-api.ngxhuyhoang.com/profile/me', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      
      const data = response.data;
      setUserInfo(data.data);
    } catch (error) {
      console.error('Error fetching user information:', error);
    }
  };
  

  useEffect(() => {
    console.log('API Response:', data);
    fetchUserInfo();
  }, [isFocused]);

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={{ width: 100, height: 100, borderRadius: 50, marginTop: 70 }}
        />
        <Text style={{
          marginTop: 20, 
          fontSize: 20, 
          }}>Xin chào: {userInfo.displayName}</Text>
          <Text style={{
          marginTop: 20, 
          fontSize: 20, 
          backgroundColor: '#ff0'
          }}>{userInfo.email}</Text>
      </View>
      
      <View style={{
        flex: 2,
        marginTop: 20,
        paddingVertical: 20,
        paddingHorizontal: 50,
      }}>
        <TouchableOpacity
        onPress={() => {
          navigate('InfoUser');
        }}>
          <View style={{
            marginTop: 50,
            marginBottom: 25,
            borderBottomWidth: 0.5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
            <Icon name='user' size={18} style={{ marginTop: 5 }} />
            <Text style={{
              fontSize: 20,
              marginBottom: 5
            }}
            >Thông tin cá nhân</Text>
            <Icon name='right' size={18} style={{ marginTop: 5 }} /></View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => {
          Alert.alert('Thông báo', 'Chức năng đang phát triển, thử lại sau!')
        }}>
          <View style={{
            marginBottom: 25,
            borderBottomWidth: 0.5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
            <Icon1 name='notifications-outline' size={18} style={{ marginTop: 5 }} />
            <Text style={{ fontSize: 20, marginBottom: 5 }}>Thông báo</Text>
            <Icon name='right' size={18} style={{ marginTop: 5 }} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => {navigate('ListOrder')}}>
          <View style={{
            marginBottom: 25,
            borderBottomWidth: 0.5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
            <Icon name='clockcircleo' size={16} style={{ marginTop: 5 }} />
            <Text style={{ fontSize: 20, marginBottom: 5 }}>Lịch sử đơn hàng</Text>
            <Icon name='right' size={18} style={{ marginTop: 5 }} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => {
          Alert.alert('Thông báo', 'Chức năng đang phát triển, thử lại sau!')
        }}>
          <View style={{
            marginBottom: 25,
            borderBottomWidth: 0.5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
            <Icon name='staro' size={18} style={{ marginTop: 5 }} />
            <Text style={{ fontSize: 20, marginBottom: 5 }}>Đánh giá ứng dụng</Text>
            <Icon name='right' size={18} style={{ marginTop: 5 }} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => {
          Alert.alert('Thông báo', 'Chức năng đang phát triển, thử lại sau!')
        }}>
          <View style={{
            marginBottom: 25,
            borderBottomWidth: 0.5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
            <Icon1 name='help-circle-outline' size={22} style={{ marginTop: 5 }} />
            <Text style={{ fontSize: 20, marginBottom: 5 }}>Trung tâm trợ giúp</Text>
            <Icon name='right' size={18} style={{ marginTop: 5 }} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.7 }}>
        <TouchableOpacity
          style={{
            borderRadius: 10,
            backgroundColor: '#0c66e4',
            paddingVertical: 8,
            paddingHorizontal: 10,
            marginBottom: 20,
            margin: 16,
            alignItems: 'center'
          }}
          onPress={() => {
            navigate('AuthStack');

          }}>
          <Text style={{ fontSize: 25 }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
