import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from './pages/HomePage';
import GreetingPage from './pages/GreetingPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            title: 'MS21911576',
            headerStyle: {
              backgroundColor: '#008080',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="GreetingPage"
          component={GreetingPage}
          options={{
            title: 'Greeting',
            headerStyle: {
              backgroundColor: '#008080',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
