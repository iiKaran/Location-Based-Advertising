// Details.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Details = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Details Screen</Text>
    <Button title="Go back" onPress={() => Actions.pop()} />
  </View>
);

export default Details;
