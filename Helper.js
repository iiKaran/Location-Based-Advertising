import AsyncStorage from '@react-native-async-storage/async-storage';
export const setData = async (key, value)=>{
   try{
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key,jsonValue);
   }
   catch(err)
   {
    console.log("while saving in storage", err); 
    return ; 
   }
}
export const getData = async (key)=>{
    try{
        console.log("key is ", key)
        const jsonValue = await AsyncStorage.getItem(key);
        console.log(jsonValue)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    }
    catch(err)
    {
     console.log("while retrieving from  storage", err); 
     return null ; 
    }
 }