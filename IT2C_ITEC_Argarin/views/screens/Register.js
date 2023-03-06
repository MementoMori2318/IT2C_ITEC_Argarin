import * as React from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import Inputs from '../../components/Inputs';


function Register() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.inputsContainer}>
        <Inputs/>
        <Inputs/>
        <Inputs/>
     </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  inputsContainer: {
    paddingTop: 10,
    paddingHorizontal: 15,
  },
});
export default Register;