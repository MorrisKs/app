import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const MenuScreen = () => {
  // Sample menu items
  const menuItems = [
    { id: 1, name: 'Home', screen: 'Home.js' },
    { id: 2, name: 'Profile', screen: 'ProfileScreen' },
    { id: 3, name: 'Settings', screen: 'SettingsScreen' },
  ];

  // Function to handle menu item press
  const handleMenuItemPress = (screen) => {
    // Navigate to the selected screen
    // You can implement your navigation logic here
    console.log('Navigating to screen:', screen);
  };

  // Render each menu item
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleMenuItemPress(item.screen)}>
      <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default MenuScreen;