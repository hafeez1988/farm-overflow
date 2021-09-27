import React from 'react'
import {SafeAreaView, ScrollView, View, Button, TextInput, StyleSheet} from 'react-native'

const styles = require('../styles');

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
        <View style={formStyles.container}>
          <TextInput
            style={formStyles.input}
            placeholder='Username'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.state.username=val}
          />
          <TextInput
            style={formStyles.input}
            placeholder='Password'
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.state.password=val}
          />
          <TextInput
            style={formStyles.input}
            placeholder='Re-type Password'
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.state.retype_password=val}
          />
          <Button
            title='Sign Up'
            onPress={this.signUp}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserRegistrationPage;

const formStyles = StyleSheet.create({
  input: {
    color: 'white',
    borderRadius: 14,
    fontSize: 14,
    width: '90%',
    height: 44,
    margin: 10,
    padding: 8,
    marginVertical: 10,
    backgroundColor: '#42A5F5',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  }
})
