import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const GPT = 'https://chat.openai.com/';

const Search = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <WebView 
      source={{ uri: 'https://reactnative.dev/' }} 
    />
  </SafeAreaView>
  );
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
  },
});
