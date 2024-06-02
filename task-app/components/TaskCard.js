import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TaskCard({ task }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{task.title}</Text>
    </View>
  );
}
