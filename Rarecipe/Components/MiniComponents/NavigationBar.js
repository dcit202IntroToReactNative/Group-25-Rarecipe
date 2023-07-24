import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Platform } from 'react-native';
import Ic_Home from "../../assets/ic_home.svg";
import Ic_Bookmark from "../../assets/ic_bookmark.svg";
import Ic_Profile from "../../assets/ic_profile.svg";
import Ic_Search from "../../assets/ic_search.svg";
import Ic_Notification from "../../assets/ic_notification.svg";


const NavigationBar = () => {
  return (
    <View style={styles.container}>
      {/* Four buttons */}
      <TouchableOpacity style={styles.button}>
        <Ic_Home style={styles.IcHome}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Ic_Bookmark style={styles.IcBookmark}/>
      </TouchableOpacity>
      {/* Floating button */}
      <TouchableOpacity style={styles.floatingButton}>
        <Ic_Search style={styles.IcSearch}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Ic_Notification style={styles.IcNotification}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Ic_Profile style={styles.IcProfile}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // Platform-specific shadow property
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  button: {
    padding: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
  floatingButton: {
    backgroundColor: '#772F5E',
    borderRadius: 70,
    padding: 15,
    bottom: 40,
    marginHorizontal: -25,
    // Platform-specific shadow property
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  floatingButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

export default NavigationBar;
