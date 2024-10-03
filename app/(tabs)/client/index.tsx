import React, { useRef, useState } from 'react';
import {DrawerLayoutAndroid,StyleSheet,TouchableOpacity,ImageBackground} from 'react-native';
import { Text, SearchBar, Header, Avatar, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native';
import navigationView from './Drawer';

// Import Local assets (Images)
import { useAssets } from 'expo-asset';

import { Image,View, ActivityIndicator } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { Link,router } from 'expo-router';
import MenuItemsCard from './MenuItemsCard';
import CategoryItem from './CategoryItem'
import SearchTopBar from './SearchBar';
import EventCard from './EventCard';
import BottomBar from './BottomBar';


const ClientPage = () => {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const [drawerPosition, setDrawerPosition] = useState<'left' | 'right'>('left');




  const backgroundImage = { uri: 'https://i.pinimg.com/564x/66/69/aa/6669aa09bc7baabaf050f80c86416806.jpg' }; // Replace with your image URL

  const [layout, setLayout] = useState(null);

  // Function to handle layout changes
  const handleLayout = (event) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    console.log(`Position - x: ${x}, y: ${y}, width: ${width}, height: ${height}`);
    setLayout({ x, y, width, height });
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
        containerStyle={{ height:100, backgroundColor: 'transparent' }}
        placement="left"
        leftComponent={
        <View style={{flex:1,backgroundColor:'orange',borderRadius:10,width:40,height:40,justifyContent:'center',alignContent:'center'}} >
          <Icon 
            size={30}
            name="menu" 
            type="material" // Correct type for a material icon
            // color="#fff"    // Change this to the color you want
            onPress={() => console.log('Menu pressed')} // Example action for icon
          />
        </View>
  }
  rightComponent={
    <Avatar
      size={40}
      avatarStyle={{borderRadius:10}}
      source={{
        uri: 'https://mighty.tools/mockmind-api/content/human/5.jpg',
      }}
    />
  }
/>

        
        {/* Search Bar */}
          <SearchTopBar/>


        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
            <View style={styles.containerBody}>

            {/* Event Card */}
            <EventCard/>

            {/* Categories */}
            <View style={styles.categoryCard} onLayout={handleLayout}>
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
        <BottomBar/>
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
  eventLabel: {
    fontSize: 14, // Font size for the label
    fontWeight: 'bold', // Bold text
    color: '#333', // Color for the label
    marginBottom: 8, // Margin below the label
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
  
  headerTitle: {
    fontFamily: 'Nunito-Regular',
    fontSize: 20,
    fontWeight: '700',
    padding: 3,
  },
  scrollContainer: {
    paddingBottom:  65,
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
