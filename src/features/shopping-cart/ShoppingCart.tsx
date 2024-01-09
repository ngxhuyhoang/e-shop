import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { Item, data } from './shopping-cart.screen';
import NavBar from '../nav-bar/nav-bar';

export const ShoppingCart = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }: any) => (
    <Item
      id={item.id}
      image={item.image}
      name={item.name}
      price={item.price}
      quantity={item.quantity}
      totalAmount={item.totalAmount}
    />
  );

  // const onPress = () => {
  //   navigation.navigate('ListOrder');
  // };

  return (
    <View style={{ flex: 1, backgroundColor: '#DDDDDD' }}>
      {/* <Button onPress={onPress} title="List Order" /> */}
      <NavBar title="Gio hang" />
      <Text
        style={{
          backgroundColor: 'white',
          paddingLeft: 30,
          paddingBottom: 30,
          paddingTop: 20,
          fontSize: 25,
        }}>
        Giỏ hàng
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 32 }}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 128,
              }}>
              <Text>Giỏ hàng trống.</Text>
            </View>
          );
        }}
      />
      <Button title="Thanh toán" />
    </View>
  );
};
