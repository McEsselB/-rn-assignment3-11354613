import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function CategoryCard({ category }) {
  return (
    <View style={styles.card}>
      <View style={styles.textcard}>
        <Text style={styles.title}>{category.title}</Text>
       <Text style={styles.tasks}>{category.tasks} Tasks</Text>
      </View>
      
      <Image source={category.image} style={styles.image} />
      
     
    </View>
  );
}



const styles = StyleSheet.create({
  card: {
    marginRight: 20,
    padding: 10,
    backgroundColor: '#fff',
    height: 192,
    width: 186,
    marginBottom: 30
  },
  textcard: {
   
  },

  image: { 
    width: 151,
    height: 132,
    marginBottom: 10,
  },
 title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  tasks: {
    fontSize: 14,
    color: 'black',
  },
 
});
