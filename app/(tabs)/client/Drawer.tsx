import React, { useEffect, useRef, useState } from 'react';
import {
  DrawerLayoutAndroid,
  StyleSheet,
  View,
} from 'react-native';
import { Link } from 'expo-router';
import { ListItem, Text } from 'react-native-elements';


  const list = [
    { path: '/admin', content: 'Admin' },
    { path: '/client', content: 'Client' },
    { path: '/waiter', content: 'Waiter' },
  ];

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      {list.map((item, i) => (
        <Link href={item.path} key={i} style={styles.link}>
          <ListItem bottomDivider containerStyle={styles.listItem}>
            <ListItem.Content>
              <ListItem.Title>{item.content}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </Link>
      ))}
    </View>
  );

  export default navigationView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    zIndex: 50,
  },
  link: {
    width: '100%',
  },
  listItem: {
    width: '100%',
    paddingVertical: 10,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
    flex: 1,
    width: '100%',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});

