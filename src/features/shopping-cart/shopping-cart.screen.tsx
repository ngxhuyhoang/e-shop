/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const data = [
  {
    id: 1,
    image:
      'https://bobui.vn/cms/wp-content/uploads/2022/08/SAN-PHAM-T9-WEB_11-scaled.jpg',
    name: 'Product1',
    price: 200,
    quantity: 0,
    totalAmount: 0,
  },
  {
    id: 2,
    image:
      'https://bobui.vn/cms/wp-content/uploads/2022/08/SAN-PHAM-T9-WEB_11-scaled.jpg',
    name: 'Product2',
    price: 100,
    quantity: 0,
    totalAmount: 0,
  },
  {
    id: 3,
    image:
      'https://bobui.vn/cms/wp-content/uploads/2022/08/SAN-PHAM-T9-WEB_11-scaled.jpg',
    name: 'Product3',
    price: 200,
    quantity: 0,
    totalAmount: 0,
  },
  {
    id: 4,
    image:
      'https://bobui.vn/cms/wp-content/uploads/2022/08/SAN-PHAM-T9-WEB_11-scaled.jpg',
    name: 'Product4',
    price: 50,
    quantity: 0,
    totalAmount: 0,
  },
  {
    id: 5,
    image:
      'https://bobui.vn/cms/wp-content/uploads/2022/08/SAN-PHAM-T9-WEB_11-scaled.jpg',
    name: 'Product5',
    price: 300,
    quantity: 0,
    totalAmount: 0,
  },
];

interface ItemProps {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  totalAmount: number;
}

const Item = ({ id, image, name, price, totalAmount }: ItemProps) => {
  const [quantity, setQuantity] = useState(1);
  totalAmount = quantity * price;
  const onIncrease = () => {
    if (quantity > 0) {
      setQuantity(quantity + 1);
    } else {
      setQuantity(1);
    }
  };
  const onDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      Alert.alert('Cảnh báo', 'Hành động này sẽ xóa sản phẩm khỏi giỏ hàng', [
        {
          text: 'Hủy',
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }
  };

  return (
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
            {name}
          </Text>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <Text style={{ color: 'grey', paddingLeft: 10 }}>
              Số lượng:
              <TouchableOpacity
                onPress={() => onDecrease()}
                style={{ flex: 1, marginLeft: 20 }}>
                <Icon name="leftsquareo" size={15} />
              </TouchableOpacity>
              {quantity}
              <TouchableOpacity onPress={() => onIncrease()}>
                <Icon name="rightsquareo" size={15} />
              </TouchableOpacity>
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
            <Text style={{ color: 'black' }}>Tổng thanh toán:</Text>{' '}
            {totalAmount}
          </Text>
        </View>
      </View>
    </View>
  );
};

const ShoppingCart = () => {
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

  const onPress = () => {
    navigation.navigate('ListOrder');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#DDDDDD' }}>
      <Button onPress={onPress} title="List Order" />

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

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
});
export default ShoppingCart;