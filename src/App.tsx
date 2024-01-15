import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { DevSettings, NativeModules, Platform } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import KeyboardManager from 'react-native-keyboard-manager';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ProductContext } from './features/list-product/list-product.screen';
import AppStack from './navigators/app.stack';

const App = () => {
  const [productCart, setProductCart] = useState([]);

  useEffect(() => {
    if (__DEV__) {
      DevSettings.addMenuItem('Bật debug', () => {
        NativeModules.DevSettings.setIsDebuggingRemotely(true);
      });
    }
  }, []);

  // Hàm thêm sản phẩm vào giỏ hàng
  const onAddToCart = product => {
    // const productQuantity = { quantity: 1 };
    product = Object.assign(
      { quantity: '1', totalPrice: product.price },
      product,
    );
    console.log(product);
    setProductCart([...productCart, product]);
  };

  // Hàm tăng số lượng sản phẩm trong giỏ hàng
  const onIncreaseProduct = props => {
    setProductCart([...productCart]);
    const product = productCart.map(item => {
      if (item.id === props.id) {
        return {
          ...item,
          quantity: String(Number(item.quantity) + 1),
        };
      }
      return item;
    });
    setProductCart([...product]);
  };
  // Hàm giảm số lượng sản phẩm trong giỏ hàng
  const onDecreaseProduct = props => {
    setProductCart([...productCart]);
    const product = productCart
      .map(item => {
        if (item.id === props.id) {
          if (item.quantity > 0) {
            return {
              ...item,
              quantity: String(Number(item.quantity) - 1),
            };
          } else {
            return null;
          }
        }
        return item;
      })
      .filter(item => item !== null);
    setProductCart([...product]);
  };

  if (Platform.OS === 'ios') {
    KeyboardManager.setEnable(true);
    // KeyboardManager.setEnableDebugging(false);
    // KeyboardManager.setKeyboardDistanceFromTextField(10);
    // KeyboardManager.setLayoutIfNeededOnUpdate(true);
    // KeyboardManager.setEnableAutoToolbar(true);
    // KeyboardManager.setToolbarDoneBarButtonItemText('Done');
    // KeyboardManager.setToolbarManageBehaviourBy('subviews'); // "subviews" | "tag" | "position"
    // KeyboardManager.setToolbarPreviousNextButtonEnable(false);
    // KeyboardManager.setToolbarTintColor('#0000FF'); // Only #000000 format is supported
    // KeyboardManager.setToolbarBarTintColor('#FFFFFF'); // Only #000000 format is supported
    // KeyboardManager.setShouldShowToolbarPlaceholder(true);
    // KeyboardManager.setOverrideKeyboardAppearance(false);
    // KeyboardManager.setKeyboardAppearance('default'); // "default" | "light" | "dark"
    // KeyboardManager.setShouldResignOnTouchOutside(true);
    // KeyboardManager.setShouldPlayInputClicks(true);
    // KeyboardManager.resignFirstResponder();
    // KeyboardManager.isKeyboardShowing().then(isShowing => {});
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ProductContext.Provider
          value={{
            productCart,
            onAddToCart,
            onDecreaseProduct,
            onIncreaseProduct,
          }}>
          <AppStack />
        </ProductContext.Provider>
      </NavigationContainer>
      <FlashMessage position="top" floating />
    </SafeAreaProvider>
  );
};

export default App;
