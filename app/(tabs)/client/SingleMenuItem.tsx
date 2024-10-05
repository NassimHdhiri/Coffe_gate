import { useAssets } from 'expo-asset';
import React from 'react';
import { Image,Text, StyleSheet, View ,ActivityIndicator, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { BackgroundImage } from 'react-native-elements/dist/config';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'; // Ensure correct import
import { Button } from '@rneui/themed';
import { router } from 'expo-router';



const SingleMenuItem = () => {
    const [assets,error]=useAssets(
        [
            require('../../../assets/foods/pizza/pizza-margherita.png'),
            require('../../../assets/foods/background/backgroundItemMenu.jpg'),
            require('../../../assets/foods/pizza/pizza-margherita/ingredients/tomato.png'),
            require('../../../assets/foods/pizza/pizza-margherita/ingredients/mozzarella.png'),
            require('../../../assets/foods/pizza/pizza-margherita/ingredients/basil.png'),
        ]
    )

    if (!assets) {
        return <ActivityIndicator size="large" color="#0000ff" />; // Show a loading spinner while assets are loading
      }
    
      if (error) {
        return <Text>Error loading assets: {error.message}</Text>; // More detailed error message
      }

    return (
        <View style={styles.container}>
            {/* Header with custom left and right components */}
            <Header
                containerStyle={styles.headerStyle} // Custom header style

                leftComponent={
                    <View  style={{flex:1,flexDirection:'row',alignItems:'center',columnGap:25,paddingLeft:20,width:250}}>
                        <Icon 
                        // onPress={()=>router.back()}
                        onPress={()=>router.push('client/index')}

                        name="chevron-left"
                        type="entypo"
                        size={24}  // Adjust size as needed
                        color="white"
                        style={styles.styleLeftIconHeader}
                        />
                        <Text style={{color:'white',fontSize:20,overflow:'hidden'}}>Magherita </Text>
                    </View>
                    
                }
                // centerComponent={{ text: 'Magherita', style: { color: '#fff', fontSize: 20,textAlign:'left' } }}
                rightComponent={
                    <View style={{position:'relative',alignItems:'center'}}>
                      <View style={{
                              position:'absolute',
                              backgroundColor:'black',
                              zIndex:50,
                              borderRadius:22,
                              padding:5,
                              marginTop:14,
                              right:6
                            }}>
                        <Text style={{color:'orange',fontSize:15,fontWeight:'bold'}}>12</Text>
                      </View>
                      <FontAwesome6 
                        name="bell-concierge" 
                        size={30}  // Specify size
                        color="orange"  // Specify color
                        style={{paddingRight:20}}
                      />
                    </View>
                }
            />

            {/* Container Image */}
            
            <View style={styles.containerImage}>
                  {/* <ImageBackground source={assets[1]} style={{borderBottomLeftRadius: 90, borderBottomRightRadius:90,alignSelf:'center'}} > */}
                      <Image source={assets[0]} style={styles.imageOfProduct}/>
                  {/* </ImageBackground> */}
            </View>

            {/* Quantity editor*/}
            <View style={styles.quantityEditor}>
                <TouchableOpacity><Text style={styles.textQuantityEditor} >-</Text></TouchableOpacity>
                                  <Text style={styles.textQuantityEditor} >1</Text>
                <TouchableOpacity><Text style={styles.textQuantityEditor} >+</Text></TouchableOpacity>
            </View>
            
            {/* details */}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:60,}}>
              <View style={styles.detailsContainer}>
                <Text style={styles.productName}>Neapolitan pizza</Text>
                <Text style={styles.listItemText}>Neapolitan Pizza is a classic Italian pizza with a thin, soft crust, often cooked in a wood-fired oven. It's characterized by its simplicity, using only a few high-quality ingredients.</Text>
                <Text style={styles.listItem}>Size</Text>
                
                {/* Size */}
                <View style={styles.sizeContainer}>
                  <View style={styles.itemSizeContainer}>
                    <Text style={styles.itemSize}>S</Text>
                  </View>
                  <View style={styles.itemSizeContainerSelected}>
                    <Text style={styles.itemSize}>M</Text>
                  </View>
                  <View style={styles.itemSizeContainer}>
                    <Text style={styles.itemSize}>L</Text>
                  </View>
                </View>
                
                {/* Ingredients */}
                <Text style={styles.listItem}>Ingredients</Text>
                <ScrollView horizontal={true} contentContainerStyle={styles.ingredientsContainer} showsHorizontalScrollIndicator={false}>
                        <View style={styles.itemIngredientsContainer}>
                            <Image source={assets[2]} style={{width:30,height:30,margin:'auto',elevation:5}}/>
                        </View>
                        <View style={styles.itemIngredientsContainer}>
                            <Image source={assets[3]} style={{width:30,height:30,margin:'auto',elevation:5}}/>
                        </View>
                        <View style={styles.itemIngredientsContainer}>
                            <Image source={assets[4]} style={{width:30,height:30,margin:'auto',elevation:5}}/>
                        </View>
                </ScrollView>
                
                {/* Additional ingredients */}
                <Text style={styles.listItem}>Additional ingredients</Text>
                <ScrollView horizontal={true} contentContainerStyle={styles.ingredientsContainer} showsHorizontalScrollIndicator={false}>
                        <View style={styles.itemIngredientsContainer}>
                            <Image source={assets[2]} style={{width:30,height:30,margin:'auto',elevation:5}}/>
                        </View>
                        <View style={styles.itemIngredientsContainer}>
                            <Image source={assets[3]} style={{width:30,height:30,margin:'auto',elevation:5}}/>
                        </View>
                        <View style={styles.itemIngredientsContainer}>
                            <Image source={assets[4]} style={{width:30,height:30,margin:'auto',elevation:5}}/>
                        </View>
                </ScrollView>

                {/* Special Instructions */}
                <Text style={styles.listItem}>Special Instructions</Text>
                <ScrollView horizontal={true} contentContainerStyle={styles.ingredientsContainer} showsHorizontalScrollIndicator={false}>
                        <View style={styles.itemIngredientsContainer}>
                            <Image source={assets[2]} style={{width:30,height:30,margin:'auto',elevation:5}}/>
                        </View>
                        <View style={styles.itemIngredientsContainer}>
                            <Image source={assets[3]} style={{width:30,height:30,margin:'auto',elevation:5}}/>
                        </View>
                        <View style={styles.itemIngredientsContainer}>
                            <Image source={assets[4]} style={{width:30,height:30,margin:'auto',elevation:5}}/>
                        </View>
                </ScrollView>
              </View>
            </ScrollView>

            {/* FINANCIAL SECTION */}
            <View style={styles.financeContainer}>
                    <Text style={
                          { 
                            width:'30%',
                            
                            fontSize:35,
                            alignSelf:'center',
                            textAlign:'center',
                            textAlignVertical:'center',
                            fontWeight:'600'
                          }
                          }>$ 22</Text>
                    <Button
                      title="Add to cart"
                      buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
                      containerStyle={{
                        width: '60%',
                        height:'100%',
                        // // marginHorizontal: 50,
                        // // marginVertical: 10,
                        borderRadius:22
                      }}
                      titleStyle={
                        { 
                          color: 'white', 
                          marginHorizontal: 20,
                          marginVertical:8
                        }}

                        onPress={()=>{router.push('/client/Cart')}}
                    />
                </View>
        </View>
    );
};

