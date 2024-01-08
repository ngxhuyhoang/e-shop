import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList, Image, Text, View } from 'react-native';
import { style } from 'twrnc';

const data = [
  { id: 1, image: "https://bobui.vn/cms/wp-content/uploads/2022/08/SAN-PHAM-T9-WEB_11-scaled.jpg", name: "Product1", price: 200, quantity: 1, totalAmount: 100 },
  { id: 2, image: "https://bobui.vn/cms/wp-content/uploads/2022/08/SAN-PHAM-T9-WEB_11-scaled.jpg", name: "Product2", price: 100, quantity: 3, totalAmount: 300 },
  { id: 3, image: "https://bobui.vn/cms/wp-content/uploads/2022/08/SAN-PHAM-T9-WEB_11-scaled.jpg", name: "Product3", price: 200, quantity: 2, totalAmount: 400 },
  { id: 4, image: "https://bobui.vn/cms/wp-content/uploads/2022/08/SAN-PHAM-T9-WEB_11-scaled.jpg", name: "Product4", price: 50, quantity: 1, totalAmount: 50 }
];

interface ItemProps {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  totalAmount: number;
}

const Item = ({ id, image, name, price, quantity, totalAmount }: ItemProps) => (
  <View style={styles.container}>
    <Image source={{ uri: image }} style={styles.image} />
    <View>
      <Text>{id}</Text>
      <Text>{name}</Text>
      <Text>Đơn giá: {price}</Text>
      <Text>Số lượng: {quantity}</Text>
      <Text>Tổng tiền sản phẩm: {totalAmount}</Text>
    </View>
  </View>
);

const renderItem = ({ item }: any) => (
  <Item id={item.id} image={item.image} name={item.name} price={item.price} quantity={item.quantity} totalAmount={item.totalAmount} />
);

const ListOrder = () => {
  return (
    <View>
      <Text>Danh sách đơn hàng</Text>
      {data && (
        <FlatList
          data={data}
          renderItem={renderItem}
        // keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row'
  },
  image: {
    width: 80,
    height: 80
  }
})
export default ListOrder;
