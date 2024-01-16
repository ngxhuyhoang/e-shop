import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { FlatList, Image, Text, View, Button, StyleSheet } from 'react-native';

interface ItemProps {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
  totalAmount: number;
}

const Item = ({
  id,
  image,
  title,
  price,
  quantity,
  totalAmount,
}: ItemProps) => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'white',
      marginTop: 15,
      borderRadius: 8,
      padding: 16,
    }}>
    <Text style={{ paddingLeft: 10, fontWeight: 'bold', marginBottom: 8 }}>
      #{id}
    </Text>
    <View style={{ flexDirection: 'row' }}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={{ flex: 1 }}>
        <Text
          style={{
            paddingLeft: 10,
            paddingTop: 10,
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          {title}
        </Text>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <Text style={{ color: 'grey', paddingLeft: 10 }}>
            {quantity} sản phẩm
          </Text>
          <Text
            style={{
              textAlign: 'right',
              color: 'red',
              paddingRight: 20,
              flex: 1,
            }}>
            {price}
          </Text>
        </View>
        <Text style={{ textAlign: 'right', paddingRight: 20, color: 'red' }}>
          <Text style={{ color: 'black' }}>Tổng thanh toán:</Text> {totalAmount}
        </Text>
      </View>
    </View>
  </View>
);

const ListOrder = () => {
  const navigation = useNavigation();

  const [listOrder, setListOrder] = useState([]);
  useEffect(() => {
    handleGetListOrder();
  }, []);

  const handleGetListOrder = async () => {
    try {
      // const accessToken = await AsyncStorage.getItem('userToken');
      const { data: responseData } = await axios.get(
        'https://eshop-api.ngxhuyhoang.com/order/list',
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiIxZWI3NWUwYS01ZTAxLTQ4OTctODg5My1mZmE4MzY5MjY0ZjkiLCJwcm9maWxlSWQiOiI2NDZhZDk1MS05OTNkLTQxNTMtYjY4YS0xMWEwZTk5ZDgyZDciLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNzA1MjkyNDkwLCJleHAiOjE3MDc4ODQ0OTB9.aNnPtuNx_IZpi6WOxmNAaXp8d7_c_wz5mSx6hlO_I_o`,
          },
        },
      );
      // setListOrder(responseData.data);
      console.log(responseData.data);
    } catch (e) {
      console.log(e);
    }
  };

  const renderItem = ({ item }: any) => (
    <Item
      id={item.productId}
      image={item.image}
      title={item.title}
      price={item.price}
      quantity={item.quantity}
      totalAmount={item.totalAmount}
    />
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#DDDDDD' }}>
      <Button
        onPress={() => {
          navigation.navigate('ShoppingCart');
        }}
        title="Shopping Cart"
      />

      <Text
        style={{
          backgroundColor: 'white',
          paddingLeft: 30,
          paddingBottom: 30,
          paddingTop: 20,
          fontSize: 25,
        }}>
        Đơn hàng
      </Text>
      <FlatList
        data={listOrder}
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
              <Text>Không có đơn hàng nào.</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
});
export default ListOrder;
