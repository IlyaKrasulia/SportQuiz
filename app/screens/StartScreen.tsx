import React from 'react';
import {ScreenWrapper} from '../components/ScreenWrapper';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SText} from '../components/SText';

interface IProps {
  navigation: any;
}

export const StartScreen = ({navigation}: IProps) => {
  return (
    <ScreenWrapper>
      <View style={styles.wrapper}>
        <TouchableHighlight
          onPress={() => navigation.navigate('PrivacyPolicy')}
          underlayColor={'transparent'}>
          <LinearGradient
            style={styles.button}
            start={{x: 0.3, y: 0.5}}
            end={{x: 0.3, y: 7}}
            locations={[0, 0.5, 0.9]}
            colors={['#003D6B', '#a1a2a2', '#a1a2a2']}>
            <SText type="h1" textAlign="center" color="white">
              Let`s start
            </SText>
          </LinearGradient>
        </TouchableHighlight>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '90%',
    position: 'absolute',
    bottom: 100,
  },
  button: {
    paddingVertical: 10,
    borderRadius: 10,
    width: '100%',
  },
});
