import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from 'react-native-safe-area-context';
import { bg, white, black, primary, secondary, grey } from './Constants';

export default function HomeScreen({ navigation }) {
    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[bg, primary]}
        >
            
       <SafeAreaView>
            <View style={{ flex: 1 }}>
                <View>
                    <Image
                        source={require("../src/assets/amj.jpeg")}
                        style={{
                            height: 110,
                            width: 310,
                            borderRadius: 10,
                            position: "absolute",
                            top: 10,
                            transform: [
                                { translateX: 20 },
                                { translateY: 20 },
                                { rotate: "-0deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../src/assets/euphoria.jpeg")}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: 130,
                            left: -40,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "10deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../src/assets/sardarcut.jpeg")}
                        style={{
                            height: 200,
                            width: 200,
                            borderRadius: 20,
                            position: "absolute",
                            top: 110,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-10deg" }
                            ]
                        }}
                    />
                </View>

                {/* content  */}

                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 400,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 48,
                        fontWeight: 800,
                        color: white
                    }}>Welcome To</Text>
                    <Text style={{
                        fontSize: 40,
                        fontWeight: 800,
                        color: white
                    }}>Sardar 2023</Text>

                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 16,
                            color: white,
                            marginVertical: 4
                        }}>Connect with each other with chatting</Text>
                        <Text style={{
                            fontSize: 16,
                            color: white,
                        }}>Euphoria 2K23</Text>
                    </View>
                    </View>
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}
