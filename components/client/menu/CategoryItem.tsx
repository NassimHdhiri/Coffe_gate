import React from 'react'
import { Image,StyleSheet,TouchableOpacity,View,ScrollView,ActivityIndicator } from "react-native"
import { Text } from "react-native-elements"
import { useAssets } from 'expo-asset'



const CategoryItem=()=>{

    const [assets, error] = useAssets([
        require('../../../assets/foods/coffee/cafe_au_lait.png'),
        require('../../../assets/images/Pizza.png'),
        require('../../../assets/images/Plat.png'),
        require('../../../assets/images/Chicha.png'),
        require('../../../assets/images/Breakfast.png')
      ]);

      if (!assets) {
        return <ActivityIndicator size="large" color="#0000ff" />; // Show a loading spinner while assets are loading
      }
    
      if (error) {
        return <Text>Error loading assets: {error.message}</Text>; // More detailed error message
      }

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


    return(
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
                  
        
        <TouchableOpacity key={index} style={styles.categoryItem}>
                    <View 
                      style={{
                        borderRadius: 18,
                        backgroundColor: 'white',
                        width: 46,
                        height: 40, // Make the container square for better image fit
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowColor: '#F1EFEF', 
                        shadowOpacity: 0.25, // Adjust shadow opacity
                        shadowRadius: 4, // Adjust shadow radius for better effect
                        shadowOffset: { width: 0, height: 2 }, // Correct shadow offset
                        elevation: 3, // Android-specific shadow
                      }}>
                        <Image source={assets[index]} style={{ width: 30, height: 30  }} />
                    </View>
                    <Text style={styles.categoryText}>{category.name}</Text>
                </TouchableOpacity>
                ))}
        </ScrollView>
    )
}

export default CategoryItem;

const styles=StyleSheet.create(
    {
        categorySelected:{
          backgroundColor:'orange',
          flex:1,
          flexDirection:'row',
          justifyContent:"space-between",
          alignItems:'center',
          gap:10, 
        },
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

        // selected category
        borderColor:'orange',
        borderBottomWidth:2,
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
    }
)