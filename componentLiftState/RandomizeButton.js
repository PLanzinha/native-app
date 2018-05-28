import React from 'react'
import {
    TouchableHighlight,
    Text,
} from 'react-native'

class RandomizeButton extends React.Component {
    constructor (props) { 
      super(props) ;
      this.handlePress = this.handlePress.bind(this)
        }
    handlePress () {
        !this.props.onMyPress || this.props.onMyPress()
      /*  if (this.props.onMyPress) {
            this.props.onMyPress() 
        }*/
    }
    render () {
        return <TouchableHighlight onPress={this.handlePress} >
                    <Text>Click Me!! </Text>
                </TouchableHighlight>
    }
};

export default RandomizeButton
