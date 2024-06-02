import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import TaskCard from '../components/TaskCard';
import SearchBar from '../components/SearchBar';
import globalStyles from '../styles/globalStyles';

const categories = [
  { id: '1', title: 'Exercise', tasks: 12, image: require('../assets/images/exercise.jpg') },
  { id: '2', title: 'Study', tasks: 12, image: require('../assets/images/study.jpg') },
  { id: '2', title: 'Code', tasks: 12, image: require('../assets/images/code.png') },
  { id: '2', title: 'Cook', tasks: 12, image: require('../assets/images/cook.jpeg') },
  { id: '7', title: 'Travel', tasks: 3, image: require('../assets/images/travel.jpeg') },
  { id: '8', title: 'Music', tasks: 9, image: require('../assets/images/music.jpeg') },
  { id: '2', title: 'Write', tasks: 12, image: require('../assets/images/write.jpeg') },
  { id: '2', title: 'Photography', tasks: 12, image: require('../assets/images/photography.jpeg') },
];


const tasks = [
  { id: '1', title: 'Mobile App Development' },
  { id: '2', title: 'Web Development' },
  { id: '3', title: 'Push Ups' },
  { id: '4', title: 'Yoga' },
  { id: '5', title: 'Grocery Shopping' },
  { id: '6', title: 'Client Meeting' },
  { id: '7', title: 'Email Marketing' },
  { id: '8', title: 'Blog Writing' },
  { id: '9', title: 'Online Course' },
  { id: '10', title: 'Project Planning' },
  { id: '11', title: 'Team Collaboration' },
  { id: '12', title: 'Budget Review' },
  { id: '13', title: 'Code Review' },
  { id: '14', title: 'Graphic Design' },
  { id: '15', title: 'Product Testing' },


];

export default function HomeScreen() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.headerText}>Hello, Devs</Text>
            <Text style={styles.subHeaderText}>14 tasks today</Text>
          </View>
          <Image source={require('../assets/profile.jpg')} style={styles.profileImage} />
        </View>
        <View style={styles.searchContainer}>
          <SearchBar />
         
        </View>
        <Text style={styles.sectionTitle}>Categories</Text>
        <FlatList
          horizontal
          data={categories}
          renderItem={({ item }) => <CategoryCard category={item} />}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.sectionTitle}>Ongoing Task</Text>
        {tasks.map(task => <TaskCard key={task.id} task={task} />)}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    width: 354,
    height: 52,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 14,
    color: 'black',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 190
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20, 
    marginBottom: 10,
    marginLeft: -10,
    marginRight: -20,

  },
  sectionTitle: {
    fontSize: 22,
    paddingHorizontal: 20, 
    marginBottom: 8,
    fontWeight: '400'
  },
});


