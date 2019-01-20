import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      overallGoal: 8,
      waterLeft: 8,
    };
  }

  increaseWaterConsumedCount = () => {
    this.setState({
      waterLeft: this.state.waterLeft - 1, 
    });
  }

  setGoal = (overallGoal) => {
    this.setState({
      overallGoal: parseInt(overallGoal),
      waterLeft: parseInt(overallGoal)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: '#0033cc', fontWeight:'bold', fontSize: 40, fontFamily: 'Papyrus'}}> Water </Text>
        <TextInput style = {{fontSize: 20}} placeholder="Goal water amount" onChangeText={this.setGoal} />
        <Text style = {{fontSize: 20}}> Your goal for today is: {this.state.overallGoal} </Text>
        <Text style = {{fontSize: 20}}> {this.state.waterLeft != 0 ? "Water left: " + this.state.waterLeft : "You have finished"} </Text>
        <Button color='#0033cc' onPress={this.increaseWaterConsumedCount} title="+ water consumed"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccd9ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
