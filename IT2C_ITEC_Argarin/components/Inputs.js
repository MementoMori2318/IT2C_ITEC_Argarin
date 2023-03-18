import { StyleSheet, Text, View, StatusBar, SafeAreaView, ScrollView,TextInput } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Inputs = ({label, iconName, password, error, onFocus = () =>{}, ...props}) => {
    const [hidePassword, setHidePassword] = React.useState(password);
    const [isFocused, setIsFocused] = React.useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
          
            <View style={[styles.inputContainer,{borderColor: isFocused ? "#1DE2D8"  : "#BABBC3"}, ]}>
          
            <Icon name={iconName} style={styles.icon}/>
               <TextInput
                    onFocus={
                        () => {
                            onFocus();
                            setIsFocused(true);
                        }
                    }
                    onBlur={
                        () => {
                            setIsFocused(false);
                        }
                    }
                    secureTextEntry={hidePassword}
                    style={styles.input} 
                    {...props}
                />
                {
                    password && (
                        <Icon 
                        onPress={
                            ()=>{setHidePassword(!hidePassword)}
                        }
                        name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                        style={styles.iconPass} />
                    )
                }
                </View>
                {
                    error && (
                        <Text style={styles.labelError}>
                            {error}
                        </Text>
                    )
                }
        </View>
       
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    inputContainer:{
        flexDirection: 'row',
        borderWidth: 1,
        backgroundColor: "#f3f4fb",
        height: 55,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    icon: {
        fontSize: 25,
        marginTop: 15,
        color: "#cc0606",
        marginRight: 10,
    },
    iconPass: {
        fontSize: 25,
        marginTop: 15,
        color: "#cc0606",
        marginLeft: -30,
        
    },
    label: {
        fontSize: 14,
        marginVertical: 5,
        color: "#babbc3",
    },
    input: {
        width: 300,
        
    },
    labelError: {
        color: "#ff4040",
        marginTop: 2,
        fontSize:8
    }
})
export default Inputs;