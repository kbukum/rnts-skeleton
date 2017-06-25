import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View
} from 'react-native';

export default class Application extends Component<any, any> {
  public constructor(props: any) {
    super(props);
    console.log(props);
    this.state = {
      value: ""
    }
  }
  public render(): JSX.Element {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Before Changed
        </Text>
        <Text style={styles.instructions}>
          {this.state.value}
        </Text>
        <TouchableOpacity>
          <Button title="Change" onPress={this.onPress} />
        </TouchableOpacity>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
  private onPress = (e?: any) => {
    this.setState({
      value: "Changed"
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e2e2e2',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});