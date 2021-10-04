import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, LayoutAnimation, Text } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import {getAllQuestions} from '../firebase/FarmOverflowApi';

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
    getAllQuestions(this);
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

  renderSeparator = () => {
    return (<View style={{ height: 1, backgroundColor: '#CED0CE'}}/>);
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

  renderItem = ({item}) => (
    <View>
      <ListItem key={item.key} onPress={() => this.onChangeLayout(item.key)}            >
        <ListItem.Content>
          <ListItem.Title>{`(${item.index}) ${item.question}`}</ListItem.Title>
          <ListItem.Subtitle>{`Asked by ${item.createdBy} on ${item.createdAt.toDate()}`}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
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
