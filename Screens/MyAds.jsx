import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Touchable,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import InputModal from './InputModal';
import {SafeAreaView} from 'react-native-safe-area-context';
import PlusButtonModal from './PlusButtonModal';
import NavBar from '../Components/NavBar';
import {useSelector} from 'react-redux';
import AdPanel from '../Components/AdPanel';
import ViewModal from './ViewModal';
function OptionText({title}) {
  return (
    <View className="p-2 text-textLight ">
      <Text className="text-textLight font-[400] w-1/2 ml-2 text-2xl mt-8 capitalize pl-3 border-b-2 border-bgPrimary">
        {title}
      </Text>
    </View>
  );
}

export default function MyAds({navigation}) {
  const {ads, viewData, InputOpen} = useSelector(state => state.home);
  return (
    // <InputModal></InputModal>
    <View>
      <ScrollView className="max-h-[100vh] py-13 overflow-y-scroll bg-bgLessDark text-textLight">
        <OptionText title="On the Air"></OptionText>
        {/* // live ad pannel  */}
        <AdPanel></AdPanel>
        <OptionText title="Expired"></OptionText>
        {/* expired add panel */}
        <AdPanel></AdPanel>
        <PlusButtonModal navigation={navigation}></PlusButtonModal>
        {viewData && <ViewModal data={viewData}></ViewModal>}
      </ScrollView>
    </View>
  );
}
