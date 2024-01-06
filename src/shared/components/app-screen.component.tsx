import React, { PropsWithChildren } from 'react';
import { View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import tw from 'twrnc';
import Navbar from './navbar.component';

interface IAppScreenProps {
  showNavbar?: boolean;
  hasSafeArea?: boolean;
  style?: ViewStyle;
  title?: string;
  contentContainerStyle?: ViewStyle;
}

const AppScreen = ({
  showNavbar = true,
  children,
  style,
  hasSafeArea = true,
  title,
  contentContainerStyle,
}: PropsWithChildren<IAppScreenProps>) => {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View
      style={tw.style(
        'flex-1',
        {
          paddingTop: hasSafeArea ? safeAreaInsets.top : undefined,
          paddingBottom: hasSafeArea ? safeAreaInsets.bottom + 16 : undefined,
          backgroundColor: '#fff',
        },
        style,
      )}>
      {showNavbar && <Navbar title={title} />}
      <View style={tw.style(contentContainerStyle)}>{children}</View>
    </View>
  );
};

export default AppScreen;
