import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, LayoutAnimation, Text, LogBox, TextInput, TouchableOpacity, Image } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { getAllQuestions, addAnswerById } from '../firebase/FarmOverflowApi';
import { getLoginUsername, logout } from '../firebase/AuthenticationApi';
import ToggleBox from 'react-native-togglebox';

const styles = require('../resources/styles');

class PostAnswerPage extends Component {
  constructor(props) {
    super(props);

    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);

    this.state = {
      loading: false,
      data: [],
      expanded: false,
      error: null,
      navigation: props.navigation,
      farmAnswer: {
        user: getLoginUsername(),
        answer: null
      }
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
    return (<View style={{height: 1, backgroundColor: '#CED0CE'}}/>);
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

  submitAnswer = (recordId) => {
    addAnswerById(recordId, this.state.farmAnswer.answer);
  }

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
        <ToggleBox label='' value='click to answer' style={{backgroundColor: '#ddd'}}>
          <View style={{height: 300, alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee'}}>
            <TextInput
              style={styles.answerTextArea}
              underlineColorAndroid="transparent"
              placeholder="Type something ...."
              placeholderTextColor="grey"
              numberOfLines={5}
              multiline={true}
              onChangeText={val => this.state.farmAnswer.answer = val}
            />
            <TouchableOpacity
              style={styles.answerButtonStyle}
              activeOpacity={0.5}
              onPress={() => {this.submitAnswer(item.key)}}>
              <Text style={styles.answerButtonTextStyle}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ToggleBox>
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
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.signedUserTextStyle}> 
            Logged-in as {getLoginUsername()} <Image source={require('../resources/icon_person.png')} style={styles.IconImageStyle} />
          </Text>
          <Text onPress={() => {logout(this.state.navigation)}}>
            Logout
          </Text>
        </View>
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

export default PostAnswerPage;
