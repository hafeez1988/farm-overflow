import React from 'react';
import {SafeAreaView, ScrollView, Text, Button} from 'react-native';

const styles = require('../styles');

const PostAnswerPage = ({route, navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.textStyle}>
          Click on a question to post your answers
        </Text>
        <Button
          title="Submit"
          onPress={() =>
            navigation.navigate('HomePage')
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostAnswerPage;
