import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Item, data } from './shopping-cart.screen';
import NavBar from '../nav-bar/nav-bar';
import Icon from 'react-native-vector-icons/AntDesign';
import { ProductContext } from '../list-product/list-product.screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const userInfo = {
  name: 'abc',
  phoneNumber: '123',
  address: 'VN',
  usernote: 'lorem ipsum',
};

export const ShoppingCart = () => {
  const navigation = useNavigation<any>();
  const productCart = useContext<any>(ProductContext);

  const [modalVisible, setModalVisible] = useState(false);

  interface itemProps {
    category: string;
    createdAt: string;
    deletedDate: string;
    description: string;
    id: string;
    image: string;
    price: Number;
    title: string;
    updatedAt: string;
    quantity: Number;
  }
  const renderItem = ({ item }: any) => (
    <Item
      category={item.category}
      createdAt={item.createdAt}
      deletedDate={item.deletedDate}
      description={item.description}
      id={item.id}
      image={item.image}
      price={Number(item.price)}
      title={item.title}
      totalPrice={Number(item.price) * Number(item.quantity)}
      updatedAt={item.updatedAt}
      quantity={Number(item.quantity)}
    />
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#DDDDDD' }}>
      {/* <Button onPress={onPress} title="List Order" /> */}
      <NavBar title="Giỏ hàng" />

      <FlatList
        data={productCart.productCart}
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
      <Button
        title="Thanh toán"
        onPress={() => setModalVisible(!modalVisible)}
      />

      <Payment
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

export const Payment = ({ isVisible, onClose }) => {
  const PostOrderAPI = async () => {
    const order = {
      fullName: 'aBCD',
      address: 'HCM',
      phone: '093157015',
      email: 'tb@gmail.com',
      productId: '1',
      productQuantity: 3,
      productImage:
        'https://bobui.vn/cms/wp-content/uploads/2022/08/SAN-PHAM-T9-WEB_11-scaled.jpg',
      totalPrice: 30,
    };
    const apiURL = 'https://eshop-api.ngxhuyhoang.com/order/create';
    const accessToken = await AsyncStorage.getItem('userToken');
    try {
      let result = await axios.post(
        apiURL,
        {
          ...order,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      let ord = await result; // Resolve the promise and get the response from the API
      console.log(ord); // Log the response to the console
    } catch (error) {
      console.error(error); // Handle errors if any
    }
  };

  // const totalPrice = data.reduce((accumulator, currentValue) => {
  //   return accumulator + currentValue.totalAmount;
  // }, 0);
  const totalPrice = 5;

  const navigation = useNavigation();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        onClose();
      }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: '#fff',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,

            borderTopWidth: 10,
            borderBlockColor: '#00000090',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            height: '60%',
          }}>
          <Pressable onPress={() => onClose()}>
            <Icon
              name="down"
              size={30}
              style={{ alignItems: 'center', marginLeft: '45%' }}
            />
          </Pressable>

          <View
            style={{
              flexDirection: 'row',
              marginBottom: 15,
              paddingLeft: 16,
            }}>
            <Text style={{ fontSize: 20 }}>Thông tin nhận hàng</Text>
            <TouchableOpacity
              style={{ marginLeft: '40%', marginTop: 4 }}
              onPress={() => {
                navigation.navigate('Profile');
                console.log('Go to profile page');
              }}>
              <Text style={{ color: 'red', fontSize: 16 }}>Sửa</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingLeft: 16,
              paddingBottom: 10,
              borderBottomWidth: 1,
            }}>
            <Text>
              Tên người nhận:{'  '}
              <Text
                style={{
                  fontWeight: 'bold',
                  paddingLeft: 200,
                  marginLeft: 200,
                }}>
                {userInfo.name}
              </Text>
            </Text>
            <Text>
              Số điện thoại:{'  '}
              <Text
                style={{
                  fontWeight: 'bold',
                  paddingLeft: 200,
                  marginLeft: 200,
                }}>
                {userInfo.phoneNumber}
              </Text>
            </Text>
            <Text>
              Địa chỉ:{'  '}
              <Text
                style={{
                  fontWeight: 'bold',
                  paddingLeft: 200,
                  marginLeft: 200,
                }}>
                {userInfo.address}
              </Text>
            </Text>
            <Text>
              Ghi chú:{'  '}
              <Text
                style={{
                  fontWeight: 'bold',
                  paddingLeft: 200,
                  marginLeft: 200,
                }}>
                {userInfo.usernote}
              </Text>
            </Text>
          </View>
          <View
            style={{
              paddingTop: 5,
              paddingBottom: 5,
              paddingLeft: 16,
              marginTop: 16,
              backgroundColor: '#7FFFD430',
              borderWidth: 1,
              borderColor: '#7FFFD4',
            }}>
            <Text
              style={{
                fontSize: 20,
                width: 380,
                paddingBottom: 10,
                borderBottomWidth: 0.2,
                borderColor: 'grey',
              }}>
              Phương thức vận chuyển
            </Text>
            <View>
              <Text style={{ fontWeight: 'bold', paddingTop: 10 }}>
                Vận chuyển COD
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingTop: 5,
              paddingBottom: 5,
              paddingLeft: 16,
              marginTop: 16,
              backgroundColor: '#7FFFD430',
              borderWidth: 1,
              borderColor: '#7FFFD4',
            }}>
            <Text
              style={{
                fontSize: 20,
                width: 380,
                paddingBottom: 10,
                borderBottomWidth: 0.7,
                borderColor: 'grey',
              }}>
              Phương thức thanh toán
            </Text>
            <View>
              <Text style={{ fontWeight: 'bold', paddingTop: 10 }}>
                Thanh toán khi nhận hàng
              </Text>
            </View>
          </View>
          <View style={{ paddingLeft: 16, paddingTop: 15 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 15 }}>Tổng tiền sản phẩm:</Text>
              <Text style={{ marginLeft: '50%', fontSize: 15 }}>
                {totalPrice}
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 15 }}>Mã giảm giá:</Text>
              <Text style={{ marginLeft: '61.5%', fontSize: 15 }}>-{'0'}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20, paddingTop: 8 }}>
                Tổng thanh toán:
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  paddingTop: 8,
                  marginLeft: '46%',
                  color: 'red',
                }}>
                {totalPrice}
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <TouchableOpacity
              onPress={() => {
                PostOrderAPI();
                // Alert.alert('', 'Đặt hàng thành công', [
                //   {
                //     text: 'OK',
                //     onPress: () => navigation.navigate('ListOrder'),
                //   },
                // ]);
              }}>
              <Text
                style={{
                  backgroundColor: 'red',
                  height: '100%',
                  textAlign: 'center',
                  paddingVertical: 6,
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Đặt hàng
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
