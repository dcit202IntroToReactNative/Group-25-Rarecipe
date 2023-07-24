import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const NotificationsView = () => {
    const [notifications, setNotifications] = useState([
      { id: '1', title: 'Goodmorning, we have new recipe ideas for you', read: false },
      { id: '2', title: 'Vanecia commented under your post', read: true },
      { id: '3', title: 'Justice liked your post', read: false },
      { id: '4', title: 'Delicious delicacies for you to choose from, you will love it', read: false },
      ]);
      const [activeButton, setActiveButton] = useState('all');

      const newNotifications = notifications.filter((notification) => !notification.read);
      const olderNotifications = notifications.filter((notification) => notification.read);
    
      const renderNotificationItem = ({ item }) => (
        <TouchableOpacity style={[styles.notificationItem, { backgroundColor: item.read ? '#f0f0f0' : '#fff' }]}>
          
          <View style={styles.notificationDetails}>
            <Text style={styles.notificationTitle}>{item.title}</Text>
          </View>
    
          <View style={styles.notificationIcon}>
            <Ionicons name="notifications-outline" size={24} color={item.read ? '#ccc' : '#000'} />
          </View>
        </TouchableOpacity>
      );
    
      const handleButtonPress = (button) => {
        setActiveButton(button);
      };
      const screenWidth = Dimensions.get('window').width;
  const buttonWidth = (screenWidth - 60) / 10;

  let notificationDataToShow;
  let categoryText;
  let categoryTextColor;

  if (activeButton === 'unread') {
    notificationDataToShow = newNotifications;
    categoryText = 'New Notifications';
    categoryTextColor = '#128'; // Black text color for the active button
  } else if (activeButton === 'read') {
    notificationDataToShow = olderNotifications;
    categoryText = 'Older Notifications';
    categoryTextColor = '#128'; // Black text color for the active button
  } else {
    notificationDataToShow = notifications;
    categoryText = 'All Notifications';
    categoryTextColor = '#128'; // White text color for other buttons
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, { width: buttonWidth, marginHorizontal: '2%' }]}
          onPress={() => handleButtonPress('all')}
        >
          <Text style={[styles.buttonText, activeButton === 'all' && styles.activeButtonText]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { width: buttonWidth, marginHorizontal: '2%' }]}
          onPress={() => handleButtonPress('read')}
        >
          <Text style={[styles.buttonText, activeButton === 'read' && styles.activeButtonText]}>Read</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { width: buttonWidth, marginHorizontal: '2%' }]}
          onPress={() => handleButtonPress('unread')}
        >
          <Text style={[styles.buttonText, activeButton === 'unread' && styles.activeButtonText]}>Unread</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoryContainer}>
        <View style={styles.category}>
          <Text style={[styles.categoryTitle, { color: categoryTextColor }]}>{categoryText}</Text>
          <FlatList
            data={notificationDataToShow}
            renderItem={renderNotificationItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.notificationList}
          />
        </View>
      </View>
    </View>
  );
};
 
    