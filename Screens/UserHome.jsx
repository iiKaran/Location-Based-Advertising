import { View, Text, ScrollView ,StyleSheet} from 'react-native'
import React from 'react'
import UserAdCard from '../Components/UserAdCard'
import {useSelector} from 'react-redux';
export default function UserHome() {
const {latestAds} = useSelector((state)=>state.user)
  
  return (
    <View className="bg-bgLessDark text-textLight ">
      <Text className='w-[50%] mx-auto pb-3 text-center opacity-75 font-[600] text-xl text-textLight mt-8 border-b-2 border-b-bgPrimary mb-8'>Latest Offers For You</Text>
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