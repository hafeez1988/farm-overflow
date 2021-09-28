import React from 'react';
import {SafeAreaView, ScrollView, Button, TouchableHighlight} from 'react-native';

const styles = require('../resources/styles');

const MainPage = ({route, navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        	<TouchableHighlight style={styles.buttonStyle}>
            <Button
              title="Ask a question"
              onPress={() =>
                navigation.navigate('AskQuestionsPage')
              }
            />
          </TouchableHighlight>
          <TouchableHighlight style={styles.buttonStyle}>
            <Button
              title="Post an answer"
              onPress={() =>
                navigation.navigate('PostAnswerPage')
              }
            />
          </TouchableHighlight>
          <TouchableHighlight style={styles.buttonStyle}>
            <Button
              title="Explore"
              onPress={() =>
                navigation.navigate('ExploreQuestionsPage')
              }
            />
          </TouchableHighlight>
          <TouchableHighlight style={styles.buttonStyle}>
            <Button
              title="Signup"
              onPress={() =>
                navigation.navigate('UserRegistrationPage')
              }
            />
          </TouchableHighlight>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainPage;
