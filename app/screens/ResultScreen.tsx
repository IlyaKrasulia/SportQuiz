import React from 'react';
import {ScreenWrapper} from '../components/ScreenWrapper';
import {WindowWrapper} from '../components/WindowWrapper';
import {SText} from '../components/SText';
import {
  Alert,
  Image,
  Share,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface IProp {
  navigation: any;
  route: any;
}

export const ResultScreen = ({navigation, route}: IProp) => {
  const {poinst} = route.params;

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Я набрав ${poinst} балів із 10 в тесті "SportIQ Challenge"`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
          console.log('OK');
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <ScreenWrapper>
      <WindowWrapper>
        <SText type="h1+" textAlign="center" marginBottom={20}>
          Вітаємо
        </SText>
        <SText type="h1" textAlign="center" marginBottom={20}>
          Загальна правильна відповідь
        </SText>
        <View style={{alignItems: 'center'}}>
          <View style={styles.trueAnswers}>
            <SText color="green" type="h1" textAlign="center">
              {poinst} із 10 питань
            </SText>
          </View>
          <Image
            source={require('../assets/images/result.png')}
            style={{height: 170, width: 200, marginVertical: 30}}
          />
          <View style={{alignItems: 'center', width: '85%'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: 15,
              }}>
              <TouchableHighlight
                onPress={onShare}
                style={styles.buttonGray}
                underlayColor={'rgba(255, 255, 255, 0.367)'}>
                <SText type="h1">Share</SText>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => navigation.navigate('main')}
                style={styles.buttonGray}
                underlayColor={'rgba(255, 255, 255, 0.367)'}>
                <SText type="h1">Menu</SText>
              </TouchableHighlight>
            </View>
            <TouchableHighlight
              onPress={() => {
                navigation.navigate('test', {reset: Math.random()});
              }}
              underlayColor={'transparent'}
              style={{width: '100%'}}>
              <LinearGradient
                style={styles.button}
                start={{x: 0.3, y: 0.5}}
                end={{x: 0.3, y: 7}}
                locations={[0, 0.5, 0.9]}
                colors={['#003D6B', '#a1a2a2', '#a1a2a2']}>
                <SText type="h1" textAlign="center" color="white">
                  Repeat
                </SText>
              </LinearGradient>
            </TouchableHighlight>
          </View>
        </View>
      </WindowWrapper>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  trueAnswers: {
    backgroundColor: 'rgba(0, 61, 107, 0.80)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.50)',
    width: 180,
  },
  buttonGray: {
    backgroundColor: 'rgba(255, 255, 255, 0.50)',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  button: {
    paddingVertical: 10,
    borderRadius: 10,
    width: '100%',
  },
});
