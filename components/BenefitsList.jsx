import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const BenefitsList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <View style={styles.listItem}>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.itemText}>Proximity Marketing</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.itemText}>Indoor Navigation</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.itemText}>Customer Engagement</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.itemText}>Data Collection</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.itemText}>Record User Interactions and Engage</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop:12,

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  list: {
    marginLeft: 16,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  dot: {
    fontSize: 29,
    marginRight: 8,
    color: '#FA7629', // Set the color of the dots here
  },
  itemText: {
    fontSize: 20,
    color:"#F1F2EC",
    opacity:0.6,
  },
});

export default BenefitsList;
