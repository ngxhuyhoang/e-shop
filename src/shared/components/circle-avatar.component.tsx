import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import FastImage from 'react-native-fast-image';
import tw from 'twrnc';
import useImagePicker from '../hooks/image-picker.hook';

interface ICircleAvatarProps {
  uri: string;
  size: number;
  style?: ViewStyle;
}

const CircleAvatar = ({ uri, size, style }: ICircleAvatarProps) => {
  const { handlePickMedia, pickedMediaResponse } = useImagePicker();

  return (
    <TouchableOpacity
      onPress={() => handlePickMedia('photo')}
      style={tw.style(
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
        style,
      )}>
      <FastImage
        source={{ uri }}
        style={tw.style({
          width: size,
          height: size,
          borderRadius: size / 2,
        })}
      />
    </TouchableOpacity>
  );
};

export default CircleAvatar;
