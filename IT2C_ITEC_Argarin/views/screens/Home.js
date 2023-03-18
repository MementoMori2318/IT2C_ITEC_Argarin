import * as React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import Background from '../../components/Background';
import Button from '../../components/Button';
import { darkorange, orange, white, blue } from '../../components/Color';
import 'expo-dev-client';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation }) => {
  GoogleSignin.configure({
    webClientId: '231135650384-lbu9ueh0tui7p3n4sned9ulognsb9oej.apps.googleusercontent.com',
  });
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState();
  const onGoogleButtonPress = async() => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    //return auth().signInWithCredential(googleCredential);
    const user_sign_in = auth().signInWithCredential(googleCredential);
    user_sign_in.then((user) => {
      console.log(user);
      setUser(user);
      GoogleLogedIn();
    }).catch((error) => {
      console.log(error);
    })
  };
   
 
   // Handle user state changes
   function onAuthStateChanged(user) {
     setUser(user);
     if (initializing) setInitializing(false);
   }
 
   React.useEffect(() => {
     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
     return subscriber; // unsubscribe on unmount
   }, []);
   React.useEffect(() => {
    if(user){
      console.log(user);
      GoogleLogedIn();
     } else {
      console.log("no user");
     }
  }, []);
  
const GoogleLogedIn = () => {
  navigation.navigate("WelcomeScreen");
  AsyncStorage.setItem("UserLogedInData", JSON.stringify({user, loggedIn: true}));
}
  return (
    <Background >
      <View style={styles.container}>
        <Text style={styles.gameText}>GAME HUB</Text>
        <Button bgColor={orange} txtcolor={white} title="Login" onPress={() => navigation.navigate("Login")}/>
        <Button bgColor={white} txtcolor={orange} title="Register" onPress={() => navigation.navigate("Register")} />
        <Button
        bgColor={white} txtcolor={blue}
        title="Google Sign-In"
        onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}/>
        
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