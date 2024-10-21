// Sidebar.js
import React from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';

const Sidebar = ({ filters, onFilterChange, onSortChange }) => {
  return (
    <View style={styles.sidebar}>
      <Text style={styles.title}>Filters</Text>
      <Picker
        selectedValue={filters.category}
        onValueChange={(itemValue) => onFilterChange('category', itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="All Categories" value="" />
        <Picker.Item label="Electronics" value="electronics" />
        <Picker.Item label="Jewelry" value="jewelery" />
        <Picker.Item label="Men's Clothing" value="men's clothing" />
        <Picker.Item label="Women's Clothing" value="women's clothing" />
      </Picker>

      <Text style={styles.title}>Sort By</Text>
      <Picker
        selectedValue={filters.sort}
        onValueChange={(itemValue) => onSortChange(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="None" value="" />
        <Picker.Item label="Price Low to High" value="price_low_high" />
        <Picker.Item label="Price High to Low" value="price_high_low" />
        <Picker.Item label="Title A to Z" value="title_a_z" />
        <Picker.Item label="Title Z to A" value="title_z_a" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 16,
  },
});

export default Sidebar;
