import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface INavbarProps {
  title: string;
}

const NavBar = (props: INavbarProps) => {
  const { goBack } = useNavigation<any>();

  return (
    <View style={styles.navBarContainer}>
      <TouchableOpacity onPress={goBack}>
        <Ionicons name="chevron-back" size={20} />
      </TouchableOpacity>
      <View>
        <Text style={styles.tittleText}>{props.title}</Text>
      </View>
      <View style={styles.arrowIcon} />
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navBarContainer: {
    height: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  arrowIcon: { width: 20, height: 20 },
  tittleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
