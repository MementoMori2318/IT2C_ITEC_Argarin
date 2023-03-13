import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Background from '../../components/Background';
import Button from '../../components/Button';
import { orange, white } from '../../components/Color';
import Inputs from '../../components/Inputs';
import InputsLoader from '../../components/InputsLoader';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WellcomeScreen from './WellcomeScreen';


const Login = ({ navigation }) => {
  const handleError =(text, input) =>{setErrors(
    (prevState) =>({...prevState, [input]: text}));
  }
  const handleOnChange =(text, input) =>{
    setInputs((prevState) =>({...prevState, [input] : text}));
  }
  const [inputs, setInputs] = React.useState({
    email:"",
    password:"",
  })
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const validate = async() =>{
    var valid = true;

    if (!inputs.email) {
      handleError("Please Input Email", "email")
      valid = false;
    }else if(!inputs.email.match(/\S+@\S+.\S+/)) {
      handleError("Please Input Valid Email", "email")
      valid = false;}
    if(!inputs.password) {
      handleError("Please Input password", "password")
      valid = false;
    }else if (inputs.password.length < 6) {
      handleError("Password is to short", "password")
      valid = false;}
   

    if (valid == true) {
      login();}
  }
  const login= () => {
    console.log("login");
    console.log(inputs); 
   
    setLoading(true);
    setTimeout(async() =>{
      try {
        setLoading(false);
        let userData =  await AsyncStorage.getItem('userData');
        console.log(userData);

        if (userData) {
          userData = JSON.parse(userData);
          console.log("userData");
          console.log(userData);

          if (inputs.email == userData.email && inputs.password == userData.password) {
            navigation.navigate("WellcomeScreen");
            AsyncStorage.setItem("userData", JSON.stringify({...userData, loggedIn: true}))
          } else {
            console.log("No Account found")
            Dialog.show({
              type: ALERT_TYPE.DANGER,
              title: 'Error',
              textBody: "Incorrect Email or Password",
              button: 'Close',
            });
          }
        } else {
          console.log("No Account found")
          Dialog.show({
            type: ALERT_TYPE.DANGER,
            title: 'Error',
            textBody: "Account does not exist",
            button: 'Close',
          });
        }
      } catch (error) {
        console.log("error" + error)
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: 'Error',
          textBody: "error",
          button: 'Close',
        });
      }
    }, 2000)
  }
 
  return (
    <Background>
      <AlertNotificationRoot>
      <InputsLoader visible={loading}/>
      <Text style={styles.gameText}>GAME HUB</Text> 
    <View style={styles.inputsContainer}>
      <Text style={styles.loginText}>Login</Text>
      <Inputs label={"Email"} iconName="email-outline" placeholder="Enter Email"
            onChangeText={(text) =>{handleOnChange(text, "email"); }}
            onFocus={() => handleError(null, "email")}
            error={errors.email}
            />
      <Inputs label={"Password"} iconName="lock-outline" placeholder="Enter Password" password 
            onChangeText={(text) =>{handleOnChange(text, "password");}}
            onFocus={() => handleError(null, "password")} 
            error={errors.password}/>

      <Button bgColor={orange} txtcolor={white} title="Login" onPress={validate}/>
    </View>
    </AlertNotificationRoot>
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