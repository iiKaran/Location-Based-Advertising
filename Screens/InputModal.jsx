import React, { useState } from 'react';
import { View, TextInput,Text,Button ,ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useSelector,useDispatch} from 'react-redux'
import { setInputModal } from '../Redux/Slices/HomeSlice';
const InputModal = ({closeFxn}) => {
    const navigation = useNavigation();
  const [formData, setFormData] = useState({
    id: '4',
    title: '',
    description: '',
    name: '',
    place: '',
    image: '',
    date: '',
    validTill: '',
    status: true,
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    // Handle form submission, e.g., send data to server
    console.log(formData);
  };
  const dispatch = useDispatch();
  return (
    <ScrollView className='p-4 bg-bgLessDark'>
      <Text className='mb-12 text-xl font-semibold text-center text-textLight'>Add New Advertisement</Text>
    
      <Text className=' opacity-70 text-textLight font-[400] font-mono text-xl'>Title:</Text>
      <TextInput
       className='px-4 mt-2 mb-6 capitalize border-b-2 rounded-lg border-b-bgPrimary focus:border-bgPrimary border-opacity-5 opacity-70 text-textLight'
        value={formData.title}
        onChangeText={(text) => handleChange('title', text)}
      />
      <Text className=' opacity-70 text-textLight font-[400] font-mono text-xl'>Description:</Text>
      <TextInput
       className='px-4 mt-2 mb-6 capitalize border-b-2 rounded-lg border-b-bgPrimary focus:border-bgPrimary border-opacity-5 opacity-70 text-textLight'
        value={formData.description}
        onChangeText={(text) => handleChange('description', text)}
      />
      <Text className=' opacity-70 text-textLight font-[400] font-mono text-xl'>Name:</Text>
      <TextInput
       className='px-4 mt-2 mb-6 capitalize border-b-2 rounded-lg border-b-bgPrimary focus:border-bgPrimary border-opacity-5 opacity-70 text-textLight'
        value={formData.name}

        onChangeText={(text) => handleChange('name', text)}
      />
      <Text className=' opacity-70 text-textLight font-[400] font-mono text-xl'>Place:</Text>
      <TextInput
       className='px-4 mt-2 mb-6 capitalize border-b-2 rounded-lg border-b-bgPrimary focus:border-bgPrimary border-opacity-5 opacity-70 text-textLight'
        value={formData.place}
        onChangeText={(text) => handleChange('place', text)}
      />
      <Text className=' opacity-70 text-textLight font-[400] font-mono text-xl'>Image Url:</Text>
      <TextInput
       className='px-4 mt-2 mb-6 capitalize border-b-2 rounded-lg border-b-bgPrimary focus:border-bgPrimary border-opacity-5 opacity-70 text-textLight'
        value={formData.image}
        onChangeText={(text) => handleChange('image', text)}
      />
      <TouchableOpacity onPress={handleSubmit} className='mb-4 rounded-md bg-bgPrimary' >
        <Text className='p-4 text-center text-textLight'>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        dispatch(setInputModal(false));
      }} className='mb-[400px] rounded-md bg-[#efebeb46]  ' >
        <Text className='p-4 text-center text-white'>Cancel</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default InputModal;
