// NavigationView.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

const NavigationView = ({ list }) => {
  return (
    <SafeAreaView>
        <View style={styles.navigationContainer}>
          {list.map((item, i) => (
            <ListItem bottomDivider key={i} containerStyle={styles.listItem}>
              <ListItem.Content>
                <ListItem.Title style={styles.listItemTitle}>
                  {item.content}
                </ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          ))}
        </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    backgroundColor: '#fff', // Customize background color here
    padding: 16,
  },
  listItem: {
    backgroundColor: '#e0f7fa', // Example: light teal background
    borderRadius: 8,
    marginBottom: 10,
  },
  listItemTitle: {
    color: '#00796b', // Example: dark green text
    fontWeight: 'bold',
  },
});

export default NavigationView;



