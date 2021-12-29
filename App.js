import React, {useState} from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import {AppLoading} from 'expo';

import productsReducer from './store/reducers/products';
import ShopNavigator from './navigation/ShopNavigator';
import * as Font from 'expo-font';
import cartReducer from './store/reducers/cart';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
});

const store = createStore(rootReducer);



export default function App() {
  return (
    <SafeAreaView style={styles.container}>

    <Provider store={store}>
      <ShopNavigator />
    </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40
    
  },
  text: {
    fontSize: 25,
    fontWeight: '500'
  }
});

