import {View, Text, FlatList, StyleSheet,ScrollView, Touchable, TouchableOpacity,Modal} from 'react-native';
import React, {useState} from 'react'; 
import InputModal from './InputModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlusButtonModal from './PlusButtonModal';
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
      <View style={styles.content} className=''>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description} className='ads'>{item.description}</Text>
      </View>
      <View style={styles.dateContainer} className="fixed bottom-0 left-0 items-center justify-between gap-4 p-2 ">
          <Text style={styles.date} className="text-sm">
            {item.date}
          </Text>
          <TouchableOpacity onPress={()=>{
            console.log("heelp")
           setDataState(item)}
          }>
            <Text className='px-3 py-1 text-white rounded-md opacity-75 cursor-pointer bg-bgPrimary '>View</Text>
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
function AdPanel({viewData,setDataState}) {
  const [numColumns, setNumColumns] = useState(2);
  return (
    <SafeAreaView  className="px-3 py-3">
      <FlatList
        data={ads}
        renderItem={(props)=>Example({...props ,viewData,setDataState})}
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
  const[viewData, setViewData] = useState(null);

  return (
    // <InputModal></InputModal>
    <ScrollView className="max-h-[100vh] py-13 overflow-y-scroll bg-bgLessDark text-textLight">
      <OptionText title="On the Air"></OptionText>
      {/* // live ad pannel  */}
      <AdPanel viewData={viewData} setDataState={(payload)=>setViewData(payload)} ></AdPanel>
      <OptionText title="Expired"></OptionText>
      {/* expired add panel */}
       
      <AdPanel></AdPanel>
      <PlusButtonModal></PlusButtonModal>
      <ViewModal data={viewData} setDataState={(payload)=>setViewData(payload)}></ViewModal>
    </ScrollView>
  );
}


function Viewer(){
  return <View>
      <Text> This is the modal</Text>
  </View>
}
 function ViewModal({data,setDataState}) {
  return (
      data && <View  className='absolute p-4 top-2 right-5'>
        <Modal
          animationType="slide"
          visible={data!= null ?true:false}
          onRequestClose={()=>{
            setDataState(null);
          }}
        >
          <Viewer data = {data} closeFxn = {()=>{
            setDataState(null);
          }}></Viewer>
        </Modal>
       
      </View>
    );
}