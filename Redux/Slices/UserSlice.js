import {createSlice} from '@reduxjs/toolkit';
const initialState = {
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

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToAdds: (state, action) => {
      state.latestAds = [...state.latestAds, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {addToAdds} = userSlice.actions;
export default userSlice.reducer;
