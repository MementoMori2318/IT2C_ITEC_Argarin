import * as React from 'react';
import { Text, View, StyleSheet, useWindowDimensions } from "react-native";
import { MaterialIndicator } from 'react-native-indicators';
  
const InputsLoader = ({visible = false}) => {
    const { width, height } = useWindowDimensions();
    return(
        visible && (
            <View style={[styles.loaderContainer, { width, height }]}>
            <View style={styles.loader}>
                <MaterialIndicator color='#f72a1b' size={150} trackWidth={15}/>
                
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
        backgroundColor: 'rgba(0,0,0,.9)',
        justifyContent: 'center',
        
    },
    load: {
        color:'#FFFF00',
        fontSize: 30,
        fontWeight: '500',
    }
})

export default InputsLoader;