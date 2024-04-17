import { View, Text , StyleSheet, Image,TouchableOpacity} from 'react-native'
import React from 'react'
import {useSelector} from 'react-redux';


function handleAction(){
    console.log("done")
}
function formatDate(d) {
  const date = new Date(d);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  return `${day}/${month}/${year}`;
 }
export default function UserAdCard({data}) {
  return (
    <View className='justify-center   mx-auto w-[90%]  bg-bgLessDark align-center'>
   <View style={styles.card}>
      <Image source={{ uri: data?.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{data?.title}</Text>
        <Text style={styles.description}>{data?.description}</Text>
        <Text style={styles.info}>Offered by: {data?.name}</Text>
        <Text style={styles.info}>Place: {data?.place}</Text>
        <Text style={styles.info}>Date: {formatDate(data?.date)}</Text>
        <Text style={styles.info}>Valid Till: {formatDate(data?.validTill)}</Text>
        <Text style={styles.info}>Status: {data?.status ? 'Active' : 'Inactive'}</Text>
        <TouchableOpacity style={styles.button} className='bg-bgPrimary' onPress={handleAction}>
          <Text style={styles.buttonText}>Call to Action</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
    )}
    const styles = StyleSheet.create({
      card: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 16,
        elevation: 3,
      },
      image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
      },
      content: {
        padding: 16,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      description: {
        marginBottom: 8,
      },
      info: {
        marginBottom: 4,
        fontSize: 12,
        color: '#666',
      },
      button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#333',
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
    });
    