import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useQuery, gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query {
    products(first: 10) {
      edges {
        node {
          id
          title
          description
          images(first: 1) {
            edges {
              node {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const ProductList = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <FlatList
      data={data.products.edges}
      keyExtractor={(item) => item.node.id}
      renderItem={({ item }) => (
        <View style={styles.product}>
          <Text style={styles.title}>{item.node.title}</Text>
          <Text>{item.node.description}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  product: { padding: 20, borderBottomWidth: 1 },
  title: { fontWeight: 'bold', fontSize: 18 },
});

export default ProductList;

