import React, { useState } from 'react';
import { View, Modal, TouchableOpacity, Text, StyleSheet } from 'react-native';
import InputModal from './InputModal';
import { setInputModal } from '../Redux/Slices/HomeSlice';
import { removeKey } from '../Helper';
import { setUserFromStorage } from '../Redux/Slices/UserSlice';

import {useSelector,useDispatch} from 'react-redux'
export default PlusButtonModal = ({navigation}) => {
  const {inputOpen,}= useSelector((state)=>state.home); 
  const dispatch = useDispatch();
  return (
    <View  className='absolute right-0 p-4 top-2'>
   { inputOpen &&   <Modal
        animationType="slide"
        onRequestClose={()=>{
          dispatch(setInputModal(false))
        }}
      >
        <InputModal></InputModal>
      </Modal>}
      <View className='flex flex-row items-center justify-center gap-4'> 
      <TouchableOpacity
        onPress={() => dispatch(setInputModal(true))}
        className="!bg-bgPrimary rounded-lg"
      >
        <Text className='p-3 rounded-lg text-textLight'>Create New</Text>

      </TouchableOpacity>
      <Text className='p-3 rounded-md text-textLight bg-bgPrimary'  onPress={()=>{
        
        dispatch(setUserFromStorage(null));
        removeKey("info");
        navigation.navigate("Home"); 
      }}>
          Log Out
        </Text>
      </View>
      
    </View>
  );
};



