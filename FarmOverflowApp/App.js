import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import UserRegistrationPage from './pages/UserRegistrationPage';
import AskQuestionsPage from './pages/AskQuestionsPage';
import PostAnswerPage from './pages/PostAnswerPage';
import ExploreQuestionsPage from './pages/ExploreQuestionsPage';

//import {addNewQuestion} from './firebase/FarmOverflowApi';

const Stack = createStackNavigator();
const Title = 'FARM Overflow';
const HomeTitle = 'SLIIT - MS21911576';

const App = () => {
  //addNewQuestion(null, null);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{
            title: Title,
            headerStyle: {
              backgroundColor: '#008080',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="UserRegistrationPage"
          component={UserRegistrationPage}
          options={{
            title: Title,
            headerStyle: {
              backgroundColor: '#008080',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="AskQuestionsPage"
          component={AskQuestionsPage}
          options={{
            title: Title,
            headerStyle: {
              backgroundColor: '#008080',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="PostAnswerPage"
          component={PostAnswerPage}
          options={{
            title: Title,
            headerStyle: {
              backgroundColor: '#008080',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="ExploreQuestionsPage"
          component={ExploreQuestionsPage}
          options={{
            title: Title,
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
