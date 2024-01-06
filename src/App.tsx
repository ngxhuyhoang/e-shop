import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { DevSettings, NativeModules, Platform } from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppStack from './navigators/app.stack';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  useEffect(() => {
    if (__DEV__) {
      DevSettings.addMenuItem('Bật debug', () => {
        NativeModules.DevSettings.setIsDebuggingRemotely(true);
      });
    }
  }, []);

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
        <AppStack />
      </NavigationContainer>
      <FlashMessage position="top" floating />
    </SafeAreaProvider>
  );
};

export default App;
