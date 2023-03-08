import * as React from 'react';
import { View, Text, ImageBackground, StatusBar } from 'react-native';


const Background = ({children}) => {
  return (
    <View>
      <ImageBackground source={require("../assets/game1.jpg")} style={{height : "100%",}}/>
      <View style={{position: 'absolute',alignSelf: "center", paddingTop: StatusBar.currentHeight,}}>
        {children}
      </View>
    </View>
  );
};

export default Background;