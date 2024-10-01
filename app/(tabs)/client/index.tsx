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


const ClientPage = () => {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const [drawerPosition, setDrawerPosition] = useState<'left' | 'right'>('left');
  const [search, setSearch] = useState('');

  // Path of Local Images from assets folder
  const [assets, error] = useAssets([
    require('../../../assets/images/Coffee.png'),
    require('../../../assets/images/Pizza.png'),
    require('../../../assets/images/Plat.png'),
    require('../../../assets/images/Chicha.png'),
    require('../../../assets/images/Breakfast.png')
  ]);
  
  if (!assets) {
    return <ActivityIndicator size="large" color="#0000ff" />; // Show a loading spinner while assets are loading
  }
  
  if (error) {
    return <Text>Error loading assets!</Text>;
  }


  const backgroundImage = { uri: 'https://i.pinimg.com/564x/66/69/aa/6669aa09bc7baabaf050f80c86416806.jpg' }; // Replace with your image URL

  // Categories
  const categories = [
    {
      name:"Coffee",
    },
    {
      name:"Pizza",
    },
    {
      name:"Plat",
    },
    {
      name:"Chicha",
    },
    {
      name:"Breakfast",
    },
  ]

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
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categories.map((category, index) => (
                  <TouchableOpacity key={index} style={styles.categoryItem}>
                    <Image source={assets[index]}   style={{width: 30, height: 30}} />
                    <Text style={styles.categoryText}>{category.name}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            {/* Category Detail View */}
            <View style={styles.categoryCard}>
              <Text style={styles.categoryDetailTitle}>Category Detail View</Text>
              {/* Food container */}
              <View style={styles.foodContainer}>
                {/* Food card */}
                {[...Array(6)].map((_, index) => (
                  <ImageBackground
                  key={index}
                  source={backgroundImage} // Set the background image
                  style={styles.foodCard} // Use the same style as before
                  imageStyle={styles.foodCardImage} // Optional: Style the image to fit
                >
                  <TouchableOpacity style={styles.foodCardTouchable}>
                    <Text style={styles.foodCardText}>Food Item {index + 1}</Text>
                  </TouchableOpacity>
                </ImageBackground>
                ))}
              </View>
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
      foodCardTouchable: {
        flex: 1, // Make the TouchableOpacity fill the ImageBackground
        justifyContent: 'center',
        alignItems: 'center',
      },
      foodCardImage: {
        width:'100%',
        borderRadius: 10, // Optional: Round the corners of the background image
      },
    foodCardText: {
        fontSize: 16,
        fontWeight: '500',
      },
    foodCard:{
        width:"45%",
        height:180,
        backgroundColor:'#F7EED3',
        borderRadius:20,
        elevation: 2, // Shadow effect for Android
        shadowColor: '#000', // Shadow color for iOS
        shadowOffset: { width: 0, height: 1 }, // Shadow offset for iOS
        shadowOpacity: 0.1, // Shadow opacity for iOS
        shadowRadius: 2, // Shadow radius for iOS   
    },
    foodContainer:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        gap:20,
        alignItems:'center',
        justifyContent:'center'
    },
    categoryContainer: {
        marginTop: 20, // Adds some space above the category section
        width: '100%', // Takes up full width
        paddingHorizontal: 16, // Horizontal padding for the container
        alignItems: 'flex-start', // Aligns items to the start
    },  
  categoryItem: {
    flex:1,
    justifyContent:"space-evenly",
    alignItems:'center',
    height:80,
    width:75,
    backgroundColor: '#007bff', // Background color for category items
    borderRadius: 20, // Rounded corners
    paddingVertical: 10, // Vertical padding
    paddingHorizontal: 16, // Horizontal padding
    marginRight: 12, // Space between items
  },
  categoryText: {
    color: '#fff', // Text color for category items
    fontWeight: '600', // Semi-bold text
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
    padding:20,
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
