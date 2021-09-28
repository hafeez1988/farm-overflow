import React from 'react'
import {SafeAreaView, ScrollView, View, TouchableOpacity, Text, TextInput, StyleSheet} from 'react-native'

const styles = require('../resources/styles');

const UserRegistrationPage = ({route, navigation}) => {

  state = {
    username: '', password: '', retype_password: ''
  }

  signUp = async () => {
    const { username, password, retype_password } = this.state
    try {
      console.log('user successfully signed up!: ', this.state)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.SectionStyle}>
          <TextInput
            style={formStyles.input}
            placeholder='Username'
            autoCapitalize="none"
            placeholderTextColor='#8b9cb5'
            onChangeText={val => this.state.username=val}
          />
        </View>
        <View style={styles.SectionStyle}>
          <TextInput
            style={formStyles.input}
            placeholder='Password'
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor='#8b9cb5'
            onChangeText={val => this.state.password=val}
          />
        </View>
        <View style={styles.SectionStyle}>
          <TextInput
            style={formStyles.input}
            placeholder='Re-type Password'
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor='#8b9cb5'
            onChangeText={val => this.state.retype_password=val}
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
  },
})
