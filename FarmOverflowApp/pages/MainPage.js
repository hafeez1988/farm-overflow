import React from 'react';
import {SafeAreaView, ScrollView, Button, TouchableHighlight} from 'react-native';

const styles = require('../styles');

const MainPage = ({route, navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        	<TouchableHighlight style={styles.button}>
            <Button
              title="Ask a question"
              onPress={() =>
                navigation.navigate('AskQuestionsPage')
              }
            />
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Button
              title="Post an answer"
              onPress={() =>
                navigation.navigate('PostAnswerPage')
              }
            />
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Button
              title="Explore"
              onPress={() =>
                navigation.navigate('ExploreQuestionsPage')
              }
            />
          </TouchableHighlight>          
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainPage;
