import React from "react";
import { View ,Text,TouchableOpacity,StyleSheet} from "react-native";



const EventCard=()=>{
    return(
        <View style={styles.eventCard}>
              <Text style={styles.eventLabel}>Events</Text>
              <Text style={styles.eventTitle}>Event Title</Text>
              <Text style={styles.eventDescription}>Event Description</Text>
            
            </View>
    )
}

export default EventCard;   


const styles=StyleSheet.create(
    {
        eventCard: {
            
            height: 150,
            width: '95%',
            backgroundColor: 'black', // Background color of the card
            borderRadius: 8, // Rounded corners
            padding: 16, // Padding inside the card
            marginVertical: 8, // Vertical margin between cards
            elevation: 2, // Shadow effect for Android
            shadowColor: '#000', // Shadow color for iOS
            shadowOffset: { width: 0, height: 1 }, // Shadow offset for iOS
            shadowOpacity: 0.1, // Shadow opacity for iOS
            shadowRadius: 2, // Shadow radius for iOS
          },
        
          eventLabel: {
            
            fontSize: 14, // Font size for the label
            fontWeight: 'bold', // Bold text
            color: 'white', // Color for the label
            marginBottom: 8, // Margin below the label
          },
          eventTitle: {
            fontSize: 18, // Font size for the title
            fontWeight: '600', // Semi-bold text
            color: 'white', // Color for the label
            marginBottom: 4, // Margin below the title
            // marginBottom: 4, // Margin below the title
          },
          eventDescription: {
            fontSize: 14, // Font size for the description
            color: 'white', // Color for the label
            marginBottom: 12, // Margin below the description
          },
          button: {
            backgroundColor: '#007bff', // Button background color
            padding: 10, // Padding inside the button
            borderRadius: 5, // Rounded corners for the button
            alignItems: 'center', // Center the button text
          },
          buttonText: {
            color: '#fff', // Button text color
            fontWeight: 'bold', // Bold text
          },
    }
)