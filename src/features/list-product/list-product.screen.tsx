import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ListRenderItem,
  Alert,
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Cart from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ShoppingCart from 'react-native-vector-icons/Feather';
//Tạo Context
export const ProductContext = createContext([]);

// Khởi tạo biến productPage
const ProductPage = () => {
  const navigation = useNavigation<any>();

  const cartContext = useContext(ProductContext);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    handleGetListProduct();
  }, []);

  const handleGetListProduct = async () => {
    try {
      const { data: responseData } = await axios.get(
        'https://eshop-api.ngxhuyhoang.com/product/list',
      );
      setProducts(responseData.data.map(x => ({ ...x, quantity: 1 })));
    } catch (e) {
      console.log(e);
    }
  };

  const handleProductPress = (product: any) => {
    navigation.navigate('DetailProduct', { product });
  };

  // const screenWidth = Dimensions.get('window').width;

  const renderItem: ListRenderItem<any> = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.productContainer}
        onPress={() => handleProductPress(item)}>
        <Image
          source={{ uri: item.image }}
          style={{ width: '100%', height: 200 }}
        />
        <View style={{ justifyContent: 'space-between', flex: 1 }}>
          <Text style={styles.productName} numberOfLines={2}>
            {item.title}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={{
                  color: 'red',
                }}>
                {item.price} $
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                cartContext.onHandleItem(item);
                Alert.alert('Thêm sản phẩm thành công');
              }}>
              <ShoppingCart
                name="shopping-cart"
                size={20}
                style={{ marginHorizontal: 8 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{ flex: 3 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
            Danh sách sản phẩm
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'Gray',
            flex: 1,
            marginBottom: 16,
          }}>
          <View
            style={{
              backgroundColor: 'gray',
              borderRadius: 16,
              justifyContent: 'center',
              alignItems: 'center',
              width: 32,
              height: 32,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ShoppingCart');
              }}>
              <Cart name="shopping-cart" size={20} color={'white'} />
            </TouchableOpacity>
            <View
              style={[
                styles.textContainer,
                { opacity: cartContext.CartIcon() },
              ]}>
              <Text style={styles.text}>{cartContext.CartIcon()}</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'gray',
              borderRadius: 16,
              justifyContent: 'center',
              alignItems: 'center',
              width: 32,
              height: 32,
            }}>
            <TouchableOpacity>
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={item => renderItem(item)}
        keyExtractor={item => item.id.toString()}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  productContainer: {
    width: '48%',
    paddingHorizontal: 4,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingBottom: 16,
  },
  // productImage: {
  //   width: '100%',
  //   height: 150,
  //   resizeMode: 'cover',
  // },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },

  // buyItemIcon: {
  //   marginHorizontal: 8,
  //   width: 24,
  //   height: 24,
  // },
  textContainer: {
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    position: 'absolute',
    top: -8,
    right: -4,
    zIndex: 1,
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ProductPage;
