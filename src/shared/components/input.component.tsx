import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import tw from 'twrnc';

interface IBasicInputProps extends TextInputProps {}

const BasicInput = ({ ...props }: IBasicInputProps) => {
  return (
    <TextInput
      value={props.value}
      onChangeText={props.onChangeText}
      placeholderTextColor="#999999"
      style={[
        tw.style('rounded-8px py-12px px-16px bg-[#f7f8f9]', {
          height: props.multiline ? 200 : undefined,
        }),
      ]}
      {...props}
    />
  );
};

export default BasicInput;
