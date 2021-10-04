import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, Text, Image} from 'react-native';
import {getUser} from '../firebase/AuthenticationApi';

const styles = require('../resources/styles');

const MainPage = ({route, navigation}) => {
  return (
    <ImageBackground source={require('../resources/screen_background.jpg')} resizeMode="cover" style={{flex:1, justifyContent:"center"}}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.signedUserTextStyle}> 
          Welcome {getUser(route)} <Image source={require('../resources/icon_person.png')} style={styles.IconImageStyle} />
        </Text>
        <ScrollView style={styles.scrollView}>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('AskQuestionsPage', getUser(route))}>
            <Text style={styles.buttonTextStyle}>ASK A QUESTION</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('PostAnswerPage', getUser(route))}>
            <Text style={styles.buttonTextStyle}>POST ANSWERS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('ExploreQuestionsPage', getUser(route))}>
            <Text style={styles.buttonTextStyle}>EXPLORE</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default MainPage;
