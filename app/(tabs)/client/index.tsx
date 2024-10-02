import React, { useRef, useState } from 'react';
import {
  DrawerLayoutAndroid,
  StyleSheet,
  // View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { Text, SearchBar, Header, Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native';
import navigationView from './Drawer';

// Import Local assets (Images)
import { useAssets } from 'expo-asset';

import { Image,View, ActivityIndicator } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { Link,router } from 'expo-router';
import MenuItemsCard from './MenuItemsCard';
import CategoryItem from './CategoryItem'

const ClientPage = () => {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const [drawerPosition, setDrawerPosition] = useState<'left' | 'right'>('left');
  const [search, setSearch] = useState('');




  const backgroundImage = { uri: 'https://i.pinimg.com/564x/66/69/aa/6669aa09bc7baabaf050f80c86416806.jpg' }; // Replace with your image URL

 
  // Update search input
  const updateSearch = (searchValue) => {
    setSearch(searchValue);
  };

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
      <View style={styles.container}>
        {/* Header */}
        <Header
          containerStyle={{ height: 140 ,backgroundColor:'white'}}
          
          placement="left"
          leftComponent={
            <View>
              <Text style={styles.headerTitle}>Good Morning</Text>
              <Text style={styles.headerTitle}>Mohamed Nassim</Text>
            </View>
          }
          rightComponent={
            <Avatar
              size={50}
              rounded
              source={{
                uri: 'https://mighty.tools/mockmind-api/content/human/5.jpg',
              }}
            />
          }
        />
        {/* Search Bar */}
        <SearchBar
          placeholder="Search your meals"
          onChangeText={updateSearch} // Update search state on text change
          value={search} // Controlled component
          containerStyle={styles.searchBarContainer} // Custom container style
          inputContainerStyle={styles.searchBarInput} // Custom input style
          searchIcon={{ size: 24 }} // Custom search icon size
        />
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
            <View style={styles.containerBody}>

            {/* Event Card */}
            <View style={styles.eventCard}>
              <Text style={styles.eventLabel}>Events</Text>
              <Text style={styles.eventTitle}>Event Title</Text>
              <Text style={styles.eventDescription}>Event Description</Text>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>View Details</Text>
              </TouchableOpacity>
            </View>

            {/* Categories */}
            <View style={styles.categoryCard}>
              <Text style={styles.eventLabel}>Categories</Text>
              <CategoryItem/>
            </View>

            {/* Category Detail View */}
            <View style={styles.categoryCard}>
              <Text style={styles.categoryDetailTitle}>Category Detail View</Text>
              
              {/* Food container */}
                <MenuItemsCard/>
              
            </View>


            
          </View>
        </ScrollView>
      </View>
    </DrawerLayoutAndroid>
  );
};

export default ClientPage;

const styles = StyleSheet.create({
    categoryDetailTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      
    categoryContainer: {
        marginTop: 20, // Adds some space above the category section
        width: '100%', // Takes up full width
        paddingHorizontal: 16, // Horizontal padding for the container
        alignItems: 'flex-start', // Aligns items to the start
    },  
  categoryItem: {
    
    flex:1,
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'center',
    gap:10,
    backgroundColor: 'black', // Background color for category items

    // backgroundColor: '#FF9130', // Background color for category items
    borderRadius: 20, // Rounded corners
    paddingVertical: 10, // Vertical padding
    paddingHorizontal: 16, // Horizontal padding
    marginRight: 12, // Space between items
    marginBottom:10,
    elevation:5,
    // padding:5
  },
  categoryText: {
    color: '#fff', 
    fontWeight: '600', 

  },
  categoryCard:{

    // height: 150,
    width: '100%',
    // backgroundColor: '#fff', // Background color of the card
    // borderRadius: 8, // Rounded corners
    padding: 16, // Padding inside the card
    // marginVertical: 8, // Vertical margin between cards
    // elevation: 2, // Shadow effect for Android
    // shadowColor: '#000', // Shadow color for iOS
    // shadowOffset: { width: 0, height: 1 }, // Shadow offset for iOS
    // shadowOpacity: 0.1, // Shadow opacity for iOS
    // shadowRadius: 2, // Shadow radius for iOS
  },
  eventCard: {
    height: 150,
    width: '95%',
    backgroundColor: '#fff', // Background color of the card
    borderRadius: 8, // Rounded corners
    padding: 16, // Padding inside the card
    marginVertical: 8, // Vertical margin between cards
    elevation: 2, // Shadow effect for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 1 }, // Shadow offset for iOS
    shadowOpacity: 0.1, // Shadow opacity for iOS
    shadowRadius: 2, // Shadow radius for iOS
  },

  eventLabel: {
    fontSize: 14, // Font size for the label
    fontWeight: 'bold', // Bold text
    color: '#333', // Color for the label
    marginBottom: 8, // Margin below the label
  },
  eventTitle: {
    fontSize: 18, // Font size for the title
    fontWeight: '600', // Semi-bold text
    color: '#000', // Color for the title
    marginBottom: 4, // Margin below the title
    // marginBottom: 4, // Margin below the title
  },
  eventDescription: {
    fontSize: 14, // Font size for the description
    color: '#666', // Color for the description
    marginBottom: 12, // Margin below the description
  },
  button: {
    backgroundColor: '#007bff', // Button background color
    padding: 10, // Padding inside the button
    borderRadius: 5, // Rounded corners for the button
    alignItems: 'center', // Center the button text
  },
  buttonText: {
    color: '#fff', // Button text color
    fontWeight: 'bold', // Bold text
  },
  searchBarContainer: {
    width: '100%', // Make the search bar container take the full width
    backgroundColor: '#ecf0f1', // Background color for the container
    borderWidth: 0,
    borderRadius: 3,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  searchBarInput: {
    backgroundColor: '#fff', // Background color for the input
  },
  headerTitle: {
    fontFamily: 'Nunito-Regular',
    fontSize: 20,
    fontWeight: '700',
    padding: 3,
  },
  scrollContainer: {
    
    flexGrow: 1, // This allows the ScrollView to grow if content exceeds its height
  },
  containerBody: {
    height:'100%',
    // width:'95%',
    // backgroundColor:'red',
    // padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between', // Changed from space-evenly to flex-start
  },
  container: {
    padding:5,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 50,
    flex: 1, // Ensure the container takes up available space
  },
  link: {
    width: '100%',
  },
  listItem: {
    width: '100%',
    paddingVertical: 10,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
    flex: 1,
    width: '100%',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});
