import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { DevSettings, NativeModules, Platform } from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppStack from './navigators/app.stack';
import FlashMessage from 'react-native-flash-message';
import { ProductContext } from './features/list-product/list-product.screen';

const App = () => {
  const [productCart, setProductCart] = useState([]);

  useEffect(() => {
    if (__DEV__) {
      DevSettings.addMenuItem('Bật debug', () => {
        NativeModules.DevSettings.setIsDebuggingRemotely(true);
      });
    }
  }, []);

  //Hàm xử lý tác vụ thêm sản phẩm
  const onHandleItem = product => {
    // product = Object.assign(
    //   { quantity: 1, totalPrice: product.price },
    //   product,
    // );

    const existedProduct = productCart.find(x => x.id === product.id);

    console.log(existedProduct);

    if (existedProduct) {
      // Da co
      console.log('Da co');
      setProductCart(prevState => {
        const newArr = [...prevState];
        const index = newArr.findIndex(x => x.id === product.id);
        newArr[index].quantity += 1;
        return newArr;
      });
    } else {
      // Chua co
      setProductCart([...productCart, product]);
    }

    // const currentProduct = {
    //   ...product,
    //   quantity: Number(existedProduct?.quantity) + 1 || 1,
    //   totalPrice: product.price,
    // };

    // const newProductIds = productCart.map(item => item.id);

    // console.log(newProductIds);

    // if (newProductIds.includes(currentProduct.id)) {
    //   const newProduct = {
    //     ...currentProduct,
    //     quantity: Number(existedProduct?.quantity) + 1,
    //   };
    //   console.log(newProduct.quantity);
    // } else {
    //   setProductCart([...productCart, product]);
    // }
  };

  // Hàm tăng số lượng sản phẩm trong giỏ hàng
  const onIncreaseProduct = (props: { id: any }) => {
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
  const onDecreaseProduct = (product: { id: string }) => {
    setProductCart(prevState => {
      const newArr = [...prevState];
      const index = newArr.findIndex(x => x.id === product.id);
      if (Number(newArr[index].quantity) > 1) {
        newArr[index].quantity -= 1;
      }
      return newArr;
    });
  };
  //Xóa sản phẩm
  const onRemoveProduct = product => {
    setProductCart(prevState => {
      const newArr = [...prevState];
      return newArr.filter(item => item.id !== product.id);
    });
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
            onHandleItem,
            onDecreaseProduct,
            onIncreaseProduct,
            onRemoveProduct,
          }}>
          <AppStack />
        </ProductContext.Provider>
      </NavigationContainer>
      <FlashMessage position="top" floating />
    </SafeAreaProvider>
  );
};

export default App;
