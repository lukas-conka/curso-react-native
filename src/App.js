import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Simples from './components/Simples'
import { Inverter, MegaSena } from './components/Mult'

export default function App() {
  return (
    <View style={styles.container}>
      <Simples texto="Simples" style={styles.f20}></Simples>
      <Inverter texto="Lucas Amaral"></Inverter>
      <MegaSena></MegaSena>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
