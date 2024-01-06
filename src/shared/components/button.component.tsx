import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import tw from 'twrnc';

interface IButtonProps extends TouchableOpacityProps {
  label: string;
  color: string;
  type: 'solid' | 'outline';
  style?: ViewStyle;
}

const Button = ({ label, color, type, style, ...props }: IButtonProps) => {
  const solidStyle = tw.style({
    backgroundColor: color,
  });

  const outlineStyle = tw.style({
    borderWidth: 1,
    borderColor: color,
  });

  const buttonType: any = {
    solid: { button: solidStyle, text: { color: '#fff' } },
    outline: outlineStyle,
  };

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={tw.style(
        'py-14px px-16px rounded-8px justify-center items-center border',
        { borderWidth: 1.5 },
        buttonType[type].button,
        style,
      )}>
      <Text style={tw.style('text-16px', buttonType[type].text)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
