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


interface UserInfo {
  displayName: string;
}

const InfoUser: React.FC = () => {
  const { navigate, goBack } = useNavigation<any>();

  const [editableInfo, setEditableInfo] = useState<UserInfo>({
    displayName: '',
  });

  const [displayNameInput, setDisplayNameInput] = useState('');

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
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.avatar}
      />

      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 25 }}>
          Cập nhật thông tin cá nhân
        </Text>
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
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
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