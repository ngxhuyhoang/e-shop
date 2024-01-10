import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Profile = () => {
  const { navigate } = useNavigation<any>();

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#f0f'}}>
      
      <View style={{ flex: 1, backgroundColor: '#0c66e4'}}>
      <Text>John Doe</Text>
      </View>
      <View style={{ flex: 3, backgroundColor: '#ffff'}}>
        <Text>abcbcbcbffdfdfdhfgfghfhgf</Text>
      </View>
      <View style={{ 
        flex: 0.3,  
        paddingVertical: 30, 
        paddingHorizontal: 10,
        backgroundColor: '#f0ff00'
        }}>
      <TouchableOpacity
        style={{
          backgroundColor: '#0c66e4',
          borderRadius: 10,
          padding: 8,
          
        }}
        onPress={() => {
          navigate('AuthStack');
        }}>
        <Text style={{ textAlign: 'center', fontSize: 20}}>Logout</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;