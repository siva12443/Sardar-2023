import React from "react";
import { View, Text, TextInput, StyleSheet, SafeAreaView } from "react-native";

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <SafeAreaView>
        <View style={styles.container}>
          <TextInput 
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            style={styles.inputText} 
            secureTextEntry={secureTextEntry}
            />
        </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '70%',
        padding: 10,

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 100,

        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {},
});

export default CustomInput;