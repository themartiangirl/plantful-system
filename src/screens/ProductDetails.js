import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductDetails = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.images.edges[0]?.node.url }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  image: { width: '100%', height: 200, resizeMode: 'contain' },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
  description: { fontSize: 16, color: '#555' },
});

export default ProductDetails;

