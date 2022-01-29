import React from 'react';
import {View, Button, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

function LoggedIn() {
  return <View>
      <Text>Signed in!!!</Text>
      <Button title="Signout" onPress={() => auth().signOut()} />
  </View>;
}

export default LoggedIn;
