import { Image, View, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Text } from 'react-native-elements';
import { useAssets } from 'expo-asset';
import React from 'react'
// Animated.View

const MenuItemsCard = () => {
  // Load Local Images from assets folder
  const [assets, error] = useAssets([
    require('../../../assets/foods/coffee/cafe_au_lait.png'),
    require('../../../assets/images/Pizza.png'),
    require('../../../assets/images/Plat.png'),
    require('../../../assets/images/Chicha.png'),
    require('../../../assets/images/Breakfast.png'),
    require('../../../assets/foods/coffee/americano.png'),
    require('../../../assets/foods/coffee/cafe_au_lait.png'),
    require('../../../assets/foods/coffee/cappuccino.png'),
    require('../../../assets/foods/coffee/americano.png'),

  ]);

  if (!assets) {
    return <ActivityIndicator size="large" color="#0000ff" />; // Show a loading spinner while assets are loading
  }

  if (error) {
    return <Text>Error loading assets: {error.message}</Text>; // More detailed error message
  }

  // foods data
  const foods = [
    { name: 'Americano', description: 'Chap with Salad' },
    { name: 'Cafe au lait', description: 'Chap with Salad' },
    { name: 'Cappuccino', description: 'Chap with Salad' },
    { name: 'Espresso', description: 'Chap with Salad' },
  ];

  return (
    <View style={styles.foodContainer}>
      {/* Render food cards */}
      {foods.map((food, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => router.push('/client/SingleMenuItem')}
          style={styles.foodCard}
          accessibilityLabel={`Order ${food.name}`}
        >
          {/* Image container */}
          <View style={styles.imageContainer}>
            <Image
              source={assets[index+5]} // Map the correct image to the food item
              style={styles.foodImage}
            />
          </View>

          {/* Title and description of food */}
          <View style={styles.textContainer}>
            <Text style={styles.foodName}>{food.name}</Text>
            <Text style={styles.foodDescription}>{food.description}</Text>
          </View>

          {/* Price section */}
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>
              <Text style={styles.priceSymbol}>$</Text> 20
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MenuItemsCard;

const styles = StyleSheet.create({
  foodCard: {
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    height: 170,
    elevation: 4, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 1 }, // iOS shadow
    shadowOpacity: 0.1, // iOS shadow
    shadowRadius: 2, // iOS shadow
  },
  foodContainer: {
    paddingTop: 70,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 22,
    rowGap: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    position: 'relative',
    flex: 1,
    alignItems: 'center',
  },
  foodImage: {
    shadowColor: 'red',
    shadowOffset: { width: 2, height: 12 },
    shadowOpacity: 0.8,
    position: 'absolute',
    top: -80,
    width: 120,
    height: 120,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 4,
    marginTop: -20,
  },
  foodName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  foodDescription: {
    color: 'grey',
    textAlign: 'justify',
    paddingTop: 10,
    fontWeight: '700',
  },
  priceContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  priceText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
  },
  priceSymbol: {
    color: 'orange',
    fontWeight: 'bold',
  },
});
