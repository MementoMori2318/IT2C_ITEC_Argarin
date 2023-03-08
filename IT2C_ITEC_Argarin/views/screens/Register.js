import * as React from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import Inputs from '../../components/Inputs';
import Background from '../../components/Background';
import Button from '../../components/Button';
import { orange, white } from '../../components/Color';

const Register = () => {
  const [inputs, setInputs] = React.useState({
    email:"",
    username:"",
    password:"",
    confirmpassword:"",
  })
  const handleError =(text, input) =>{
    setErrors(
      (prevState) =>({...prevState, [input] : text})
    );
  }
  const handleOnChange =(text, input) =>{
    setInputs(
      (prevState) =>({...prevState, [input] : text})
    );
  }
const [errors, setErrors] = React.useState({})
  const validate =() =>{
    console.log("Validate! = " + inputs);
    console.log(inputs);
    
    if (!inputs.email) {
      handleError("Please Input Email", "email")
    }else if(!inputs.email.match(/\S+@\S+.\S+/)){
      handleError("Please Input Valid Email", "email")
    }
    if(!inputs.username){
      handleError("Please Input UserName", "username")
    }
    if(!inputs.password){
      handleError("Please Input password", "password")
    }else if (!inputs.password.length < 8) {
      handleError("Minimun password length is 8", "password")
    }
    if(!inputs.confirmpassword){
      handleError("Please confirm password", "confirmpassword")
    }else if (!inputs.confirmpassword === password) {
      handleError("Password does not match!", "confirmpassword")
    }
  }
  return (
      <Background>
        <Text style={styles.gameText}>GAME HUB</Text>
        <View style={styles.inputsContainer}>
        <Text style={styles.registerText}>Register</Text>
          <Inputs label={"Email"} iconName="email-outline" placeholder="Enter Email" onChangeText={
            (text) =>{
              handleOnChange(text, "email");
            }
          }
          onFocus={
            () => handleError(null, "email")
          }
          error={errors.email}/>
          <Inputs label={"User Name"} iconName="account-outline" placeholder="Enter User Name" onChangeText={
            (text) =>{
              handleOnChange(text,"username");
            }
          }
          onFocus={
            () => handleError(null, "username")
          }
          error={errors.username}/>
          <Inputs label={"Password"} iconName="lock-outline" placeholder="Enter Password" password onChangeText={
            (text) =>{
              handleOnChange(text, "password");
            }
          }
          onFocus={
            () => handleError(null, "password")
          } error={errors.password}/>
          <Inputs label={"Confirm Password"} iconName="lock" placeholder="Confirm Password" password onChangeText={
            (text) =>{
              handleOnChange(text, "confirmpassword");
            }
          }
          onFocus={
            () => handleError(null, "confirmpassword")
          } error={errors.confirmpassword}/>

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