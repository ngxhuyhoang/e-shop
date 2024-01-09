import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList, Image, Text, View } from 'react-native';
import { style } from 'twrnc';

const data = [
  { id: 1, image: "https://bobui.vn/cms/wp-content/uploads/2022/08/SAN-PHAM-T9-WEB_11-scaled.jpg", name: "Product1", price: 200, quantity: 1, totalAmount: 100 },
  { id: 2, image: "https://bobui.vn/cms/wp-content/uploads/2022/08/SAN-PHAM-T9-WEB_11-scaled.jpg", name: "Product2", price: 100, quantity: 3, totalAmount: 300 },
  { id: 3, image: "https://bobui.vn/cms/wp-content/uploads/2022/08/SAN-PHAM-T9-WEB_11-scaled.jpg", name: "Product3", price: 200, quantity: 2, totalAmount: 400 },
  { id: 4, image: "https://bobui.vn/cms/wp-content/uploads/2022/08/SAN-PHAM-T9-WEB_11-scaled.jpg", name: "Product4", price: 50, quantity: 1, totalAmount: 50 },
  { id: 5, image: "https://bobui.vn/cms/wp-content/uploads/2022/08/SAN-PHAM-T9-WEB_11-scaled.jpg", name: "Product5", price: 300, quantity: 1, totalAmount: 300 }
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
  <View style={{ flex: 1, backgroundColor: 'white', marginTop: 15, borderRadius: 8, padding: 16 }}>
    <Text style={{ paddingLeft: 10, fontWeight: 'bold', marginBottom: 8 }}>#{id}</Text>
    <View style={{ flexDirection: 'row' }}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={{ flex: 1 }}>
        <Text style={{ paddingLeft: 10, paddingTop: 10, fontWeight: 'bold', fontSize: 16 }}>{name}</Text>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <Text style={{ color: 'grey', paddingLeft: 10 }}>{quantity} sản phẩm</Text>
          <Text style={{ textAlign: 'right', color: 'red', paddingRight: 20, flex: 1 }}>{price}</Text>
        </View>
        <Text style={{ textAlign: 'right', paddingRight: 20, color: 'red' }}><Text style={{ color: 'black' }}>Tổng thanh toán:</Text> {totalAmount}</Text>
      </View>
    </View>
  </View>
);


const ListOrder = () => {
  const renderItem = ({ item }: any) => (
    <Item id={item.id} image={item.image} name={item.name} price={item.price} quantity={item.quantity} totalAmount={item.totalAmount} />
  );
  return (
    <View style={{ flex: 1, backgroundColor: '#DDDDDD' }}>
      <Text style={{ backgroundColor: 'white', paddingLeft: 30, paddingBottom: 30, paddingTop: 20, fontSize: 25 }}>Đơn hàng</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 32 }}
        ListEmptyComponent={() => {
          return <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 128 }}>
            <Text>Không có đơn hàng nào.</Text>
          </View>;

        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 8
  }
})
export default ListOrder;
