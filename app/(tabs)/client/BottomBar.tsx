import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from 'react-native-elements'; // Importing Icon from react-native-elements

const BottomBar = () => {
  return (
    <View style={styles.containerBottomBar}>
      {/* icon white menu */}
      <View style={styles.iconSelectedBorder}>
          <Icon
            name="menu"
            type="material"
            color="orange"
            size={25}
            containerStyle={styles.iconStyleSelected}
          />
      </View>
      

      {/* icon white favorite */}
      
      <View>
        <Icon
          name="favorite"
          type="material"
          color="#fff"
          size={25}
          containerStyle={styles.iconStyle}
        />
      </View>

      {/* icon white settings */}
      <View>
        <Icon
          name="settings"
          type="material"
          color="#fff"
          size={25}
          containerStyle={styles.iconStyle}
        />
      </View>

      {/* icon white profile */}
      <View>
        <Icon
          name="person"
          type="material"
          color="#fff"
          size={25}
          containerStyle={styles.iconStyle}
        />
      </View>
    </View>
  );
};

export default BottomBar;

const styles=StyleSheet.create(
    {
        containerBottomBar:{
            height:60,
            width:'85%',
            // backgroundColor:'black',
            borderRadius:20,
            position:'absolute',
            bottom:10,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems:'center',
            backgroundColor: '#000', // Dark background to highlight white icons
            padding: 10,
            // height: 60,
          },
          iconStyle: {
            paddingHorizontal: 13,
          },
          iconStyleSelected: {
            paddingHorizontal: 13,
            marginBottom:-10
          },
          iconSelectedBorder:{
            borderBottomColor:'orange',
            borderBottomWidth:5,
            paddingBottom:20,
            marginBottom:-18,
            borderRadius:2

          }
    }
)