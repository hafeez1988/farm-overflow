import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, ImageBackground, Image, View} from 'react-native';
import Loader from './common/Loader';
import {addNewQuestion} from '../firebase/FarmOverflowApi';
import {getLoginUsername, logout} from '../firebase/AuthenticationApi';

const styles = require('../resources/styles');

const AskQuestionsPage = ({route, navigation}) => {
  const [loading, setLoading] = useState(false);

  const farmQuestion = {
    user: getLoginUsername(),
    question: null
  }

  const addCompleteFunc = () => {
    console.log('Question submitted successfully!');
    alert('Your question has been submitted');
  }

  const handleSubmitPress = () => {
    if (!farmQuestion.question) {
      alert('Please provide a valid question');
      return;
    }

    setLoading(true);
    addNewQuestion(farmQuestion, addCompleteFunc);
    setLoading(false);
  }

  return (
    <ImageBackground source={require('../resources/screen_background.jpg')} resizeMode="cover" style={{flex:1, justifyContent:"center"}}>
      <Loader loading={loading} />
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.signedUserTextStyle}> 
            Logged-in as {getLoginUsername()} <Image source={require('../resources/icon_person.png')} style={styles.IconImageStyle} />
          </Text>
          <Text onPress={() => {logout(navigation)}} style={styles.logoutUserTextStyle}>
            Logout
          </Text>
        </View>
        <Text style={{textAlign: 'left', alignSelf: 'stretch', fontSize: 12}}>
          Ask your question
        </Text>
        <ScrollView style={styles.scrollView}>
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Type your question here ...."
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
            onChangeText={val => farmQuestion.question = val}
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
