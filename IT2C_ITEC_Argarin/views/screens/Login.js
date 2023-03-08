import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Background from '../../components/Background';
import Button from '../../components/Button';
import { orange, white } from '../../components/Color';
import Inputs from '../../components/Inputs';


function Login() {
  return (
    <Background>
      <Text style={styles.gameText}>GAME HUB</Text>
    <View style={styles.inputsContainer}>
      <Text style={styles.loginText}>Login</Text>
      <Inputs label={"Email"} iconName="email-outline" placeholder="Enter Email"/>
      <Inputs label={"Password"} iconName="lock-outline" placeholder="Enter Password"/>
      <Button bgColor={orange} txtcolor={white} title="Login"/>
    </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  gameText: {
    fontSize: 55, 
    color: "#fff", 
    fontWeight: "600", 
    alignSelf: 'center'
  },
  loginText: {
    fontSize: 30, 
    color: "#ff2626", 
    fontWeight: "600", 
    alignSelf: 'center'
  },
  inputsContainer: {
    paddingTop: 100,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
    height: 710,
    width: 400,
    borderTopLeftRadius: 150,
    borderBottomEndRadius: 150,
  },
})

export default Login;