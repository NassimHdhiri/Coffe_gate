import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { useCameraPermissions } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';


const ButtonOrderNow = () => {
    const [permission, requestPermission] = useCameraPermissions();
    const navigation = useNavigation();

    const handleOrderNowPress = async () => {
        if (!permission || !permission.granted) {
            await requestPermission();
        }
  
      if (permission.granted) {
        // Navigate to the client/ScanTable route
        router.push('client/ScanTable');
      } else {
        console.log('Camera permission denied');
      }
    };
  
    return (
      <TouchableOpacity
        style={styles.orderNowButton}
        onPress={handleOrderNowPress}
      >
        <Text style={styles.orderNowButtonTilte}>Order Now</Text>
      </TouchableOpacity>
    );
  };
  

export default ButtonOrderNow;

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
});
