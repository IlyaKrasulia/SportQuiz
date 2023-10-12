import React, {ReactNode} from 'react';
import {Image, ImageBackground, SafeAreaView, StyleSheet} from 'react-native';

interface IProps {
  children: ReactNode;
}

export const ScreenWrapper = ({children}: IProps) => {
  return (
    <ImageBackground
      source={require('../assets/images/bg.jpg')}
      style={styles.wrapper}>
      <SafeAreaView
        style={{width: '100%', alignItems: 'center', height: '100%'}}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        {children}
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    alignItems: 'center',
  },
  logo: {
    height: 150,
    width: 200,
    marginVertical: 40,
  },
});
