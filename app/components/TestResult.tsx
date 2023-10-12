import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {SText} from './SText';

interface IProps {
  type: boolean;
}

export const TestResult = ({type}: IProps) => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={
          type
            ? require('../assets/images/succes.png')
            : require('../assets/images/error.png')
        }
        style={{width: 20, height: 20}}
      />
      <SText type="h2" color="white">
        {type ? 'Вірно' : 'Не вірно'}
      </SText>
      <Image
        source={
          type
            ? require('../assets/images/succes.png')
            : require('../assets/images/error.png')
        }
        style={{width: 20, height: 20}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
});
