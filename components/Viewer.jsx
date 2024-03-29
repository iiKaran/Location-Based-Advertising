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

} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import { setViewData } from '../Redux/Slices/HomeSlice';
export default function Viewer() {
  const dispatch = useDispatch();
  const {viewData} = useSelector(state => state.home);
    return (
      <ScrollView className=" text-textLight bg-bgLessDark">
        {/* <NavBar state={false}></NavBar> */}
        <View className="w-[90%] flex  item-center mx-auto mt-10 overflow-hidden">
          <Text className="text-center opacity-75 font-[400] text-xl text-textLight">
            Advertisement Details
          </Text>
          <View className="flex flex-row gap-2 mt-6 align-center">
            <Text className="  opacity-75 capitalize text-bgPrimary text-[19px] font-[500]">
              Title :
            </Text>
            <Text className=" text-[19px]  capitalize opacity-75 text-textLight font-[300]">
              {viewData.title}
            </Text>
          </View>
          <View className="flex flex-row gap-2 mt-6 align-center">
            <Text className=" capitalize opacity-75 text-bgPrimary text-[19px] font-[500]">
              by :
            </Text>
            <Text className=" text-[19px] capitalize opacity-75 text-textLight font-[300]">
              {viewData.name}
            </Text>
          </View>
          <View className="flex flex-row gap-2 mt-6 align-center">
            <Text className=" capitalize opacity-75 text-bgPrimary text-[19px] font-[500]">
              Description :
            </Text>
            <Text className=" text-[12px]  capitalize opacity-75 text-textLight font-[300]">
              {viewData.description}
            </Text>
          </View>
          <View className="flex gap-2 mt-6 align-center">
            <Text className=" capitalize opacity-75 text-bgPrimary text-[19px] font-[500]">
              Image :
            </Text>
            <View>
              {/* <Image source={{uri: ""}} style={{width: '100%', height: 300}} /> */}
            </View>
          </View>
          <View className="flex flex-row gap-2 mt-6 align-center">
            <Text className=" capitalize opacity-75 text-bgPrimary text-[18px] font-[500]">
              Created On :
            </Text>
            <Text className=" text-[19px]  capitalize opacity-75 text-textLight font-[300]">
              {viewData.date}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              dispatch(setViewData(null))
              
            }}
            className="mb-[400px]  mt-12 rounded-md bg-[#efebeb46]  ">
            <Text className="p-4 text-center text-white">Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }