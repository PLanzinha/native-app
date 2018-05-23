import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const Agradecimento = ({pessoa}) => {
  return <View>
    <Text> Olá {pessoa}</Text>
    </View>
}

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text> hello, how are you?</Text>
        <Text>hey link</Text>
        <Text> holla, como estas</Text>
        <Text> holla, como estas</Text>
        <Text> holla, como estas</Text>
        <Text>hey link</Text>
        <Text> holla, como estas</Text>
        <Text> holla, como estas</Text>
        <Text>hey link</Text>
        <Text> holla, como estas</Text>
        <Text> holla, como estas</Text>
        <Text>hey link</Text>
        <Text> holla, como estas</Text>
        <Text> holla, como estas</Text>
        <Text>hey link</Text>
        <Text> holla, como estas</Text>
        <Text> holla, como estas</Text>
        <Text>hey link</Text>
        <Text> holla, como estas</Text>
        <Text> holla, como estas</Text>
        <Text>hey link</Text>
        <Text> holla, como estas</Text>
        <Text> holla, como estas</Text>
        <Text>hey link</Text>
        <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}} style={{width:100, height:100}} />
        <Agradecimento pessoa="Jorge"/>
        <Agradecimento pessoa="Tiago"/>
        <Agradecimento pessoa="Mariana"/>
        <Agradecimento pessoa="Xavier"/>
        </View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
