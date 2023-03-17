/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import Header from './src/components/header/header';
import CurrencyList from './src/components/currencyList/currencyList';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Header />
      <CurrencyList />
    </SafeAreaView>
  );
}

export default App;
