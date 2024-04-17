import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import UserAdCard from '../Components/UserAdCard';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { setUserFromStorage } from '../Redux/Slices/UserSlice';
import { setUserAdsData } from '../Redux/Slices/HomeSlice';
import { removeKey } from '../Helper';
import { apiConnector } from '../Services/ApiConnecter';
import { addToUserAds } from '../Redux/Slices/HomeSlice';
import { endpoints } from '../Services/api';
import io from 'socket.io-client';
const SERVER_URL = 'https://adverse-backend.onrender.com';
function example({ item }) {
  return (
    <View className='relative w-full'>
      <UserAdCard item={item} data={item}></UserAdCard>
    </View>
  );
}

export default function UserHome({ navigation }) {
  const { userAds } = useSelector((state) => state.home);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await apiConnector('POST', endpoints.GET_ADS);
        dispatch(setUserAdsData(response?.data?.data));
      } catch (err) {
        console.log("Error Occurred while fetching ads", err);
      }
    }
    fetchData();

    const socket = io(SERVER_URL);

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('newAdvertisement', (advertisement) => {
      console.log("the advertisement", advertisement)
      dispatch(addToUserAds(advertisement));
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <View className="bg-bgLessDark text-textLight">
      <View className='flex flex-row justify-between gap-4 px-5 mt-10 mb-8 '>
        <Text className='pb-3 text-center opacity-75 font-[600] text-xl text-textLight  border-b-2 border-b-bgPrimary'>Latest Offers For You</Text>
        <Text className='p-3 text-xl text-center rounded-md text-textLight bg-bgPrimary' onPress={() => {
          dispatch(setUserFromStorage(null));
          removeKey("info");
          navigation.navigate("Home");
        }}>
          Log Out
        </Text>
      </View>
        <FlatList
          data={userAds}
          renderItem={example}
          keyExtractor={item => item._id}
          horizontal={false}
          ItemSeparatorComponent={() => <View style={{ width: 10, height:'' }} />} // Change the height as needed
          contentContainerStyle={{ paddingBottom: 200 }}
        />
    </View>
  );
}
