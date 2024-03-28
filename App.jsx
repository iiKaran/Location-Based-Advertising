import { View, Text } from 'react-native'
import React from 'react'
import NavBar from './Components/NavBar'
import Intro from './Components/Intro'
import OptionContainer from './Components/OptionContainer'
export default function App() {
  return (
    <View  className='flex-1 bg-bgLessDark text-textLight'>
      <NavBar></NavBar>
      <Intro></Intro>
      <OptionContainer></OptionContainer>
      {/* <Text className=' lowercase opacity-30 text-textLight text-[12px]  absolute bottom-0 left-[30%]'>Copyright@karrshan44@gmail.com</Text> */}
    </View>
  )
}