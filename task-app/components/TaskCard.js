import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TaskCard({ task }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{task.title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    padding: 50,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
  },
});
