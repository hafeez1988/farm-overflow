import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';

const styles = require('../styles');

const ExploreQuestionsPage = ({route, navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.textStyle}>
          List all the questions here with a search bar.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExploreQuestionsPage;
