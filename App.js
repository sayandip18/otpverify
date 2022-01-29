import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import LoggedIn from './screen/LoggedIn';
import Verify from './screen/Verify';
import Phone from './screen/Phone';

export default function App () {
  const [verify, setVerify] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  async function signin(phoneNum){
    try{
      const confirmation = await auth().signInWithPhoneNumber(phoneNum);
      setVerify(confirmation);
    }
    catch(err){
      alert(err);
    }
  }

  async function confirmVerificationCode(code) {
    try {
      await verify.confirm(code);
      setConfirm(null);
    } catch (error) {
      alert('Invalid code');
    }
  }

  auth().onAuthStateChanged((user) => {
    if(user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  })

  if(authenticated) return <LoggedIn />;
  if(verify) return <Verify onSubmit={confirmVerificationCode} />;
  return <>
  <Phone onSubmit={signin} />
  </>;
};
