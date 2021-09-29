import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, ImageBackground, View} from 'react-native';
import Loader from './common/Loader';
import {addNewQuestion} from '../firebase/FarmOverflowApi';

const styles = require('../resources/styles');

const AskQuestionsPage = ({route, navigation}) => {
  const [loading, setLoading] = useState(false);

  const farmQuestion = {
    user: 'Tester',
    question: null
  }
  
  const addComplete = () => {
    console.log('This is inside the caller function');
  }

  const handleSubmitPress = () => {
    if (!farmQuestion.question) {
      alert('Please provide a valid question');
      return;
    }

    setLoading(true);
    addNewQuestion(farmQuestion, addComplete);
    setLoading(false);
  }

  return (
    <ImageBackground source={require('../resources/screen_background.jpg')} resizeMode="cover" style={{flex:1, justifyContent:"center"}}>
      <Loader loading={loading} />
      <SafeAreaView style={styles.container}>
        <Text style={{textAlign: 'left', alignSelf: 'stretch', fontSize: 12}}>
          Ask your question here
        </Text>
        <ScrollView style={styles.scrollView}>
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Type something ...."
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
            onChangeText={text => farmQuestion.question = text}
          />
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitPress}>
            <Text style={styles.buttonTextStyle}>SUBMIT</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
     </ImageBackground>
  );
};

export default AskQuestionsPage;
