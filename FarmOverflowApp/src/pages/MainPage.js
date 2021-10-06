import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, Text, Image} from 'react-native';
import {getLoginUsername} from '../firebase/AuthenticationApi';

const styles = require('../resources/styles');

const MainPage = ({route, navigation}) => {
  return (
    <ImageBackground source={require('../resources/screen_background.jpg')} resizeMode="cover" style={{flex:1, justifyContent:"center"}}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.signedUserTextStyle}> 
          Welcome {getLoginUsername()} <Image source={require('../resources/icon_person.png')} style={styles.IconImageStyle} />
        </Text>
        <ScrollView style={styles.scrollView}>
          <TouchableOpacity
            style={styles.mainmenuButtonStyle}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('AskQuestionsPage')}>
            <Image source={require('../resources/icon_questions.png')} style={styles.mainmenuIconImageStyle} />
            <Text style={styles.mainmenuButtonTextStyle}>ASK A QUESTION</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mainmenuButtonStyle}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('PostAnswerPage')}>
            <Image source={require('../resources/icon_answer.png')} style={styles.mainmenuIconImageStyle} />
            <Text style={styles.mainmenuButtonTextStyle}>POST ANSWERS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mainmenuButtonStyle}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('ExploreQuestionsPage')}>
            <Image source={require('../resources/icon_explore.png')} style={styles.mainmenuIconImageStyle} />
            <Text style={styles.mainmenuButtonTextStyle}>EXPLORE</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default MainPage;
