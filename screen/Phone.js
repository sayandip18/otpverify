import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

function Phone(props) {
    const [phoneNumber, setPhoneNumber] = useState(null);

    return (
      <View >
        <Text>Enter Phone Number</Text>
        <TextInput
          autoFocus
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <Button title="Phone Number Sign In" onPress={() => props.onSubmit(phoneNumber)} />
      </View>
    );
}

export default Phone;
