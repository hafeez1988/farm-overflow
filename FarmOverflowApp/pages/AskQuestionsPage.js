import React from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, Button} from 'react-native';

const styles = require('../resources/styles');

const AskQuestionsPage = ({route, navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.textStyle}>
          Ask your question here
        </Text>
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Type something"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
        />
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

export default AskQuestionsPage;
