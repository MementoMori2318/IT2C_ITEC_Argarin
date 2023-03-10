import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Inputs from '../../components/Inputs';
import Background from '../../components/Background';
import Button from '../../components/Button';
import { orange, white } from '../../components/Color';
import InputsLoader from '../../components/InputsLoader';

const Register = () => {
  const [inputs, setInputs] = React.useState({
    email:"",
    username:"",
    password:"",
    confirmPassword:"",
  })
const handleError =(text, input) =>{setErrors(
    (prevState) =>({...prevState, [input] : text}));
  }
const handleOnChange =(text, input) =>{
    setInputs((prevState) =>({...prevState, [input] : text}));
  }
const [errors, setErrors] = React.useState({})
  
const validate =() =>{
    var valid = true;

    if (!inputs.email) {
      handleError("Please Input Email", "email")
      valid = false;
    }else if(!inputs.email.match(/\S+@\S+.\S+/)) {
      handleError("Please Input Valid Email", "email")
      valid = false;}
    if(!inputs.username) {
      handleError("Please Input UserName", "username")
      valid = false;}
    if(!inputs.password) {
      handleError("Please Input password", "password")
      valid = false;
    }else if (inputs.password.length < 6) {
      handleError("Password is to short", "password")
      valid = false;}
    if(!inputs.confirmPassword) {
      handleError("Please confirm password", "confirmPassword")
      valid = false;
    }else if (inputs.confirmPassword != inputs.password) {
      handleError("Password does not match!", "confirmPassword")
      valid = false;}

    if (valid == true) {
      register();}
  }

  const register= () => {
    console.log("register");
    console.log(inputs); 
  }
  const [loading, setLoading] = React.useState(true);
  return (
      <Background>
        <InputsLoader visible={loading}/>
        <Text style={styles.gameText}>GAME HUB</Text>
        <View style={styles.inputsContainer}>
        <Text style={styles.registerText}>Register</Text>
          <Inputs label={"Email"} iconName="email-outline" placeholder="Enter Email"
          onChangeText={(text) =>{handleOnChange(text, "email"); }}
          onFocus={() => handleError(null, "email")}
          error={errors.email}/>

          <Inputs label={"User Name"} iconName="account-outline" placeholder="Enter User Name" 
          onChangeText={(text) =>{handleOnChange(text,"username");}}
          onFocus={() => handleError(null, "username")}
          error={errors.username}/>

          <Inputs label={"Password"} iconName="lock-outline" placeholder="Enter Password" password 
          onChangeText={(text) =>{handleOnChange(text, "password");}}
          onFocus={() => handleError(null, "password")} 
          error={errors.password}/>

          <Inputs label={"Confirm Password"} iconName="lock" placeholder="Confirm Password" password 
          onChangeText={(text) =>{handleOnChange(text, "confirmPassword");}}
          onFocus={() => handleError(null, "confirmPassword")} 
          error={errors.confirmPassword}/>

          <Button bgColor={orange} txtcolor={white} title="Register" onPress={validate}/>
          
      </View>
     </Background>
    
  );
};

const styles = StyleSheet.create({
  inputsContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
    height: 710,
    width: 400,
    borderTopLeftRadius: 150,
  },
  gameText: {
    fontSize: 55, 
    color: "#fff", 
    fontWeight: "600", 
    alignSelf: 'center'
  },
  registerText:{
    fontSize: 30, 
    color: "#ff2626", 
    fontWeight: "600", 
    alignSelf: 'center'
  }
});
export default Register;