export default SingleMenuItem;

const styles = StyleSheet.create({
  // detailsContainer: {
  //   padding: 20,
  // },
  ingredientsContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginVertical:10,
    
  },
  itemIngredientsContainer:{
    elevation:1,
    borderRadius:3,
    width:80,
    height:40,
    backgroundColor:'#dee2e6',
    marginHorizontal:6
  },
  itemIngredientsContainerSelected:{
    elevation:14,
    borderRadius:3,
    width:80,
    height:40,
    backgroundColor:'orange',
    marginTop:-9,
  },
  itemIngredients:{
    margin:'auto',
    fontSize:20,
    fontWeight:'500',
  },
  sizeContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginVertical:10
  },
  itemSizeContainer:{
    elevation:1,
    borderRadius:3,
    width:80,
    height:40,
    backgroundColor:'#dee2e6',
  },
  itemSizeContainerSelected:{
    elevation:14,
    borderRadius:3,
    width:80,
    height:40,
    backgroundColor:'orange',
    marginTop:-9,
  },
  itemSize:{
    margin:'auto',
    fontSize:20,
    fontWeight:'500',
  },
  list: {
    marginBottom: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  listItem: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listItemText: {
    fontSize: 14,
    marginLeft: 10,
    color:'#adb5bd',
    textAlign:'justify'
  },
  detailsContainer:{
    padding:20,
    flex:1,
    gap:4,
  },
  financeContainer:{
      backgroundColor:'white',
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      alignContent:'center',
      width:'100%',
      position:'absolute',
      paddingBottom:10,
      paddingTop:5,
      bottom:0
    },
    imageOfProduct:{
        color: 'white', 
        alignSelf: 'center',
        shadowColor:'white',
        shadowOffset:{width:20,height:20},
        shadowOpacity:0.9,

    },
    textQuantityEditor:{
        fontSize:30
    },
    quantityEditor:{
        margin:'auto',
        flexDirection:'row',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        columnGap:30,
        borderRadius:10,
        width:140,
        height:50,
        elevation:5,
        marginTop:-25
    },
    styleLeftIconHeader:{
        backgroundColor:'#161a1d',
        borderRadius:5,
        padding:2,
        shadowColor:'white',
        shadowOpacity:0.9,
        shadowOffset:{width:20,height:20}
    },
    container: {
        // flex: 1,
        height:'100%',
        backgroundColor: '#f5f5f5',
    },
    headerStyle: {
        backgroundColor: 'black',  // Customize as needed
        justifyContent: 'space-around',
        borderBottomColor:'transparent',
        height:100
    },
    BackgroundImage:{
        opacity:0.5,
        height: 310,
        backgroundColor: 'black',
        borderBottomLeftRadius: 90,
        borderBottomRightRadius:300,
        elevation:5
    },
    containerImage: {
        
        height: 310,
        backgroundColor: 'black',
        borderBottomLeftRadius: 90,
        borderBottomRightRadius:90,
        elevation:5
    },
});
