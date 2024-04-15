import { View, Text, ScrollView ,StyleSheet, Touchable} from 'react-native'
import React from 'react'
import UserAdCard from '../Components/UserAdCard'
import {useSelector, useDispatch} from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { setUserFromStorage } from '../Redux/Slices/UserSlice';
import { removeKey } from '../Helper';
export default function UserHome({navigation}) {
const {latestAds} = useSelector((state)=>state.user)
const dispatch = useDispatch();
  
  return (
    <View className="bg-bgLessDark text-textLight ">
      <View className='flex flex-row justify-between gap-4 px-5 mt-4 mb-8 '>
      <Text className='pb-3 text-center opacity-75 font-[600] text-xl text-textLight  border-b-2 border-b-bgPrimary '>Latest Offers For You</Text>
        <Text className='p-3 text-xl text-center rounded-md text-textLight bg-bgPrimary'  onPress={()=>{
        dispatch(setUserFromStorage(null));
        removeKey("info");
        navigation.navigate("Home"); 
      }}>
          Log Out
        </Text>
      </View>
    <ScrollView contentContainerStyle={styles.container}>
      <UserAdCard data={latestAds[0]}> </UserAdCard>
      <UserAdCard data={latestAds[0]}> </UserAdCard>
      <UserAdCard data={latestAds[0]}> </UserAdCard>
      <UserAdCard data={latestAds[0]}> </UserAdCard>     
       <UserAdCard data={latestAds[0]}> </UserAdCard>
      <UserAdCard data={latestAds[0]}> </UserAdCard>
      <View style={styles.bottomSpace} />
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  bottomSpace: {
    marginBottom: 200, // Adjust this value as needed
  },
}); 