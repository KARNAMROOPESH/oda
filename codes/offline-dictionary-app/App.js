import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { Header } from 'react-native-elements';
import db from './localdb';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      displaytext: [],
      lexicalCategory: [],
      definition: [],
    };
  }
  render() {
    return (
      <View style={{ height: 400 }}>
        <Header
          centerComponent={{
            text: 'EASY DICTIONARY',
            style: {
              color: 'red',
              marginLeft: 20,
              fontSize: 20,
              fontWeight: 'bold',
            },
          }}
        />
        <Image
          style={styles.img}
          source={{
            uri:
              'https://images.emojiterra.com/google/android-10/512px/1f4d6.png',
          }}
        />
        <Image
          style={styles.imga}
          source={{
            uri:
              'https://images.emojiterra.com/google/android-10/512px/1f4d6.png',
          }}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 5,
            marginTop: 20,
            width: '70%',
            alignSelf: 'left',
            marginLeft: 20,
            textAlign: 'center',
          }}
          onChangeText={(text) => {
            this.setState({
              text: text,
            });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            var worda = this.state.text.toLowerCase();
            db[worda]
              ? (this.setState({
                  displaytext: db[worda].word,
                }),
                this.setState({
                  definition: db[worda].definition,
                }),
                this.setState({
                  lexicalCategory: db[worda].lexicalCategory,
                }))
              : Alert.alert('Sorry.This word id not found');
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
<View style={{marginTop:100}}>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.whbuttonText}>Word</Text>
          <Text style={styles.wbuttonText}>{this.state.displaytext}</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.whbuttonText}>Definition</Text>
          <Text style={styles.wbuttonText}>{this.state.definition}</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.whbuttonText}>LexicalCategory</Text>
          <Text style={styles.wbuttonText}>{this.state.lexicalCategory}</Text>
        </View>
      </View>
</View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 5,
    borderColor: 'grey',
    marginTop: -40,
    marginLeft: 210,
    width: 50,
    height: 40,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  wbuttonText: {
    textAlign: 'center',
    color: 'rgb(250, 210, 125)',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'red',
  },
  whbuttonText: {
    textAlign: 'center',
    color: 'rgb(250, 210, 125)',
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 5,
    backgroundColor: 'red',
  },
  img: {
    width: 40,
    height: 40,
    marginTop: -40,
    marginLeft: 20,
  },
  imga: {
    width: 40,
    height: 40,
    marginTop: -40,
    marginLeft: 280,
  },
});
