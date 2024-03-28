import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const url =
  'https://img.freepik.com/premium-photo/marketing-ads_886668-1.jpg?w=1060';
export default function NavBar() {
  const [status, setStatus] = useState(false);
  return (
    <View className="flex pt-7 pb-5 flex-row justify-between px-7 items-center pr-4 w-[100%] bg-bgLessDark ">
    {/* <View className=''>
    <Icon name="rocket" size={30} color="#900" />

    </View> */}
      <View className="flex flex-row items-center gap-2 ">
        {/* <Image source={{uri: url}} style={{width: 30, height: 30}}  className='rounded-md '/> */}
        <Text className="font-[800] capitalize text-gray-400 text-[24px] font-mono">
          Ad-verse
        </Text>
      </View>
      <View className='flex items-center gap-2'>
        <ToggleSwitch
          isOn={status}
          onColor="#FA7629"
          offColor="#F1F2EC"
          size="large"
          onToggle={isOn => setStatus(!status)}
          animationSpeed={600}
        />
         <Text className="font-mono text-textLight">
          {
            status ? "Online" : "Offline"
          }
        </Text>
      </View>
    </View>
  );
}
