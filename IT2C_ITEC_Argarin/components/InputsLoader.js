import * as React from 'react';
import { Text, View, StyleSheet, useWindowDimensions } from "react-native";
import { PacmanIndicator, } from 'react-native-indicators';
  
const InputsLoader = ({visible = false}) => {
    const { width, height } = useWindowDimensions();
    return(
        visible && (
            <View style={[styles.loaderContainer, { width, height }]}>
            <View style={styles.loader}>
                <PacmanIndicator color='#FFFF00' size={120}/>
                <Text style={styles.load}>Loading ...</Text>
            </View>
            </View>
        )
    );
}
const styles = StyleSheet.create({
    loader: {
        height: 100,
        marginHorizontal: 50,
        paddingHorizontal: 20,
        alignSelf: "center"
    },
    loaderContainer: {
        position: 'absolute',
        zIndex: 20,
        backgroundColor: 'rgba(0,0,0,.5)',
        justifyContent: 'center'
    },
    load: {
        color:'#FFFF00',
        fontSize: 30,
        fontWeight: '500',
    }
})

export default InputsLoader;