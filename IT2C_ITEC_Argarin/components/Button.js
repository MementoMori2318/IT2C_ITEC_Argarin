import { StyleSheet, Text, View, StatusBar, SafeAreaView, ScrollView,TextInput, TouchableOpacity } from 'react-native';
import Background from './Background';

const Button = ( {title, onPress=() => {} } ) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btn }>
            <Text style={{color: "#FFF", fontWeight: "bold", fontSize: 18}}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
   btn:{height: 55, 
    width: "100%", 
    backgroundColor: "#2FCBD0", 
    justifyContent: "center", 
    alignItems: "center",
    borderRadius: 10, 
    marginVertical: 20}
  });
export default Button;