/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { ShoppingCart } from './ShoppingCart';
import { ProductContext } from '../list-product/list-product.screen';

export const Item = props => {
  const productCart = useContext<any>(ProductContext);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        marginTop: 15,
        borderRadius: 8,
        padding: 16,
      }}>
      <View style={{ flexDirection: 'row' }}>
        <Image source={{ uri: props.image }} style={styles.image} />
        <View style={{ flex: 1 }}>
          <Text
            style={{
              paddingLeft: 10,
              paddingTop: 10,
              fontWeight: 'bold',
              fontSize: 16,
            }}
            numberOfLines={2}>
            {props.title}
          </Text>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <Text style={{ color: 'grey', paddingLeft: 10 }}>
              Số lượng:
              <TouchableOpacity
                onPress={() => {
                  if (props.quantity <= 1) {
                    // Goi ham xoa
                    productCart.onRemoveProduct(props);
                  } else {
                    productCart.onDecreaseProduct(props);
                  }
                }}
                style={{ flex: 1, marginLeft: 20 }}>
                <Icon name="leftsquareo" size={15} />
              </TouchableOpacity>
              <View>
                <Text>{props.quantity}</Text>
              </View>
              <TouchableOpacity
                onPress={() => productCart.onIncreaseProduct(props)}>
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
              {props.price}
            </Text>
          </View>
          <Text style={{ textAlign: 'right', paddingRight: 20, color: 'red' }}>
            <Text style={{ color: 'black' }}>Tổng thanh toán:</Text>{' '}
            {props.totalPrice}
          </Text>
        </View>
      </View>
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
