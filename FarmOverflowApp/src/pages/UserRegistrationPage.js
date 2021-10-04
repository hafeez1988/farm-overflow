import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, TouchableOpacity, Text, TextInput, StyleSheet, ImageBackground} from 'react-native';
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
          <View style={styles.SectionStyle}>
            <TextInput
              style={formStyles.input}
              placeholder='Email'
              autoCapitalize="none"
              placeholderTextColor='#8b9cb5'
              onChangeText={(Email) => setEmail(Email)}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={formStyles.input}
              placeholder='Password'
              secureTextEntry={true}
              autoCapitalize="none"
              placeholderTextColor='#8b9cb5'
              onChangeText={(UserPassword) => setUserPassword(UserPassword)}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={formStyles.input}
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

const formStyles = StyleSheet.create({
  input: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
})
