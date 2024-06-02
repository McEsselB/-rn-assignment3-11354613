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

