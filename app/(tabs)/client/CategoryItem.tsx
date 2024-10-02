import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, ScrollView, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-elements';
import { useAssets } from 'expo-asset'; // Import hook for managing assets in Expo

const CategoryItem = () => {
  // Load images as assets
  const [assets, error] = useAssets([
    require('../../../assets/foods/coffee/cafe_au_lait.png'),
    require('../../../assets/images/Pizza.png'),
    require('../../../assets/images/Plat.png'),
    require('../../../assets/images/Chicha.png'),
    require('../../../assets/images/Breakfast.png'),
  ]);

  // Show loading indicator if assets haven't loaded yet
  if (!assets) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  // Show error message if there's an issue loading assets
  if (error) {
    return <Text>Error loading assets: {error.message}</Text>;
  }

  // Define the categories to be displayed
  const categories = [
    { name: 'Coffee' },
    { name: 'Pizza' },
    { name: 'Plat' },
    { name: 'Chicha' },
    { name: 'Breakfast' },
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} style={styles.categoryItem}>
          <View
            style={styles.imageContainer} // Applied reusable styles for image container
          >
            <Image source={assets[index]} style={styles.image} /> {/* Display image */}
          </View>
          <Text style={styles.categoryText}>{category.name}</Text> {/* Display category name */}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoryItem;

// Stylesheet for the component
const styles = StyleSheet.create({
  categoryItem: {
    flex: 1,
    flexDirection: 'row', // Align image and text horizontally
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'black', // Background color for category items
    borderRadius: 20, // Rounded corners
    paddingVertical: 10, // Vertical padding inside the category item
    paddingHorizontal: 16, // Horizontal padding inside the category item
    marginRight: 12, // Margin between items
    marginBottom: 10, // Margin at the bottom of each item
    elevation: 5, // Shadow effect for Android
  },
  imageContainer: {
    borderRadius: 18,
    backgroundColor: 'white', // Background color of image container
    width: 46,
    height: 40, // Set width and height for the container
    justifyContent: 'center', // Center the image within the container
    alignItems: 'center',
    shadowColor: '#F1EFEF', // Light gray shadow color
    shadowOpacity: 0.25, // Shadow opacity for iOS
    shadowRadius: 4, // Radius of shadow blur
    shadowOffset: { width: 0, height: 2 }, // Offset of shadow
    elevation: 3, // Elevation for Android shadow
  },
  image: {
    width: 30,
    height: 30, // Size of the images within the container
  },
  categoryText: {
    color: '#fff', // Text color
    fontWeight: '600', // Bold text
  },
});
