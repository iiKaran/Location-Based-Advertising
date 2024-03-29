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
import Viewer from '../Components/Viewer';
import { setViewData } from '../Redux/Slices/HomeSlice';
import {useSelector,useDispatch} from 'react-redux';
export default function ViewModal() {
  const dispatch= useDispatch();
  const {viewData} = useSelector(state => state.home);
    return (
      viewData  && (
        <View className="absolute p-4 top-2 right-5">
          <Modal
            animationType="slide"
            visible={viewData != null ? true : false}
            onRequestClose={() => {
              dispatch(setViewData(null));
            }}>
            <Viewer></Viewer>
          </Modal>
        </View>
      )
    );
  }