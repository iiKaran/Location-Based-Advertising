const BASE_URL = "https://adverse-backend.onrender.com/api/v1"

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/sendOtp",
  SIGNUP_API: BASE_URL + "/signup",
  LOGIN_API: BASE_URL + "/login",
  ADD_AD_API: BASE_URL + "/createAd",
  DELETE_AD_API: BASE_URL + "/deleteAd",
  GET_ALL_ADS_API: BASE_URL + "/getAllAdsByUser",
  GET_ADS : BASE_URL+"/getAds"
}
