import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', borderBottomWidth: 1, borderColor: '#ddd' },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
});

export default Header;

