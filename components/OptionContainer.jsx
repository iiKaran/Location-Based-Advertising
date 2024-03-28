import {View, Text, TouchableOpacity} from 'react-native';
import BenefitsList from './BenefitsList';
import React, {useState} from 'react';

export default function OptionContainer() {
  const [active, setActive] = useState(2);
  return (
    <View className='mt-12'>
    <View className="flex flex-row w-[90%] gap-2 mx-auto ">
      <TouchableOpacity
       className='w-[48%]  rounded-full ]'
        onPress={() => {
         setActive(active==1 ? 2 : 1)
        }}>
        <View  className={`w-[100%] ${active==1 ? 'bg-[#f2894dc7]' : ' '}}`}>
          <Text className={` rounded-md text-center py-4 ${active==1 ? 'bg-[#f2894dc7] text-black' : 'bg-[#efebeb46] text-white'}`}>
            How it works 
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
       className='w-[48%]  rounded-full ]'
        onPress={() => {
         setActive(active==1 ? 2 : 1)
        }}>
        <View  className={`w-[100%] ${active==2 ? 'bg-[#f2894dc7]' : ' '}}`}>
          <Text className={` rounded-md text-center py-4 ${active==2 ? 'bg-[#f2894dc7] text-black' : 'bg-[#efebeb46] text-white'}`}>
            Points to Consider
          </Text>
        </View>
      </TouchableOpacity>
    </View>
    {
        active==1 ? <BenefitsList></BenefitsList>:<BenefitsList></BenefitsList>
    }
     <TouchableOpacity className='w-[90%] mx-auto mt-6 rounded-full py-4'>
      <Text className='text-bgdark w-[100%] text-center bg-[#f2894dc7] p-4 rounded-lg'>
        Proceed Further
      </Text>
      </TouchableOpacity>
    </View>
    
  );
}
