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
import {useSelector, useDispatch} from 'react-redux';
import {setViewData} from '../Redux/Slices/HomeSlice';
import {useState} from 'react';
import Ad from './Ad';

function example({item, data}) {
  return (
    <View className='relative w-full' style={styles.container}>
      <Ad item={item} data={data}></Ad>
    </View>
  );
}
function setView(data) {
  dispatch(setViewData());
}
export default function AdPanel() {
  const {ads} = useSelector(state => state.home);
  const [numColumns, setNumColumns] = useState(2);
  const dispatch = useDispatch();
  return (
    <SafeAreaView className="px-3 py-3">
      <FlatList
        data={ads}
        renderItem={example}
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
  }
});