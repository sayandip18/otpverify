import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

import RNOtpVerify from 'react-native-otp-verify';

function Verify(props) {
    const [code, setCode] = useState('');
    const [otp, setOtp] = useState();

    useEffect(() => {
      RNOtpVerify.getHash()
      .then(console.log)
      .catch(console.log);

      RNOtpVerify.getOtp()
      .then(p => RNOtpVerify.addListener(otpHandler))
      .catch(p => console.log(p));

      return () => RNOtpVerify.removeListener();

    }, [])

    const otpHandler = (message) => {
      const otp = message;
      console.log("otp");
      console.log(otp);
      setOtp(otp);
    }

    return (
      <View >
        <Text >Enter OTP</Text>
        <TextInput
          autoFocus
          value={code}
          onChangeText={setCode}
          
          autoComplete={otp}
        />

        <Button title="Confirm OTP" onPress={() => props.onSubmit(code)} />
        <Button title="test" onPress={() => _onSmsListenerPressed}/>
      </View>
    );
}

export default Verify;
