import React from 'react';
import {View, ImageBackground, SafeAreaView} from 'react-native';

const Background = ({ children }) => {
  return (
    <SafeAreaView>
    <View>
      <ImageBackground source={require("./assets/collegefest.jpg")} style={{ height: '100%', width: '100%' }} />
      <View style={{ position: "absolute" }}>
        {children}
      </View>
    </View>
    </SafeAreaView>
  );
}

export default Background;
