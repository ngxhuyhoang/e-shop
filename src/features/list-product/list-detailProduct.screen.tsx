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
          style={{ width: '100%', height: 300 }}
        />
        <View
          style={{
            backgroundColor: 'white',
            marginTop: 12,
          }}>
          <Text style={styles.productName}>{product.title}</Text>
          <Text style={styles.productPrice}>{product.price} $</Text>
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
});

export default ProductDetailPage;
