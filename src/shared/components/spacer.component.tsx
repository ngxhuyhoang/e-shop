import React from 'react';
import { View, ViewStyle } from 'react-native';

interface ISpacerProps {
  width?: number;
  height?: number;
  style?: ViewStyle;
}

const Spacer = ({ width = 0, height = 16, style }: ISpacerProps) => {
  return <View style={[{ width, height }, style]} />;
};

export default Spacer;
