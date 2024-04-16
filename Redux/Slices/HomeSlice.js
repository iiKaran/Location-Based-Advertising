import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  ads: [
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
      description: 'Flash your student ID and get 20% off on all ads!',
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
  ],
  inputOpen: false , 
  viewData: null
}
export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    addToItem: (state, action) => {
      state.ads = [...state.ads, action.payload]
    },
    setInputModal: (state, action) => {
       state.inputOpen= action.payload
    },
    setViewData:(state , action)=>{
        state.viewData  = action.payload
    },
   setAdsData: (state, action) => {
      state.ads = action.payload
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { addToItem, setInputModal , setViewData,setAdsData } = homeSlice.actions
export default homeSlice.reducer