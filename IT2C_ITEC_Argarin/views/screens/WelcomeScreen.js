import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Background from '../../components/Background';
import Button from '../../components/Button';
import { orange, white } from '../../components/Color';
import auth from '@react-native-firebase/auth';

const WelcomeScreen = ( { navigation } ) => {
  const [userDetails, setUserDetails] = React.useState();
  React.useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    const userData = await AsyncStorage.getItem("userData");
    const UserLogedInData = await AsyncStorage.getItem("UserLogedInData");   

    if (userData) {
      console.log("Home Screen");
      console.log(JSON.parse(userData));
      setUserDetails(JSON.parse(userData));
    }

    if (userData) {
      
      console.log("UserLogedInData >>");
      console.log(JSON.stringify(JSON.parse(UserLogedInData), null, 2));
      console.log("UserLogedInData <<");

      let udata = JSON.parse(UserLogedInData);
      console.log("udata >>");
      console.log(udata.user.displayName);
      console.log("udata <<");
      setUserDetails(udata.user);
    }
   };
  const logout = () => {
    AsyncStorage.setItem(
      "userData",
      JSON.stringify({ ...userDetails, loggedIn: false })
    );
    auth()
    .signOut()
    .then(() => console.log('User signed out!'));
    navigation.navigate("Home");
  };
  return (
    <Background>
    <View>
    {userDetails?.photoURL && (
      <Image style={styles.image} source={{ uri: userDetails?.photoURL}} />
    )}
        <Text style={styles.welcome}>Welcome {userDetails?.username}🎉</Text>
        <Text style={styles.welcome}>Welcome {userDetails?.displayName}🎉</Text>
     
      
    </View>
    <Button bgColor={orange} txtcolor={white} title="Logout" onPress={logout}/>
    </Background>
  );
};

const styles = StyleSheet.create({
  welcome: {
    fontSize: 55, 
    color: "#fff", 
    fontWeight: "900", 
    alignSelf: 'center',
  },
  image: {
    height: 250,
    width: 250,
    alignSelf: 'center',
    borderRadius: 300,
  }
});
export default WelcomeScreen;