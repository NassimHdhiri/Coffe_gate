import { useAssets } from "expo-asset";
import { router } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, View, Text, ActivityIndicator, Image, TouchableOpacity } from "react-native";
import { Header, Icon } from 'react-native-elements';
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'; // Ensure correct import
import ButtonOrderNow from "../../../components/client/single_menu_item/ButtonOrderNow";

const Cart = () => {
  const [assets, error] = useAssets([
    require('../../../assets/foods/pizza/pizza-margherita.png')
  ]);

  if (!assets) {
    return <ActivityIndicator size="large" color="#0000ff" />; // Show a loading spinner while assets are loading
  }

  if (error) {
    return <Text>Error loading assets: {error.message}</Text>; // More detailed error message
  }

  // Sample data for FlatList
  const cartItems = [
    { id: '1', name: 'Pizza Margherita'      , description: '$ 13.99 x 2', image: assets[0] },
    { id: '2', name: 'Pizza pepperoni'       , description: '$ 13.99 x 2', image: assets[0] },
    { id: '3', name: 'Pizza napolitaine'     , description: '$ 13.99 x 2', image: assets[0] },
    { id: '4', name: 'Pizza Marinara'        , description: '$ 13.99 x 2', image: assets[0] },
    { id: '5', name: 'Pizza Capricciosa'     , description: '$ 13.99 x 2', image: assets[0] },
    { id: '6', name: 'Pizza Quattro Formaggi', description: '$ 13.99 x 2', image: assets[0] },
    { id: '7', name: 'Pizza Quattro Stagioni', description: '$ 13.99 x 2', image: assets[0] },
  ];

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Header
        containerStyle={styles.headerStyle} // Custom header style
        leftComponent={
          <Icon 
            onPress={() => router.push('client/index')}
            name="chevron-left"
            type="entypo"
            size={24}  // Adjust size as needed
            color="black"
            style={styles.styleLeftIconHeader}
          />
        }
        rightComponent={
          <Icon
            name="delete-outline"
            onPress={() => console.log('delete order')}
            size={24}
            color="black"
          />
        }
      />

      {/* Body */}
      <View style={styles.bodyContainer}>
        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>My</Text>
          <Text style={styles.subtitle}>Cart List</Text>
        </View>

        {/* Scroll List */}
        <FlatList
          style={{marginBottom:35}}
          data={cartItems}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.cartItemContainer}>
              {/* Image Container */}
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.imageStyle} resizeMode="contain" />
              </View>
              {/* Product infos */}
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productDescription}>{item.description}</Text>
              </View>
              {/* Quantity selector */}
              <View style={styles.quantitySelector}>
                {/* Add quantity selector here */}
                      {/* Plus */}
                        <TouchableOpacity>
                          <Text>+</Text>
                        </TouchableOpacity>
                      {/* Minus */}
                        <TouchableOpacity>
                          <Text>-</Text>
                        </TouchableOpacity>
              </View>
            </View>
          )}
        />

      </View>

      {/* Order Now Button */}
      <ButtonOrderNow/>
    </View>

    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  orderNowButtonTilte:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:20
  },
  orderNowButton:{
    justifyContent:'center',
    height:50,
    width:'80%',
    backgroundColor:'orange',
    borderRadius:10,
    alignSelf:'center',
    position:'absolute',
    bottom:10,
    shadowColor:'orange',
    shadowOffset:{width:-20,height:-20},
    shadowOpacity:0.9,
    elevation:10
  },
  container: {
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
  headerStyle: {

    backgroundColor: 'transparent', // Customize as needed
    justifyContent: 'space-around',
    borderBottomColor: 'transparent',
    height: 100,
  },
  styleLeftIconHeader: {
    backgroundColor: '#161a1d',
    borderRadius: 5,
    padding: 2,
    shadowColor: 'white',
    shadowOpacity: 0.9,
    shadowOffset: { width: 2, height: 2 },
  },
  bodyContainer: {
    // backgroundColor:'red',
    flex: 1,
    padding: 30,
    paddingTop:0,
    
  },
  titleContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 25,
    color: '#777',
  },
  cartItemContainer: {
    backgroundColor: 'black',
    height: 100,
    width: '100%',
    marginVertical: 8,
    flexDirection: 'row',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    
  },
  imageContainer: {
    height: '100%',
    width: 70,
    borderRadius: 8,
    marginRight: 8,
    overflow: 'hidden',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  productInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    color: '#fff',
  },
  productDescription: {
    fontSize: 12,
    color: '#ccc',
  },
  quantitySelector: {
    marginRight:3,
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    height:'65%',
    width:25,
    borderRadius:5
  },
});
