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
    