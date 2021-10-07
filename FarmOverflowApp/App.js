import 'react-native-gesture-handler';

import React from 'react';
import {Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {NetworkProvider, NetworkConsumer} from 'react-native-offline';

import HomePage from './src/pages/HomePage';
import MainPage from './src/pages/MainPage';
import UserRegistrationPage from './src/pages/UserRegistrationPage';
import AskQuestionsPage from './src/pages/AskQuestionsPage';
import PostAnswerPage from './src/pages/PostAnswerPage';
import ExploreQuestionsPage from './src/pages/ExploreQuestionsPage';
import OfflinePage from './src/pages/OfflinePage';

import MyFooter from './src/pages/common/MyFooter';

const Stack = createStackNavigator();
const HeaderImage = (
  <Image 
    source={require('./src/resources/farmoverflow_logo_black.png')} 
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
      <NetworkProvider shouldPing={true} pingInterval={100}>
        <NetworkConsumer>
          {({isConnected}) =>
            isConnected ?
            (
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
            ):
            (
              <Stack.Navigator initialRouteName="OfflinePage">
                <Stack.Screen
                  name="OfflinePage"
                  component={OfflinePage}
                  options={{headerShown: false}}
                />
              </Stack.Navigator>
            )
          }
        </NetworkConsumer>
      </NetworkProvider>
      <MyFooter/>
    </NavigationContainer>
  );
};

export default App;
