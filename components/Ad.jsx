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
import {useSelector, useDispatch} from 'react-redux';
import { setViewData } from '../Redux/Slices/HomeSlice';
export default function Example({item,data}){
 const dispatch = useDispatch(); 
  return (
    <View style={styles.container} className="a opacity-90">
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
            dispatch(setViewData(item))
          }}>
          <Text className="px-3 py-1 text-white rounded-md opacity-75 cursor-pointer bg-bgPrimary ">
            View
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: '48%',
    // marginLeft: 4,
    // maxWidth: '50%',
    // borderRadius: 8,
    // overflow: 'hidden',
    // borderColor: '#E2E8F0',
    // borderWidth: 1,
    // marginVertical: 4,
    // backgroundColor: '#F7FAFC',
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
