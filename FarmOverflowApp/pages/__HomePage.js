import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Button,
  ScrollView,
  Alert,
} from 'react-native';

const HomePage = ({navigation}) => {
  const [userName, setUserName] = useState();

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <TextInput
            value={userName}
            onChangeText={(username) => setUserName(username)}
            placeholder={'Enter Name'}
            style={styles.inputStyle}
            accessibilityLabel="alert-text"
          />
          <Button
            title="Greet!"
            accessibilityLabel="alert-button"
            onPress={() =>
              {
                navigation.navigate('GreetingPage', {
                  paramKey: userName,
                })
              }
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 50,
  },
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#DBDBD6',
  },
});
