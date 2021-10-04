import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, TouchableOpacity, Text, TextInput, StyleSheet, ImageBackground, Image} from 'react-native';
import Loader from './common/Loader';
import {createUser} from '../firebase/AuthenticationApi';

const styles = require('../resources/styles');

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

const UserRegistrationPage = ({route, navigation}) => {
  const [email, setEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [loading, setLoading] = useState(false);

  signUp = async () => {
    if (!email) {
      alert('Please enter your email');
      return;
    }
    if (emailRegex.test(email) === false) {
      alert('Email is invalid');
      return;
    }
    if (!userPassword) {
      alert('Please enter a password');
      return;
    }
    if (!retypePassword) {
      alert('Please re-type your password');
      return;
    }
    if (userPassword !== retypePassword) {
      alert('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const addCompleteFunc = () => {
        navigation.navigate('MainPage', {paramKey: email})
      }
      const errorFunc = (props) => {
        setLoading(false);
        alert(props);
      }
      createUser(email, userPassword, addCompleteFunc, errorFunc);
    } catch (err) {
      setLoading(false);
      console.log('Error signing-up: ', err)
      alert('Error occured!');
    }
  }

  return (
    <ImageBackground source={require('../resources/screen_background.jpg')} resizeMode="cover" style={{flex:1, justifyContent:"center"}}>
      <Loader loading={loading} />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={{height: 50}}/>
          <View style={styles.SectionStyle}>
            <Image source={require('../resources/icon_person.png')} style={styles.IconImageStyle} />
            <TextInput
              style={styles.inputStyle}
              placeholder='Email'
              autoCapitalize="none"
              placeholderTextColor='#8b9cb5'
              onChangeText={(Email) => setEmail(Email)}
            />
          </View>
          <View style={styles.SectionStyle}>
            <Image source={require('../resources/icon_password.png')} style={styles.IconImageStyle} />
            <TextInput
              style={styles.inputStyle}
              placeholder='Password'
              secureTextEntry={true}
              autoCapitalize="none"
              placeholderTextColor='#8b9cb5'
              onChangeText={(UserPassword) => setUserPassword(UserPassword)}
            />
          </View>
          <View style={styles.SectionStyle}>
            <Image source={require('../resources/icon_password2.png')} style={styles.IconImageStyle} />
            <TextInput
              style={styles.inputStyle}
              placeholder='Re-type Password'
              secureTextEntry={true}
              autoCapitalize="none"
              placeholderTextColor='#8b9cb5'
              onChangeText={(RetypePassword) => setRetypePassword(RetypePassword)}
            />
          </View>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={this.signUp}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default UserRegistrationPage;
