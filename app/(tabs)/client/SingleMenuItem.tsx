import { useAssets } from 'expo-asset';
import React from 'react';
import { Image,Text, StyleSheet, View ,ActivityIndicator} from 'react-native';
import { Header, Icon } from 'react-native-elements';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'; // Ensure correct import


const SingleMenuItem = () => {
    const [assets,error]=useAssets(
        [
            require('../../../assets/foods/pizza/pizza-margherita.png')
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
                    <View style={{flex:1,flexDirection:'row',alignItems:'center',columnGap:25,paddingLeft:20,width:250}}>
                        <Icon 
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
                    <FontAwesome6 
                        name="bell-concierge" 
                        size={30}  // Specify size
                        color="orange"  // Specify color
                        style={{paddingRight:20}}
                    />
                }
            />

            {/* Container Image */}
            <View style={styles.containerImage}>
                <Image source={assets[0]} style={{ color: 'white', alignSelf: 'center'}}/>
            </View>
        </View>
    );
};

export default SingleMenuItem;

const styles = StyleSheet.create({
    styleLeftIconHeader:{
        backgroundColor:'grey',
        borderRadius:5,
        padding:2
    },
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    headerStyle: {
        backgroundColor: 'black',  // Customize as needed
        justifyContent: 'space-around',
        borderBottomColor:'transparent',
        height:100
    },
    containerImage: {
        height: 320,
        backgroundColor: 'black',
        borderBottomLeftRadius: 80,
        borderBottomRightRadius:80,
    },
});
