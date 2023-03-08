import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Background from '../../components/Background';
import Button from '../../components/Button';
import { darkorange, orange } from '../../components/Color';


const Home = (props) => {
  return (
    <Background>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.gameText}>Game HUB</Text>
        <Button bgColor={darkorange} title="Login" onPress={() => props.navigation.navigate("Login")}/>
        <Button bgColor={orange} title="Register" onPress={() => props.navigation.navigate("Register")} />
        
      </View>
    </Background>
  );
}
const styles = StyleSheet.create({
  gameText: {
    fontSize: 55, 
    color: "#fff", 
    fontWeight: "600", 
    alignSelf: 'center'
  },
 });
export default Home;