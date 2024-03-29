import React, { useState } from 'react';
import { View, Modal, TouchableOpacity, Text, StyleSheet } from 'react-native';
import InputModal from './InputModal';
import { setInputModal } from '../Redux/Slices/HomeSlice';
import {useSelector,useDispatch} from 'react-redux'

const PlusButtonModal = () => {
  const {inputOpen,}= useSelector((state)=>state.home); 
  const dispatch = useDispatch();
  return (
    <View  className='absolute p-4 top-2 right-5'>
   { inputOpen &&   <Modal
        animationType="slide"
        onRequestClose={()=>{
          dispatch(setInputModal(false))
        }}
      >
        <InputModal></InputModal>
      </Modal>}
      <TouchableOpacity
        onPress={() => dispatch(setInputModal(true))}
        className="!bg-bgPrimary rounded-lg"
      >
        <Text className='p-3 rounded-lg text-textLight'>Create New</Text>
      </TouchableOpacity>
    </View>
  );
};



export default PlusButtonModal;
