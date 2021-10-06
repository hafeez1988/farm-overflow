import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, LayoutAnimation, Text, StyleSheet, Alert } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { getQuestionsByUser, deleteById } from '../firebase/FarmOverflowApi';
import { getLoginUsername } from '../firebase/AuthenticationApi';

class ExploreQuestionsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      expanded: false,
      error: null,
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    getQuestionsByUser(this, getLoginUsername());
  }

  searchFilterFunction = text => {
    this.setState({value: text});

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.question.toUpperCase()} ${item.question.toUpperCase()} ${item.question.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({data: newData});
  };

  showDeleteConfirmAlert = (recordId) => {
    Alert.alert(
      "Delete Question?",
      "Do you really want to delete this question?",
      [
        {
          text: "Yes",
          onPress: () => deleteById(recordId),
        },
        {
          text: "No",
          cancelable: true,
        }
      ],
    );
  };

  renderSeparator = () => {
    return (<View style={{ height: 1, backgroundColor: '#CED0CE'}}/>);
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Search Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  renderItem = ({item}) => (
    <View>
      <ListItem key={item.key} onPress={() => this.onChangeLayout(item.key)}            >
        <ListItem.Content>
          <ListItem.Title>{`(${item.index}) ${item.question}`}</ListItem.Title>
          <ListItem.Subtitle>{`Asked by ${item.createdBy} on ${item.createdAt.toDate()}`}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <Text style={styles.deleteButtonText} onPress={() => this.showDeleteConfirmAlert(item.key)}>Delete</Text>
      <View style={{height: (this.state.expanded === item.key) ? null : 0, overflow: 'hidden'}}>
        {item.answers.map((value, index) => {
          return (
            <Text key={index} style={{fontSize: 11, paddingBottom: 5, paddingTop: 5, paddingLeft: 20, color: '#34282C'}}>
              [Answer {index+1}]:{"\n"}{value}{"\n"}
            </Text>
          );
        })}
      </View>
    </View>
  )

  onChangeLayout = (farmQuestionId) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: farmQuestionId });
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
          renderItem={this.renderItem}
          keyExtractor={item => item.key}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

export default ExploreQuestionsPage;

const styles = StyleSheet.create({
  deleteButtonText: {
    color: 'red',
    fontSize: 10,
    textAlign: 'right',
    padding: 10,
    backgroundColor: 'white',
  },
});
