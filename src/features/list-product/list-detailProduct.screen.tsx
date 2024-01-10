import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ListRenderItem,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import NavBar from '../nav-bar/nav-bar';

const DetailProduct = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  return (
    <View style={styles.detailContainer}>
      <NavBar title="Chi tiết sản phẩm" />
      <ScrollView>
        <View style={styles.imageProduct}>
          <Image
            source={require('../../../pics/abc.png')}
            style={{ width: '100%', height: 300 }}
          />
        </View>
        <View style={styles.productInfor}>
          <View style={{ marginHorizontal: 8 }}>
            <Text style={{ color: 'black', fontSize: 24, marginTop: 12 }}>
              Mens Cotton Jacket
            </Text>
            <Text style={{ color: '#ff3333', fontSize: 20, marginTop: 16 }}>
              55.99$
            </Text>
          </View>

          <View style={{ borderBottomWidth: 1, borderBottomColor: '#e6e6e6' }}>
            <Text
              style={{
                fontSize: 16,
                marginVertical: 16,
                marginHorizontal: 4,
              }}>
              Catogory: men's clothing
            </Text>
          </View>
          <View style={{ marginTop: 12 }}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: 'bold',
                marginHorizontal: 4,
              }}>
              Description:
            </Text>

            <Text
              numberOfLines={showFullText ? undefined : 2}
              style={{ marginHorizontal: 16 }}>
              Great outerwear jackets for Spring/Autumn/Winter, suitable for
              many occasions, such as working, hiking, camping, mountain/rock
              climbing, cycling, traveling or other outdoors. Good gift choice
              for you or your family member. A warm hearted love to Father,
              husband or son in this thanksgiving or Christmas Day.
            </Text>
            <TouchableOpacity
              onPress={toggleText}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderTopWidth: 1,
                borderTopColor: '#e6e6e6',
                marginTop: 12,
              }}>
              <Text
                style={{
                  color: 'red',
                  padding: 8,
                }}>
                {showFullText ? 'Thu gọn ' : 'Xem thêm '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
  },
  imageProduct: {
    flex: 4.5,
  },
  productInfor: {
    flex: 5.5,
    marginTop: 16,
    backgroundColor: 'white',
  },
});
