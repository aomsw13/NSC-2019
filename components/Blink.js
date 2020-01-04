import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Blink extends React.Component {
    componentDidMount(){
        // Toggle the state every second
        setInterval(() => (
          this.setState(previousState => (
            { isShowingText: !previousState.isShowingText }
          ))
        ), 1000);
      }
    
      //state object
      state = { isShowingText: true };
    
      render() {
        if (!this.state.isShowingText) {
          return null;
        }
    
        return (
           
                <Text style={styles.paragraph}>{this.props.text}</Text>
           
        );
      }
  }
  const styles = StyleSheet.create({
    container1: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#EAE41B',
      },
    paragraph: {
        margin: 15,
        marginTop: 0,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
    
    }
  });
  