import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AppTab from './app.tab';
import ShoppingCart from '../features/shopping-cart/shopping-cart.screen';
import DetailProduct from '../features/list-product/list-detailProduct.screen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AppTab" component={AppTab} />
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
      <Stack.Screen name="DetailProduct" component={DetailProduct} />
    </Stack.Navigator>
  );
};
export default MainStack;
