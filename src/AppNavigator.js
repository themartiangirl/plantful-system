import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from '../screens/ProductList';
import ProductDetails from '../screens/ProductDetails';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ProductList">
      <Stack.Screen name="ProductList" component={ProductList} options={{ title: 'Products' }} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ title: 'Product Details' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

