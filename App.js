import React from 'react';
import { 

  View, 
  
} from 'react-native';
import  styles, { version } from './styles/styles' 
import strings from './Strings/strings'
import MyTextArea from './componentLiftState/MyTextArea'
import RandomizeButton from './componentLiftState/RandomizeButton'



export default class App extends React.Component {
  constructor (props) { 
    super(props) ;
    this.state = {
    }
    this.handleRandomization = this.handleRandomization.bind(this)
    this.handleButtonRandomClick = this.handleButtonRandomClick.bind(this)
  }
  handleRandomization() {
    console.log("handleRandomization")
  }
  handleButtonRandomClick() {
    console.log("handleButtonRandomClick")
  }

  render() {
    return ( 
  <View style={styles.masterContainer} >
    <MyTextArea text="Qualquer coisa"/>
    <RandomizeButton onMyPress={this.handleRandomization}/>
    <RandomizeButton onMyPress={this.handleButtonRandomClick}/>
    <RandomizeButton/>

  </View>
    );

  }
}
  