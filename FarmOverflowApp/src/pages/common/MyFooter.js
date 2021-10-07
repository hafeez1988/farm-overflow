import React, { Component } from 'react';
import {View, Text} from 'react-native';

export default class MyFooter extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#c3eec3', alignItems: 'flex-end'}}>
        <Text style={{fontSize: 8, fontWeight: 'bold'}}>by Hafeez [ MS21911576 ]    |    SLIIT [ SE5070 ]</Text>
      </View>
     );
   }
}
