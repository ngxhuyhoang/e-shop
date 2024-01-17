import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Alert,
  Image,
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';
import InfoUser from './profile-infoUser.screen';
import ListOrder from '../list-order/list-order.screen';

const Profile = () => {
  const { navigate } = useNavigation<any>();
  const isFocused = useIsFocused();
  interface UserInfo {
    displayName: string;
    avatar: string;
  }

  const [userInfo, setUserInfo] = useState<UserInfo>({
    displayName: '',
    avatar: '',
  });
  const fetchUserInfo = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('userToken');
      console.log('Access Token:', accessToken);
      const response = await axios.get(
        'https://eshop-api.ngxhuyhoang.com/profile/me',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      const data = response.data;
      setUserInfo(data.data);
    } catch (error) {
      console.error('Error fetching user information:', error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, [isFocused]);

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      
      <View style={{ flex: 1 }}>
        
        <ImageBackground
          source={require('../../../pics/screenBlue.jpg')}
          resizeMode="cover"
          style={{ width: '100%', height: 250, position: 'absolute' }}
        />
         {/* <TouchableOpacity>
          <Icon
            name="edit"
            size={25}
            style={{ marginLeft: 70, marginTop: 10, position: 'absolute' }}
          />
        </TouchableOpacity> */}
      </View>
      <View style={{ marginLeft: 16, paddingTop: 40 }}>
        <Image
          source={require('../../../pics/sky.jpg')}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
          }}
        />
        <View style={{position: 'absolute', marginHorizontal: 96, marginTop: 40}}>
        <Text
          style={{
            marginTop: 20,
            fontSize: 20,
          }}>
          Xin chào: {userInfo.displayName}
        </Text>
        <Text
          style={{
            marginTop: 20,
            fontSize: 20,
          }}>
          {userInfo.avatar}
        </Text>
        </View>
       
      </View>
{/* 
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          marginTop: 30,
          paddingVertical: 16,
          marginVertical: 16,
        }}>
        <Text
          style={{
            marginTop: 20,
            fontSize: 20,
          }}>
          Xin chào: {userInfo.displayName}
        </Text>
        <Text
          style={{
            marginTop: 20,
            fontSize: 20,
          }}>
          {userInfo.avatar}
        </Text>
      </View> */}

      <View
        style={{
          flex: 2,
          marginTop: 20,
          paddingVertical: 20,
          paddingHorizontal: 50,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigate('InfoUser');
          }}>
          <View
            style={{
              marginBottom: 25,
              borderBottomWidth: 0.5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Icon name="user" size={18} style={{ marginTop: 5 }} />
            <Text
              style={{
                fontSize: 20,
                marginBottom: 5,
              }}>
              Thông tin cá nhân
            </Text>
            <Icon name="right" size={18} style={{ marginTop: 5 }} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Thông báo', 'Chức năng đang phát triển, thử lại sau!');
          }}>
          <View
            style={{
              marginBottom: 25,
              borderBottomWidth: 0.5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Icon1
              name="notifications-outline"
              size={18}
              style={{ marginTop: 5 }}
            />
            <Text style={{ fontSize: 20, marginBottom: 5 }}>Thông báo</Text>
            <Icon name="right" size={18} style={{ marginTop: 5 }} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('ListOrder');
          }}>
          <View
            style={{
              marginBottom: 25,
              borderBottomWidth: 0.5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Icon name="clockcircleo" size={16} style={{ marginTop: 5 }} />
            <Text style={{ fontSize: 20, marginBottom: 5 }}>
              Lịch sử đơn hàng
            </Text>
            <Icon name="right" size={18} style={{ marginTop: 5 }} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Thông báo', 'Chức năng đang phát triển, thử lại sau!');
          }}>
          <View
            style={{
              marginBottom: 25,
              borderBottomWidth: 0.5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Icon name="staro" size={18} style={{ marginTop: 5 }} />
            <Text style={{ fontSize: 20, marginBottom: 5 }}>
              Đánh giá ứng dụng
            </Text>
            <Icon name="right" size={18} style={{ marginTop: 5 }} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Thông báo', 'Chức năng đang phát triển, thử lại sau!');
          }}>
          <View
            style={{
              marginBottom: 25,
              borderBottomWidth: 0.5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Icon1
              name="help-circle-outline"
              size={22}
              style={{ marginTop: 5 }}
            />
            <Text style={{ fontSize: 20, marginBottom: 5 }}>
              Trung tâm trợ giúp
            </Text>
            <Icon name="right" size={18} style={{ marginTop: 5 }} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Thông báo', 'Chức năng đang phát triển, thử lại sau!');
          }}>
          <View
            style={{
              marginBottom: 25,
              borderBottomWidth: 0.5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Icon1
              name="chatbubble-ellipses-outline"
              size={22}
              style={{ marginTop: 5 }}
            />
            <Text style={{ fontSize: 20, marginBottom: 5 }}>
              Chat với nhân viên hỗ trợ
            </Text>
            <Icon name="right" size={18} style={{ marginTop: 5 }} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.7 }}>
        <TouchableOpacity
          style={{
            borderRadius: 10,
            backgroundColor: '#0c66e4',
            paddingVertical: 8,
            paddingHorizontal: 8,
            margin: 16,
            alignItems: 'center',
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
