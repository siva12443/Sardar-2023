import React from "react";
import { View, StyleSheet, Text, SafeAreaView, LogBox } from "react-native";
import Background from "./Background";
import Btn from "./Btn";
import { darkGreen, green, violet } from "./Constants";

const Home = (props) => {
    return (
        <SafeAreaView>
        <Background>
        <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
        <Text style={{ color: 'purple', fontSize: 40 }}>Let's start</Text>
        <Text style={{ color: 'purple', fontSize: 40, marginBottom: 40 }}>Sardar 2023</Text> 
        <Btn bgColor={violet} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
        <Btn bgColor='white' textColor={violet} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />   
        </View> 
        </Background>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})

export default Home;