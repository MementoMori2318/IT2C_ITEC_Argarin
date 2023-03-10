import * as React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import Background from '../../components/Background';
import Button from '../../components/Button';
import { darkorange, orange, white } from '../../components/Color';


const Home = (props) => {
  return (
    <Background >
      <View style={styles.container}>
        <Text style={styles.gameText}>GAME HUB</Text>
        <Button bgColor={orange} txtcolor={white} title="Login" onPress={() => props.navigation.navigate("Login")}/>
        <Button bgColor={white} txtcolor={orange} title="Register" onPress={() => props.navigation.navigate("Register")} />
        
      </View>
    </Background>
  );
}
const styles = StyleSheet.create({
  container: {
   
    paddingTop: 200 
  },
  gameText: {
    fontSize: 55, 
    color: "#fff", 
    fontWeight: "800", 
    
    
  },
 });
export default Home;