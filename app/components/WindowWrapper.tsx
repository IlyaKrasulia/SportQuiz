import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';

interface IProps {
  children: ReactNode;
}

export const WindowWrapper = ({children}: IProps) => {
  return <View style={styles.wrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0, 68, 119, 0.50)',
    padding: 20,
    borderWidth: 0.6,
    borderColor: '#fff',
    borderRadius: 20,
    width: '85%',
  },
});
