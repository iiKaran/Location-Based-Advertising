import {View, Text, Button, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Intro() {
  return (
    <View>
      <Text className= 'text-textLight font-[300] p-6 text-[10vw] text-center scale-12 flex flex-row  leading-[60px] relax '>
        Let's <Text className='text-bgPrimary font-[500]  font-serif'>Change</Text> The Way of <Text className='text-bgPrimary font-[500] font-serif'>Advertising!!</Text>
      </Text>
      <Text className='opacity-60 text-[18px] text-left  leading-[28px] w-[90%] mx-auto text-textLight'>Platform Adverse simplifies BLE projects with advanced tools, ctivity possibilities.</Text>
     
    </View>
  
  );
}
