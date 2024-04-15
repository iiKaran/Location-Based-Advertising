import React, {useState,useEffect} from 'react';
import NavBar from '../Components/NavBar';
import Intro from '../Components/Intro';
import {useSelector} from 'react-redux';
import OptionContainer from '../Components/OptionContainer';
import {View, Text, TouchableOpacity} from 'react-native';
import BenefitsList from '../Components/BenefitsList';
export default function Home({navigation}) {
  const [delayComplete, setDelayComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayComplete(true);
    }, 3000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (delayComplete) {
      // Assuming `info` is already available in your component's props
      if (info) {
        if (info.type === 'user') {
          navigation.navigate('userHome');
        } else {
          navigation.navigate('ads');
        }
      } else {
        navigation.navigate('login');
      }
    }
  }, [delayComplete]);
  const [active, setActive] = useState(2);
  const {info} = useSelector((state)=>state.user)
  return (
    <View className="justify-center flex-1 bg-bgLessDark text-textLight">
      {/* <NavBar></NavBar> */}
      <Intro></Intro>
      <View className="mt-12 ">
        <View className="flex flex-row w-[90%] gap-2 mx-auto ">
          <TouchableOpacity
            className="w-[48%]  rounded-full ]"
            onPress={() => {
              setActive(active == 1 ? 2 : 1);
            }}>
            <View
              className={`w-[100%] ${active == 1 ? 'bg-[#f2894dc7]' : ' '}}`}>
              <Text
                className={` rounded-md text-center py-4 ${
                  active == 1
                    ? 'bg-[#f2894dc7] text-black'
                    : 'bg-[#efebeb46] text-white'
                }`}>
                How it works
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-[48%]  rounded-full ]"
            onPress={() => {
              setActive(active == 1 ? 2 : 1);
            }}>
            <View
              className={`w-[100%] ${active == 2 ? 'bg-[#f2894dc7]' : ' '}}`}>
              <Text
                className={` rounded-md text-center py-4 ${
                  active == 2
                    ? 'bg-[#f2894dc7] text-black'
                    : 'bg-[#efebeb46] text-white'
                }`}>
                Points to Consider
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {active == 1 ? (
          <BenefitsList></BenefitsList>
        ) : (
          <BenefitsList></BenefitsList>
        )}
        <TouchableOpacity
          className="w-[90%] mx-auto mt-6 rounded-full py-4"
          onPress={() => {
            console.log("INformation",info)
      
            if(info){
              if(info.type=="user")
              {
                navigation.navigate('userHome');
              }
              else
              navigation.navigate('ads');
            }
          else
           navigation.navigate('login');
          
          }}>
          <Text className="text-bgdark w-[100%] text-center bg-[#f2894dc7] p-4 rounded-lg">
            Proceed Further
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
