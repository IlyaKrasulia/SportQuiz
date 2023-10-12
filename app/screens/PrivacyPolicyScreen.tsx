import React from 'react';
import {ScreenWrapper} from '../components/ScreenWrapper';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import {WindowWrapper} from '../components/WindowWrapper';
import LinearGradient from 'react-native-linear-gradient';
import {SText} from '../components/SText';

interface IProps {
  navigation: any;
}

export const PrivacyPolicyScreen = ({navigation}: IProps) => {
  return (
    <ScreenWrapper>
      <WindowWrapper>
        <View>
          <SText color="white" type="h1" textAlign="center" marginBottom={60}>
            Ця політика конфіденційності описує, як ми, "SportIQ Challenge",
            збираємо, використовуємо та захищаємо інформацію, отриману від
            користувачів нашої мобільної програми.
          </SText>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableHighlight
              onPress={() => navigation.navigate('test')}
              underlayColor={'transparent'}
              style={{width: '48%'}}>
              <LinearGradient
                style={styles.button}
                start={{x: 0.3, y: 0.5}}
                end={{x: 0.3, y: 7}}
                locations={[0, 0.5, 0.9]}
                colors={['#003D6B', '#a1a2a2', '#a1a2a2']}>
                <SText color="white" type="h1" textAlign="center">
                  Agree
                </SText>
              </LinearGradient>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => navigation.navigate('main')}
              underlayColor={'#dcdbdb'}
              style={[styles.button, {backgroundColor: '#fff', width: '48%'}]}>
              <SText type="h1" textAlign="center" color="black">
                Refuse
              </SText>
            </TouchableHighlight>
          </View>
        </View>
      </WindowWrapper>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    borderRadius: 10,
  },
});
