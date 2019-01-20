import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      overallGoal: '',
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
        <TextInput style={{height: 30}} placeholder="Goal water amount" onChangeText={(overallGoal) => this.setState({overallGoal})} />
        <Text> Water Left for Today: {this.state.waterLeft} </Text>
        <Button onPress={this.increaseWaterConsumedCount} title="+ water consumed"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#FFF1EE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
