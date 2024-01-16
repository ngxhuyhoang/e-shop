import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Note from 'react-native-vector-icons/MaterialCommunityIcons';

interface UserInfo {
  displayName: string;
}

const InfoUser: React.FC = () => {
  const { navigate, goBack } = useNavigation<any>();

  const [editableInfo, setEditableInfo] = useState<UserInfo>({
    displayName: '',
  });

  const [displayNameInput, setDisplayNameInput] = useState('');
  const [avatarInput, setAvatarInput] = useState('');

  const updateUserInfo = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('userToken');
      await axios.patch(
        'https://eshop-api.ngxhuyhoang.com/profile/me',
        {
          displayName: displayNameInput,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      Alert.alert('Thông báo', 'Cập nhật thông tin thành công');
    } catch (error) {
      console.error('Error updating user information:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../../../pics/sky.jpg')}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
      </View>

      <View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 20,
              marginTop: 16,
              fontWeight: 'bold',
              marginBottom: 25,
              alignItems: 'center',
            }}>
            Thông tin cá nhân
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigate('InfoUser');
          }}>
          <View
            style={{
              marginBottom: 25,
              borderBottomWidth: 0.5,
              flexDirection: 'row',
            }}>
            <Icon name="user" size={18} style={{ marginTop: 5 }} />
            <Text
              style={{
                fontSize: 20,
                marginBottom: 5,
                marginLeft: 10,
              }}>
              Namee
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('InfoUser');
          }}>
          <View
            style={{
              marginBottom: 25,
              borderBottomWidth: 0.5,
              flexDirection: 'row',
            }}>
            <Icon name="phone" size={18} style={{ marginTop: 5 }} />
            <Text
              style={{
                fontSize: 20,
                marginBottom: 5,
                marginLeft: 10,
              }}>
              +84 678 910 JQK
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('InfoUser');
          }}>
          <View
            style={{
              marginBottom: 25,
              borderBottomWidth: 0.5,
              flexDirection: 'row',
            }}>
            <Icon name="home" size={18} style={{ marginTop: 5 }} />
            <Text
              style={{
                fontSize: 20,
                marginBottom: 5,
                marginLeft: 10,
              }}>
              Trung Hòa, Cầu Giấy
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('InfoUser');
          }}>
          <View
            style={{
              marginBottom: 25,
              borderBottomWidth: 0.5,
              flexDirection: 'row',
            }}>
            <Note
              name="notebook-edit-outline"
              size={18}
              style={{ marginTop: 15 }}
            />
            <TextInput
              placeholder="Note"
              style={{
                fontSize: 20,
                marginBottom: 5,
                marginLeft: 10,
              }}></TextInput>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.editableInfo}>
        <TextInput
          placeholder="displayName"
          style={styles.input}
          value={displayNameInput}
          onChangeText={text => setDisplayNameInput(text)}
        />

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <TouchableOpacity onPress={() => goBack()}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={updateUserInfo}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 16,
  },

  editableInfo: {
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    padding: 8,
  },
  buttonText: {
    fontSize: 16,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    backgroundColor: '#0c66e4',
  },
});

export default InfoUser;
