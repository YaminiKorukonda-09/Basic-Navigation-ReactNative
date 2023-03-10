import * as React from 'react';
import { View, StyleSheet, Button, Platform, Text } from 'react-native';
import PrintPdf from './PrintPdf';

export default function App() {

  return (
    <View style={styles.container}>
      <PrintPdf />
      <View style={styles.spacer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#f5ad86'
  },
  spacer: {
    margin: 20,
    height: 2,
    width: '80%',
    backgroundColor: 'skyblue',
  },
})