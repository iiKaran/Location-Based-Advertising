
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import { apiConnector } from '../Services/ApiConnecter';
import {updateUser} from '../Redux/Slices/UserSlice'
import { endpoints } from '../Services/api';
import {useSelector, useDispatch} from 'react-redux';
import {Picker} from '@react-native-picker/picker';

const API_URL = 'https://your-api-url.com';
const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
      const response = await apiConnector(`POST`,endpoints.LOGIN_API,{email:name,password});
      // Handle success
      const user = response?.data?.data;
      dispatch(updateUser(response?.data?.data))
      console.log("the user is ", user)
      if(user?.type === 'user'){
        navigation.navigate('userHome')
      }
      else{
        navigation.navigate('ads')
      }
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Create new Account" onPress={()=>{
        navigation.navigate('signup')
      }} />
    </View>
  );
};


const Signup = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [verified, setVerified] = useState(false);
  const [accountType, setAccountType] = useState('user'); // Default account type is user


  const handleVerifyEmail = async () => {
    try {
      // Call your API to send OTP to the email
      console.log("the email is ", email,endpoints.SENDOTP_API)
      const response = await apiConnector('POST', endpoints.SENDOTP_API, { email });
      setVerified(true);
      Alert.alert('Verification email sent!');
    } catch (error) {
      console.error(error);
    }
  };
  const handleSignup = async () => {
    try {
      const response = await apiConnector("POST",endpoints.SIGNUP_API,{name,email,password,otp,accountType});
      console.log(response.data);

      if(response.data.success){
        Alert.alert('Signup successful!');
        navigation.navigate('login');
      }
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Signup</Text>
      {!verified ? (
        <>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Button title="Verify Email" onPress={handleVerifyEmail} />
        </>
      ) : (
        <>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            placeholder="OTP"
            value={otp}
            onChangeText={setOtp}
          />
          <Picker
            selectedValue={accountType}
            onValueChange={(itemValue) => setAccountType(itemValue)}
          >
            <Picker.Item label="User" value="user" />
            <Picker.Item label="Advertiser" value="advertiser" />
          </Picker>
          <Button title="Signup" onPress={handleSignup} />
        </>
      )}
    </View>
  );
};

export default Signup;


export { Login, Signup };
