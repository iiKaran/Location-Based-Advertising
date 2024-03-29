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
} from 'react-native';
import React, {useState} from 'react';
import InputModal from './InputModal';
import {SafeAreaView} from 'react-native-safe-area-context';
import PlusButtonModal from './PlusButtonModal';
import NavBar from '../Components/NavBar';

function OptionText({title}) {
  return (
    <View className="p-2 text-textLight ">
      <Text className="text-textLight font-[400] w-1/2 ml-2 text-2xl mt-8 capitalize pl-3 border-b-2 border-bgPrimary">
        {title}
      </Text>
    </View>
  );
}
const ads = [
  {
    id: '1',
    title: 'Mega Offer',
    description:
      'Get 50% off on all orders above $50. Hurry, limited time offer!',
    name: 'Foodie Delights',
    place: 'Campus Canteen',
    image: 'https://example.com/image.jpg',
    date: '2024-04-01',
    validTill: '2024-04-15',
    status: false,
  },
  {
    id: '2',
    title: 'Weekend Special',
    description: 'Enjoy our special weekend menu with exciting new dishes!',
    name: 'Campus Cafe',
    place: 'Block 11',
    image: 'https://example.com/image2.jpg',
    date: '2024-03-28',
    validTill: '2024-04-05',
    status: true,
  },
  {
    id: '3',
    title: 'Student Discount',
    description: 'Flash your student ID and get 20% off on all items!',
    name: 'Books & Beyond',
    place: 'Library',
    image: 'https://example.com/image3.jpg',
    date: '2024-03-25',
    validTill: '2024-04-30',
    status: true,
  },
  {
    id: '4',
    title: 'Grand Opening',
    description:
      'Join us for the grand opening of our new store and enjoy exclusive discounts!',
    name: 'Fashion Fusion',
    place: 'Block 5',
    image: 'https://example.com/image4.jpg',
    date: '2024-04-10',
    validTill: '2024-04-20',
    status: true,
  },
];

const Example = ({item, viewData, setDataState}) => {
  return (
    <View style={styles.container} className="relative opacity-90">
      <View style={styles.content} className="">
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description} className="ads">
          {item.description}
        </Text>
      </View>
      <View
        style={styles.dateContainer}
        className="fixed bottom-0 left-0 items-center justify-between gap-4 p-2 ">
        <Text style={styles.date} className="text-sm">
          {item.date}
        </Text>
        <TouchableOpacity
          onPress={() => {
            console.log('heelp');
            setDataState(item);
          }}>
          <Text className="px-3 py-1 text-white rounded-md opacity-75 cursor-pointer bg-bgPrimary ">
            View
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
function adBox({item}) {
  return (
    <View className="">
      <Text className="text-textLight">
        {item.id}
        {item.title}
      </Text>
    </View>
  );
}
function AdPanel({viewData, setDataState}) {
  const [numColumns, setNumColumns] = useState(2);
  return (
    <SafeAreaView className="px-3 py-3">
      <FlatList
        data={ads}
        renderItem={props => Example({...props, viewData, setDataState})}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumns={numColumns}
        ItemSeparatorComponent={() => <View style={{width: 10}} />} // Change the height as needed
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '48%',
    marginLeft: 4,
    maxWidth: '50%',
    borderRadius: 8,
    overflow: 'hidden',
    borderColor: '#E2E8F0',
    borderWidth: 1,
    marginVertical: 4,
    backgroundColor: '#F7FAFC',
  },

  content: {
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 0,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    color: '#718096',
    fontWeight: '400',
  },
});

export default function MyAds() {
  const [viewData, setViewData] = useState(null);

  return (
    // <InputModal></InputModal>
    <View>

    <ScrollView className="max-h-[100vh] py-13 overflow-y-scroll bg-bgLessDark text-textLight">
      <OptionText title="On the Air"></OptionText>
      {/* // live ad pannel  */}
      <AdPanel
        viewData={viewData}
        setDataState={payload => setViewData(payload)}></AdPanel>
      <OptionText title="Expired"></OptionText>
      {/* expired add panel */}

      <AdPanel></AdPanel>
      <PlusButtonModal></PlusButtonModal>
      <ViewModal
        data={viewData}
        setDataState={payload => setViewData(payload)}></ViewModal>
    </ScrollView>
    </View>
  );
}

function Viewer({data , closeFxn}) {
 
const url = 'data:image/jpeg;base64,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'
  return (
    <ScrollView className=" text-textLight bg-bgLessDark">
      {/* <NavBar state={false}></NavBar> */}
      <View className="w-[90%] flex  item-center mx-auto mt-10 overflow-hidden">
        <Text className="text-center opacity-75 font-[400] text-xl text-textLight">
          Advertisement Details
          {console.log(data)}
        </Text>
        <View className="flex flex-row gap-2 mt-6 align-center">
          <Text className="  opacity-75 capitalize text-bgPrimary text-[19px] font-[500]">
            Title :
          </Text>
          <Text className=" text-[19px]  capitalize opacity-75 text-textLight font-[300]">
            {data.title}
          </Text>
        </View>
        <View className="flex flex-row gap-2 mt-6 align-center">
          <Text className=" capitalize opacity-75 text-bgPrimary text-[19px] font-[500]">
            by :
          </Text>
          <Text className=" text-[19px] capitalize opacity-75 text-textLight font-[300]">
            {data.name}
          </Text>
        </View>
        <View className="flex flex-row gap-2 mt-6 align-center">
          <Text className=" capitalize opacity-75 text-bgPrimary text-[19px] font-[500]">
            Description :
          </Text>
          <Text className=" text-[12px]  capitalize opacity-75 text-textLight font-[300]">
            {data.description}
          </Text>
        </View>
        <View className="flex gap-2 mt-6 align-center">
          <Text className=" capitalize opacity-75 text-bgPrimary text-[19px] font-[500]">
            Image :
          </Text>
          <View>
            <Image source={{uri: url}} style={{width: "100%", height: 300} } />
          </View>
        </View>
        <View className="flex flex-row gap-2 mt-6 align-center">
          <Text className=" capitalize opacity-75 text-bgPrimary text-[18px] font-[500]">
            Created On :
          </Text>
          <Text className=" text-[19px]  capitalize opacity-75 text-textLight font-[300]">
            {data.date}
          </Text>
        </View>
        <TouchableOpacity onPress={()=>{
        closeFxn()
      }} className='mb-[400px]  mt-12 rounded-md bg-[#efebeb46]  ' >
        <Text className='p-4 text-center text-white'>Back</Text>
      </TouchableOpacity>
      </View>

    </ScrollView>
  );
}
function ViewModal({data, setDataState}) {
  return (
    data && (
      <View className="absolute p-4 top-2 right-5">
        <Modal
          animationType="slide"
          visible={data != null ? true : false}
          onRequestClose={() => {
            setDataState(null);
          }}>
          <Viewer
            data={data}
            closeFxn={() => {
              setDataState(null);
            }}></Viewer>
        </Modal>
      </View>
    )
  );
}
