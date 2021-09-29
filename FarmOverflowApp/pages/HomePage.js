import React, {useState, createRef} from 'react';
import {TextInput, View, Text, ScrollView, Image, Keyboard, TouchableOpacity, KeyboardAvoidingView, ImageBackground} from 'react-native';
import Loader from './common/Loader';
import {login} from '../firebase/AuthenticationApi';

const styles = require('../resources/styles');

const HomePage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext('');

    if (!email) {
      alert('Enter your email');
      return;
    }
    if (!userPassword) {
      alert('Enter your password');
      return;
    }

    setLoading(true);

    try {
      const loginFunc = () => {
        navigation.navigate('MainPage', {paramKey: email})
      }
      const errorFunc = () => {
        setLoading(false);
        setErrortext('Invalid email or password');
      }
      login(email, userPassword, loginFunc, errorFunc);
    } catch (err) {
      setLoading(false);
      console.log('Error login-in: ', err)
      alert('Error occured!');
    }
  };

  return (
    <View style={styles.mainBody}>
      <ImageBackground source={require('../resources/agritec_wallpaper.jpg')} resizeMode="cover" style={{flex:1, justifyContent:"center"}}>
        <Loader loading={loading} />
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
          <View>
            <KeyboardAvoidingView enabled>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../resources/farmoverflow_logo_white.png')}
                  style={{
                    width: '120%',
                    height: 50,
                    resizeMode: 'cover',
                  }}
                />
              </View>
              <View style={{height: 100}}/>
              {errortext != '' ? (
                <Text style={styles.errorTextStyle}> {errortext} </Text>
              ) : null}
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(Email) => setEmail(Email)}
                  placeholder="Enter Email"
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  returnKeyType="next"
                  onSubmitEditing={() =>
                    passwordInputRef.current && passwordInputRef.current.focus()
                  }
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                  placeholder="Enter Password"
                  placeholderTextColor="#8b9cb5"
                  keyboardType="default"
                  ref={passwordInputRef}
                  onSubmitEditing={Keyboard.dismiss}
                  blurOnSubmit={false}
                  secureTextEntry={true}
                  underlineColorAndroid="#f000"
                  returnKeyType="next"
                />
              </View>
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={handleSubmitPress}>
                <Text style={styles.buttonTextStyle}>LOGIN</Text>
              </TouchableOpacity>
              <Text
                style={styles.registerTextStyle}
                onPress={() => navigation.navigate('UserRegistrationPage')}>
                Don't have an account? SIGN UP
              </Text>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default HomePage;
