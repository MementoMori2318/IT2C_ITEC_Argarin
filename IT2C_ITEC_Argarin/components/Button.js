import { StyleSheet, Text,TouchableOpacity } from 'react-native';


const Button = ( {bgColor, txtcolor ,title, onPress=() => {} } ) => {
    return (
        <TouchableOpacity onPress={onPress} style={{height: 55, 
                width: "100%", 
                backgroundColor: bgColor, 
                justifyContent: "center", 
                alignItems: "center",
                borderRadius: 10, 
                marginVertical: 20}}>
            <Text style={{color: txtcolor, fontWeight: "bold", fontSize: 18,}}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
   
  });
export default Button;