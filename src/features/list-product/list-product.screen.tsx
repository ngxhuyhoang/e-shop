/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ListRenderItem,
} from 'react-native';
import axios from 'axios';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    handleGetListProduct();
  }, []);

  const handleGetListProduct = async () => {
    try {
      const { data: responseData } = await axios.get(
        'https://eshop-api.ngxhuyhoang.com/product/list',
      );
      setProducts(responseData.data);
    } catch (e) {
      console.log(e);
    }
  };

  // const screenWidth = Dimensions.get('window').width;

  const renderItem: ListRenderItem<any> = ({ item }) => {
    return (
      <TouchableOpacity style={styles.productContainer}>
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
                đ {item.price}
              </Text>
            </View>
            <TouchableOpacity onPress={() => {}}>
              <Image
                source={require('../../../pics/cart.png')}
                style={styles.buyItemIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
        Danh sách sản phẩm
      </Text>
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
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },

  productPrice: {
    fontSize: 14,
    color: 'red',
    alignSelf: 'flex-start',
  },
  productInfor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  buyItem: {
    marginHorizontal: 8,
    tintColor: 'red',
  },
  buyItemIcon: {
    marginHorizontal: 8,
    width: 24,
    height: 24,
  },
});

export default ProductPage;
