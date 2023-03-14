import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Background from '../../components/Background';
import Button from '../../components/Button';
import { orange, white } from '../../components/Color';

const WellcomeScreen = ( { navigation } ) => {
  const [userDetails, setUserDetails] = React.useState();
  React.useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    const userData = await AsyncStorage.getItem("userData");

    if (userData) {
      console.log("Home Screen");
      console.log(JSON.parse(userData));
      setUserDetails(JSON.parse(userData));
    }
  };
  const logout = () => {
    AsyncStorage.setItem(
      "userData",
      JSON.stringify({ ...userDetails, loggedIn: false })
    );

    navigation.navigate("Home");
  };
  return (
    <Background>
    <View>
     
        <Text style={styles.wellcome}>Wellcome {userDetails?.username}🎉</Text>
     
      
    </View>
    <Button bgColor={orange} txtcolor={white} title="Logout" onPress={logout}/>
    </Background>
  );
};

const styles = StyleSheet.create({
  wellcome: {
    fontSize: 55, 
    color: "#fff", 
    fontWeight: "900", 
    alignSelf: 'center',
    paddingTop: 250,
  },
});
export default WellcomeScreen;