import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to fetch user info from AsyncStorage
async function getUser() {
  const data = await AsyncStorage.getItem('info');
  return data ? JSON.parse(data) : null;
}
// Define an initial state without directly calling `getUser`
const initialState = {
  info: null, // Set to null initially
  latestAds: [
    {
      id: '1',
      title: 'Mega Offer',
      description:
        'Get 50% off on all orders above $50. Hurry, limited time offer!',
      name: 'Foodie Delights',
      place: 'Campus Canteen',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ-ypIjSkxwbKEbVzNAUlu7Jitz5OINfstBg&usqp=CAU',
      date: '2024-04-01',
      validTill: '2024-04-15',
      status: false,
    },
  ],
  status: false,
};

// Create the slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToAdds: (state, action) => {
      state.latestAds = [...state.latestAds, action.payload];
    },
    updateUser: (state, action) => {
      state.info = action.payload;
      AsyncStorage.setItem('info', JSON.stringify(action.payload));
    },
    // Add a reducer to handle setting user info fetched from AsyncStorage
    setUserFromStorage: (state, action) => {
      state.info = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToAdds, updateUser, setUserFromStorage } = userSlice.actions;

// Export an async thunk to fetch user info from AsyncStorage and set it in the store
export const fetchUserFromStorage = () => async (dispatch) => {
  const userInfo = await getUser();
  dispatch(setUserFromStorage(userInfo));
};

// Export the reducer
export default userSlice.reducer;
