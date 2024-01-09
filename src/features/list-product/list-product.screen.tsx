import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const ProductPage = () => {
  const [products] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 'giá',
      image: require('../../../pics/product1.png'),
    },
    {
      id: 2,
      name: 'Product 2',
      price: 'giá',
      image: require('../../../pics/product2.jpg'),
    },
    {
      id: 3,
      name: 'Product 3',
      price: 'giá',
      image: require('../../../pics/product3.jpg'),
    },
    {
      id: 4,
      name: 'Product 4',
      price: 'giá',
      image: require('../../../pics/product4.jpg'),
    },
    {
      id: 5,
      name: 'Product 5',
      price: 'giá',
      image: require('../../../pics/product5.jpg'),
    },
    {
      id: 6,
      name: 'Product 6',
      price: 'giá',
      image: require('../../../pics/product6.jpg'),
    },
    {
      id: 7,
      name: 'Product 7',
      price: 'giá',
      image: require('../../../pics/product7.jpg'),
    },
    {
      id: 8,
      name: 'Product 8',
      price: 'giá',
      image: require('../../../pics/product8.jpg'),
    },
  ]);

  // const screenWidth = Dimensions.get('window').width;

  const renderItem = ({ item }) => {
    return (
      <View style={styles.productContainer}>
        <Image source={item.image} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}$</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        columnWrapperStyle={styles.columnWrapper}
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
    width: '50%',
    marginBottom: 8,
    paddingHorizontal: 4,
    backgroundColor: 'lightgray',
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
    color: 'gray',
  },
});

export default ProductPage;
