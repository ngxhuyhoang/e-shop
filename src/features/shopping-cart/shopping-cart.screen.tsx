/* eslint-disable react-native/no-inline-styles */
import React, { useState, useContext } from 'react';
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
      <Text style={{ paddingLeft: 10, fontWeight: 'bold', marginBottom: 8 }}>
        #{props.id}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <Image source={{ uri: props.image }} style={styles.image} />
        <View style={{ flex: 1 }}>
          <Text
            style={{
              paddingLeft: 10,
              paddingTop: 10,
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            {props.name}
          </Text>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <Text style={{ color: 'grey', paddingLeft: 10 }}>
              Số lượng:
              <TouchableOpacity
                onPress={() => productCart.onDecrease()}
                style={{ flex: 1, marginLeft: 20 }}>
                <Icon name="leftsquareo" size={15} />
              </TouchableOpacity>
              <View>
                <Text>{props.quantity}</Text>
              </View>
              <TouchableOpacity onPress={() => productCart.onIncrease()}>
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
            {props.totalAmount}
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
