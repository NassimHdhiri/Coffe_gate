import { router } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import {Text,View} from 'react-native'
import { Header, Icon } from 'react-native-elements';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'; // Ensure correct import


const Cart=()=>{
    return(
        <View style={styles.container}>
            <Header
                containerStyle={styles.headerStyle} // Custom header style

                leftComponent={
                        <Icon 
                        // onPress={()=>router.back()}
                        onPress={()=>router.push('client/index')}

                        name="chevron-left"
                        type="entypo"
                        size={24}  // Adjust size as needed
                        color="white"
                        style={styles.styleLeftIconHeader}
                        />
                }
            />



        </View>
    )
}

export default Cart;

const styles=StyleSheet.create(
  {
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
    }
  }
)