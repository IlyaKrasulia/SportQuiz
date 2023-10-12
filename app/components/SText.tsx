import React, {ReactNode} from 'react';
import {Text} from 'react-native';

interface IProps {
  children?: ReactNode;
  type?: 'h1' | 'h2' | 'h1+';
  marginTop?: number;
  marginBottom?: number;
  textAlign?: 'center' | 'left' | 'right';
  color?: 'black' | 'white' | 'green';
}

export const SText = ({
  children,
  type,
  marginTop,
  marginBottom,
  textAlign,
  color = 'white',
}: IProps) => (
  <Text
    style={[
      type === 'h1'
        ? {fontSize: 18, fontWeight: '700'}
        : type === 'h2'
        ? {fontSize: 16, fontWeight: '600'}
        : type === 'h1+'
        ? {fontSize: 20, fontWeight: '600'}
        : {fontSize: 14},
      {marginTop: marginTop, marginBottom: marginBottom, textAlign: textAlign},
      color === 'white'
        ? {color: '#fff'}
        : color === 'green'
        ? {color: '#00D200'}
        : {color: '#000'},
    ]}>
    {children}
  </Text>
);
