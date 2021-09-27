import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';

const GreetingPage = ({route, navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          Hello {route.params.paramKey}!
        </Text>
        <Button
          title="OK"
          onPress={() =>
            navigation.navigate('HomePage')
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default GreetingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
});
