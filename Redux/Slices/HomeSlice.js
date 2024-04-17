import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  ads:[],
  userAds:[],
  inputOpen: false , 
  viewData: null
}
export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    addToAd: (state, action) => {
      state.ads = [...state.ads, action.payload]
    },
    addToUserAds: (state, action) => {
      state.userAds = [...state.userAds, action.payload]
    },
    setInputModal: (state, action) => {
       state.inputOpen= action.payload
    },
    setViewData:(state , action)=>{
        state.viewData  = action.payload
    },
   setAdsData: (state, action) => {
      state.ads = action.payload
    }, 
    setUserAdsData: (state, action) => {
      state.userAds = action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addToAd, setInputModal , setViewData,setAdsData, addToUserAds,setUserAdsData } = homeSlice.actions
export default homeSlice.reducer