import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import NavBar from '../nav-bar/nav-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProductDetailPage = ({ route }) => {
  const { product } = route.params;
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <View style={styles.container}>
      <NavBar title="Chi tiết sản phẩm" />
      <ScrollView style={{ flex: 1 }}>
        <Image
          source={{ uri: product.image }}
          style={{
            width: '100%',
            height: 300,
            resizeMode: 'contain',
            backgroundColor: 'white',
          }}
        />
        <View
          style={{
            backgroundColor: 'white',
            marginTop: 12,
          }}>
          <Text style={styles.productName} numberOfLines={2}>
            {product.title}
          </Text>
          <Text style={styles.productPrice}>{product.price} $</Text>
          <View style={{ height: 40, flexDirection: 'row' }}>
            <Image
              source={require('../../../pics/rating2.png')}
              style={{
                width: 60,
                height: 42,
                tintColor: 'orange',
                marginHorizontal: 8,
              }}
            />
            <Text style={{ alignItems: 'center', marginTop: 12 }}>5</Text>
          </View>
        </View>
        <View style={{ backgroundColor: 'white', marginTop: 12 }}>
          <View
            style={{ borderBottomWidth: 0.25, borderBottomColor: '#cccccc' }}>
            <Text style={{ fontSize: 16, padding: 4 }}>
              Catogory: {product.category}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 18, marginHorizontal: 4 }}>
              Description:
            </Text>
            <Text
              style={[
                styles.productDescription,
                showFullDescription ? { flex: 1 } : { flex: 0 },
              ]}
              numberOfLines={showFullDescription ? undefined : 2}>
              {product.description}
            </Text>

            <TouchableOpacity
              onPress={toggleDescription}
              style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text
                style={{
                  color: 'red',
                }}
                numberOfLines={showFullDescription ? undefined : 2}>
                {showFullDescription ? 'Thu gọn' : 'Xem thêm'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00b3b3',
            height: 50,
          }}>
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={24}
            color="white"
          />
        </TouchableOpacity>
        <View>
          <Image
            source={require('../../../pics/line.png')}
            style={{ height: 50, width: 1 }}
            tintColor={'#808080'}
          />
        </View>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00b3b3',
            height: 50,
          }}>
          <Image
            source={require('../../../pics/add-to-cart.png')}
            style={{ width: 24, height: 24 }}
            tintColor="white"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 2,
            height: 50,
            backgroundColor: '#ff5c33',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Mua với voucher</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cccccc',
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 4,
    marginLeft: 8,
  },
  productPrice: {
    fontSize: 16,
    color: 'red',
    alignSelf: 'flex-start',
    marginLeft: 8,
  },
  productDescription: {
    fontSize: 14,
    marginVertical: 4,
    marginHorizontal: 4,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
});

export default ProductDetailPage;
