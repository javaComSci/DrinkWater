import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      overallGoal: 0,
      waterLeft: 0,
    };
  }

  increaseWaterConsumedCount = () => {
    this.setState({
      waterLeft: this.state.waterLeft - 1, 
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: '#ff6666', fontWeight:'bold', fontSize: 40, fontFamily: 'Papyrus'}}> Water </Text>
        <Text> Water Left for Today: {this.state.waterLeft} </Text>
        <Button onPress={this.increaseWaterConsumedCount} title="+ water consumed"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF1EE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
