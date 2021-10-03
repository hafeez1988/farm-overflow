import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { ListItem, Avatar, SearchBar } from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';

class ExploreQuestionsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    firestore().collection('farmoverflow').onSnapshot(querySnapshot => {
      const questions = [];
      let number = 0;

      querySnapshot.forEach(documentSnapshot => {
        questions.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
          index: ++number,
        });
      });

      this.setState({data: questions});
      this.arrayholder=questions;
    });
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.question.toUpperCase()} ${item.question.toUpperCase()} ${item.question.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem key={item.key}>
              <ListItem.Content>
                <ListItem.Title>{`(${item.index}) ${item.question}`}</ListItem.Title>
                <ListItem.Subtitle>{item.createdBy}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )}
          keyExtractor={item => item.key}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

export default ExploreQuestionsPage;
