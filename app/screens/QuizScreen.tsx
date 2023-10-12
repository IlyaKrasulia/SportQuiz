import React, {useEffect, useState} from 'react';
import {ScreenWrapper} from '../components/ScreenWrapper';
import {WindowWrapper} from '../components/WindowWrapper';
import {SText} from '../components/SText';
import {Image, StyleSheet, TouchableHighlight, View} from 'react-native';
import {questions} from '../data';
import {TestResult} from '../components/TestResult';

interface IProps {
  navigation: any;
  route: any;
}

export const QuizScreen = ({navigation}: IProps) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [completedQuestions, setCompitedQuestions] = useState([]);
  const [totalPoit, setTotalPoint] = useState(0);

  const handleSubmit = (item: string) => {
    let isTrue = item === questions[activeQuestion].trueVariant ? true : false;
    let obj = {
      id: questions[activeQuestion].id,
      selectedVariant: item,
      isTrueAnswer: isTrue,
    };
    setCompitedQuestions([...completedQuestions, obj]);
    if (isTrue) {
      setTotalPoint(totalPoit + 1);
    }
  };

  console.log(totalPoit);

  const nextQuestion = () => {
    if (activeQuestion < 9) {
      setActiveQuestion(activeQuestion + 1);
    }
    if (completedQuestions.length === 10) {
      navigation.navigate('result', {
        poinst: totalPoit,
      });
      setActiveQuestion(0);
      setCompitedQuestions([]);
      setTotalPoint(0);
    }
  };

  const prevQuestion = () => {
    if (activeQuestion > 0) {
      setActiveQuestion(activeQuestion - 1);
    }
  };

  const selectedItem = completedQuestions.find(
    it => it.id === questions[activeQuestion].id,
  );
  return (
    <ScreenWrapper>
      <WindowWrapper>
        <View style={styles.wrapper}>
          <SText type="h1" color="white" textAlign="center">
            {questions[activeQuestion]?.title}
          </SText>
          {selectedItem?.isTrueAnswer !== undefined ? (
            <View style={{alignItems: 'center'}}>
              <TestResult type={selectedItem?.isTrueAnswer ? true : false} />
            </View>
          ) : (
            <SText
              type="h2"
              color="white"
              textAlign="center"
              marginTop={20}
              marginBottom={10}>
              Виберіть правільну відповідь
            </SText>
          )}
          <View style={{gap: 10}}>
            {questions[activeQuestion].variants.map((item, index) => (
              <TouchableHighlight
                key={index}
                disabled={selectedItem && true}
                style={[
                  styles.variantItem,
                  item === selectedItem?.selectedVariant
                    ? selectedItem?.isTrueAnswer
                      ? {backgroundColor: '#009E00'}
                      : {backgroundColor: '#CA1207'}
                    : {},
                ]}
                onPress={() => handleSubmit(item)}
                underlayColor={'rgba(0, 61, 107, 0.603)'}>
                <View style={{flexDirection: 'row', gap: 7}}>
                  <SText type="h2" color="white">
                    {index + 1}.
                  </SText>
                  <SText type="h2" color="white">
                    {item}
                  </SText>
                </View>
              </TouchableHighlight>
            ))}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <TouchableHighlight
              style={styles.button}
              underlayColor={'rgba(255, 255, 255, 0.365)'}
              onPress={prevQuestion}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <Image
                  source={require('../assets/images/prev-arrow.png')}
                  style={{height: 25, width: 25}}
                />
                <SText color="white" type="h2">
                  Назад
                </SText>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.button}
              underlayColor={'rgba(255, 255, 255, 0.365)'}
              onPress={nextQuestion}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <SText color="white" type="h2">
                  Далі
                </SText>
                <Image
                  source={require('../assets/images/next-arrow.png')}
                  style={{height: 25, width: 25}}
                />
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </WindowWrapper>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  variantItem: {
    backgroundColor: 'rgba(0, 61, 107, 0.80)',
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.50)',
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.50)',
    padding: 10,
    borderRadius: 10,
  },
});
