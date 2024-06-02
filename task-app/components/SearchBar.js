import React from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function SearchBar() {
  return (
    <View style={styles.searchFilterContainer}>
      <View style={styles.searchContainer}>
        <Image source={require('../assets/search.png')} style={styles.searchIcon} />
        <TextInput style={styles.search} placeholder="Search" />
      </View>
      <Image source={require('../assets/bxslider.jpg')} style={styles.filterIcon} />
    </View>
  );
}

const styles = StyleSheet.create({

  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchFilterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  searchIcon: {
    width: 22,
    height: 20,
    marginHorizontal: 5,
    color: 'black'
  },
  search: {
    flex: 1,
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: 'Lato'
  },
  filterIcon: {
    width: 45,
    height: 45,
    marginLeft: 10,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  categoriesList: {
    paddingBottom: 10,
  },
});


