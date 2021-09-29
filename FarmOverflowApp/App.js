import 'react-native-gesture-handler';

import React from 'react';
import {Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import UserRegistrationPage from './pages/UserRegistrationPage';
import AskQuestionsPage from './pages/AskQuestionsPage';
import PostAnswerPage from './pages/PostAnswerPage';
import ExploreQuestionsPage from './pages/ExploreQuestionsPage';

const Stack = createStackNavigator();
const HeaderImage = (
  <Image 
    source={require('./resources/farmoverflow_logo_black.png')} 
    style={{
      width: 250,
      height: 20,
      resizeMode: 'cover',
    }}
  />
);
const TitleContainerColor = '#32B232';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{
            title: HeaderImage,
            headerStyle: {backgroundColor: TitleContainerColor},
          }}
        />
        <Stack.Screen
          name="UserRegistrationPage"
          component={UserRegistrationPage}
          options={{
            title: HeaderImage,
            headerStyle: {backgroundColor: TitleContainerColor},
          }}
        />
        <Stack.Screen
          name="AskQuestionsPage"
          component={AskQuestionsPage}
          options={{
            title: HeaderImage,
            headerStyle: {backgroundColor: TitleContainerColor},
          }}
        />
        <Stack.Screen
          name="PostAnswerPage"
          component={PostAnswerPage}
          options={{
            title: HeaderImage,
            headerStyle: {backgroundColor: TitleContainerColor},
          }}
        />
        <Stack.Screen
          name="ExploreQuestionsPage"
          component={ExploreQuestionsPage}
          options={{
            title: HeaderImage,
            headerStyle: {backgroundColor: TitleContainerColor},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
