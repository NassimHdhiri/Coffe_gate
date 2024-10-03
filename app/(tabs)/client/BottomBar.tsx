import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from 'react-native-elements'; // Importing Icon from react-native-elements

const BottomBar = () => {
  return (
    <View style={styles.containerBottomBar}>
      {/* icon white menu */}
      <Icon
        name="menu"
        type="material"
        color="#fff"
        size={25}
        containerStyle={styles.iconStyle}
      />

      {/* icon white favorite */}
      <Icon
        name="favorite"
        type="material"
        color="#fff"
        size={25}
        containerStyle={styles.iconStyle}
      />

      {/* icon white settings */}
      <Icon
        name="settings"
        type="material"
        color="#fff"
        size={25}
        containerStyle={styles.iconStyle}
      />

      {/* icon white profile */}
      <Icon
        name="person"
        type="material"
        color="#fff"
        size={25}
        containerStyle={styles.iconStyle}
      />
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
            paddingHorizontal: 15,
          },
    }
)