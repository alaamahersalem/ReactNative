import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends React.Component {
    componentDidMount(){
        debugger
    }
  render() {
    return (
       < Text style = {styles.container }> Hello, World Alaa< /Text> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
