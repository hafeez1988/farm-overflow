import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import Loader from './common/Loader';
import {addNewQuestion} from '../firebase/FarmOverflowApi';

const styles = require('../resources/styles');

const farmQuestion = {
  user: 'somapala',
  question: 'this is a lsakdjfsdklfj kslfjskl jsklfjskl fjsklfjkljf klsdjf klsjfklfj klsjf klsjf'
}

const addComplete = () => {
  console.log('This is inside the caller function');
}

const AskQuestionsPage = ({route, navigation}) => {
  const [loading, setLoading] = useState(false);

  const handleSubmitPress = () => {
    setLoading(true);
    addNewQuestion(farmQuestion, addComplete);
    setLoading(false);
  }

  return (
    <ImageBackground source={require('../resources/screen_background.jpg')} resizeMode="cover" style={{flex:1, justifyContent:"center"}}>
      <Loader loading={loading} />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Ask your question here."
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
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
