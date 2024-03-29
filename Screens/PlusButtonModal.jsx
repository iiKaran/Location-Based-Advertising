import React, { useState } from 'react';
import { View, Modal, TouchableOpacity, Text, StyleSheet } from 'react-native';
import InputModal from './InputModal';

const PlusButtonModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  function close()
  {
    setModalVisible(false);
  }
  return (
    <View  className='absolute p-4 top-2 right-5'>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={close}
      >
        <InputModal closeFxn = {close}></InputModal>
      </Modal>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="!bg-bgPrimary rounded-lg"
      >
        <Text className='p-3 rounded-lg text-textLight'>Create New</Text>
      </TouchableOpacity>
    </View>
  );
};



export default PlusButtonModal;
