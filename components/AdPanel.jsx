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
  SafeAreaView,
  Alert

} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setViewData} from '../Redux/Slices/HomeSlice';
import React,{useEffect, useState} from 'react';
import { setAdsData } from '../Redux/Slices/HomeSlice';
import { apiConnector } from '../Services/ApiConnecter';
import { endpoints } from '../Services/api';
import Ad from './Ad';

function example({item, data}) {
  return (
    <View className='relative w-full' style={styles.container}>
      <Ad item={item} data={data}></Ad>
    </View>
  );
}

export default function AdPanel() {
  useEffect(()=>{
    
  },[])
  const {ads} = useSelector(state => state.home);
  const [numColumns, setNumColumns] = useState(2);
  const dispatch = useDispatch();
  const {info}= useSelector((state)=>state.user);

  function setView(data) {
    dispatch(setViewData());
  }
  useEffect(() => {
    async function FetchAndPopulateAds(){
      try{
        const id = info?._id;
        const response = await apiConnector('POST', endpoints.GET_ALL_ADS_API,{id});

        // console.log("THe ads by the user are ", response?.data?.data)
        dispatch(setAdsData(response?.data?.data));

        
      }
      catch(err){
        Alert.alert("Something went wrong");
        // console.log("Error while getting ads", err); 
        return ; 
      }
    }
    FetchAndPopulateAds();
  },[])

  return (
    <SafeAreaView className="px-3 py-3">
      <FlatList
        data={ads}
        renderItem={example}
        keyExtractor={item => item._id}
        // horizontal={true}
        numColumns={numColumns}
        ItemSeparatorComponent={() => <View style={{width: 10}} />} // Change the height as needed
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '48%',
    marginLeft: 4,
    maxWidth: '50%',
    borderRadius: 8,
    overflow: 'hidden',
    borderColor: '#E2E8F0',
    borderWidth: 1,
    marginVertical: 4,
    backgroundColor: '#F7FAFC',
  }
});