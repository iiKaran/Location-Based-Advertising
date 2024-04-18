import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  
} from 'react-native';
import axios from 'axios';
import {apiConnector} from '../Services/ApiConnecter';
import {updateUser} from '../Redux/Slices/UserSlice';
import {endpoints} from '../Services/api';
import {useSelector, useDispatch} from 'react-redux';
import {Picker} from '@react-native-picker/picker';

// const API_URL = 'https://your-api-url.com';
const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
      const response = await apiConnector(`POST`, endpoints.LOGIN_API, {
        email: name,
        password,
      });
      // Handle success
      const user = response?.data?.data;
      dispatch(updateUser(response?.data?.data));
      console.log('the user is ', user);
      if (user?.type === 'user') {
        navigation.navigate('userHome');
      } else {
        navigation.navigate('ads');
      }
    } catch (error) {
      if (error.response.status === 400) {
        // Show an alert or perform any other action for a 400 status code
        Alert.alert('Please Fill the credentials correctly');
      }
      if (error.response.status === 404) {
        // Show an alert or perform any other action for a 400 status code
        Alert.alert('Wrong Email or Password !!');
      }
      
      // Handle error
      console.error(error);
    }
  };

  return (
    <View className="items-center justify-center flex-1 bg-bgLessDark">
      <Text className="text-textLight font-[600] w-[90%] py-4  text-center ml-2 text-2xl mt-8  pl-3">
        Login Page
      </Text>

      <View className="w-[90%] mx-auto flex items-center mt-4">
        <Text className="w-[100%] px-4 mb-0 text-textLight font-bold opacity-9 ">
          Enter Your Mail Below:
        </Text>
        <TextInput
          value={name}
          onChangeText={setName}
          className="px-4 placeholder:text-slate-400 mt-0 py-1 w-[100%] mb-6  border-b-2 rounded-lg border-b-white focus:border-bgPrimary border-opacity-5 opacity-70 text-textLight"
        />
        <Text className="w-[100%] px-4 mb-0 text-textLight font-bold opacity-9 ">
          Enter Your Password Below:
        </Text>
        <TextInput
          // placeholder="Pa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          className="px-4 placeholder:text-slate-400 mt-0 py-1 w-[100%] mb-6  border-b-2 rounded-lg border-b-white focus:border-bgPrimary border-opacity-5 opacity-70 text-textLight"
        />
      </View>
      <TouchableOpacity
        className="w-[90%] mx-auto mt-6 mb-0 rounded-full py-4 pb-2"
        onPress={handleLogin}>
        <Text className="text-bgdark w-[100%] text-center bg-[#f2894dc7] p-4 rounded-lg">
          Sign In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="w-[90%] mx-auto mt-0 rounded-full py-2"
        onPress={() => {
          navigation.navigate('signup');
        }}>
        <Text className="text-bgdark w-[100%] text-center bg-[#f2894dc7] p-4 rounded-lg">
          Create a new Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Signup = ({navigation}) => {
  const {info} = useSelector(state => state.user);
  useEffect(() => {
    if (info) {
      if (info.type === 'user') {
        navigation.navigate('userHome');
      } else {
        navigation.navigate('ads');
      }
    }
  }, []);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [verified, setVerified] = useState(false);
  const [accountType, setAccountType] = useState('user'); // Default account type is user

  const handleVerifyEmail = async () => {
    try {
      // Call your API to send OTP to the email
      // console.log("the email is ", email,endpoints.SENDOTP_API)
      const response = await apiConnector('POST', endpoints.SENDOTP_API, {
        email,
      });
      // console.log("the response is ", response)
      if (response.data.success) {
      setVerified(true);
      Alert.alert('Verification email sent!');
      }
    } catch (error) {
      if (error.response.status === 400) {
        // Show an alert or perform any other action for a 400 status code
        Alert.alert('Something Went Wrong !!');
      }
      if (error.response.status === 404) {
        // Show an alert or perform any other action for a 400 status code
        Alert.alert('No Email Entered');
        return ;
      }
      if (error.response.status === 401) {
        // Show an alert or perform any other action for a 400 status code
        Alert.alert('User Exists Already !!');
      }
      // console.error(error);
    }
  };
  const handleSignup = async () => {
    try {
      const response = await apiConnector('POST', endpoints.SIGNUP_API, {
        name,
        email,
        password,
        otp,
        accountType,
      });
      // console.log(response.data);
      if (response.data.success) {
        Alert.alert('Signup successful!');
        navigation.navigate('login');
      }
    } catch (error) {
      // Handle error
      if (error.response.status === 400) {
        // Show an alert or perform any other action for a 400 status code
        Alert.alert('Check the Parameters Again !!');
      }
      if (error.response.status === 404) {
        // Show an alert or perform any other action for a 400 status code
        Alert.alert('User With Same Email Exists Already !!');
      }
      console.error(error);
    }
  };

  return (
    <View className="items-center justify-center flex-1 bg-bgLessDark">
      <Text className="text-textLight font-[600] w-[90%] py-4  text-center ml-2 text-2xl mt-8  pl-3">
        Sign Up Page
      </Text>
      {!verified ? (
        <>
          <View className="w-[90%] mx-auto flex items-center mt-4">
            <Text className="w-[100%] px-4 mb-0 text-textLight font-bold opacity-9 ">
              Enter Your Mail Below:
            </Text>

            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              className="px-4 placeholder:text-slate-400 mt-0 py-1 w-[100%] mb-6  border-b-2 rounded-lg border-b-white focus:border-bgPrimary border-opacity-5 opacity-70 text-textLight"
            />
            <TouchableOpacity
              className="w-[90%] mx-auto mt-0 rounded-full py-2"
              onPress={handleVerifyEmail}>
              <Text className="text-bgdark w-[100%] text-center bg-[#f2894dc7] p-4 rounded-lg">
                Verify Email
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View className="w-[90%] mx-auto flex items-center mt-4">
          <Text className="w-[100%] px-4 mb-0 text-textLight font-bold opacity-9 ">
            Enter Your Name Below:
          </Text>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            className="px-4 placeholder:text-slate-400 mt-0 py-1 w-[100%] mb-6  border-b-2 rounded-lg border-b-white focus:border-bgPrimary border-opacity-5 opacity-70 text-textLight"
          />
          <Text className="w-[100%] px-4 mb-0 text-textLight font-bold opacity-9 ">
            Enter Your Password Below:
          </Text>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="px-4 placeholder:text-slate-400 mt-0 py-1 w-[100%] mb-6  border-b-2 rounded-lg border-b-white focus:border-bgPrimary border-opacity-5 opacity-70 text-textLight"
          />
          <Text className="w-[100%] px-4 mb-0 text-textLight font-bold opacity-9 ">
            Enter the recieved OTP Below:
          </Text>
          <TextInput
            placeholder="OTP"
            value={otp}
            onChangeText={setOtp}
            className="px-4 placeholder:text-slate-400 mt-0 py-1 w-[100%] mb-6  border-b-2 rounded-lg border-b-white focus:border-bgPrimary border-opacity-5 opacity-70 text-textLight"
          />
          <Text className='w-[100%] px-4 mb-0 text-textLight font-bold opacity-9 '>Choose the AccountType:</Text>
       <View className='border-b-2 border-b-bgPrimary mb-4 w-[100%] font-bold'> 
          <Picker
            selectedValue={accountType}
            themeVariant={"light"}
            onValueChange={itemValue => setAccountType(itemValue)}
            style={{backgroundColor: 'transperent', color: '#fff', border:'2px solid red'}}
            itemStyle={{backgroundColor: '#25252C', color: '#F1F2EC'}}>
            <Picker.Item label="User" value="user" />
            <Picker.Item label="Advertiser" value="advertiser" />
          </Picker>
          </View>
          <TouchableOpacity
            className="w-[90%] mx-auto mt-0 rounded-full py-2"
            onPress={handleSignup}>
            <Text className="text-bgdark w-[100%] text-center bg-[#f2894dc7] p-4 rounded-lg">
              Create New Account
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Signup;

export {Login, Signup};
