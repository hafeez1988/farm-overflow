import React from 'react';
import {View, ScrollView, Image, KeyboardAvoidingView, ImageBackground} from 'react-native';

const styles = require('../resources/styles');

const OfflinePage = ({navigation}) => {
  return (
    <View style={styles.mainBody}>
      <ImageBackground source={require('../resources/agritec_wallpaper.jpg')} resizeMode="cover" style={{flex:1, justifyContent:"center"}}>
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
          <View>
            <KeyboardAvoidingView enabled>
              <View style={{alignItems: 'center'}}>
                <Image source={require('../resources/offline_wallpaper.gif')} style={{width: '100%', height: 50, resizeMode: 'cover'}}/>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default OfflinePage;
