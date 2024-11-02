import * as React from 'react';
import { View, TextInput, Image, TouchableOpacity, Button, StyleSheet, Pressable, Text, SafeAreaView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useRoute } from '@react-navigation/native';
import Btn from './Btn';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { bg, white, violet, primary } from './Constants';

export default function Details(props) {
    const route = useRoute()
    const { Id, Name, College } = route?.params?.data;
    const rowNum = route?.params?.rowNum;
    console.log("Id, Name, College", Id, Name, College, rowNum);
    const handleMarkPresent = async () => {
        const res = await fetch(`https://sheet.best/api/sheets/1af26dc3-6107-4be7-90b6-26a93c382e4d/${rowNum}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ Id: Id, Name: Name, College: "College", DateTime: new Date().toString(), Status: 'Present' })
        });
        console.log("responseee", res);
        if (res.ok) {
            props.navigation.goBack();
        } else {
            alert("Problem in inserting data" + res.status)
        }
    };

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
                        <Image source={require("../src/assets/sardarcut.jpeg")}
                            style={{
                                height: 200,
                                width: 200,
                                borderRadius: 20,
                                position: "absolute",
                                top: 110,
                                left: 80,
                            }}
                        />
                    </View>

                    {/* content  */}
                    <View style={{
                        paddingHorizontal: 20,
                        position: "absolute",
                        top: 380,
                        left: 5,
                        width: "100%"
                    }}>
                        <View style={styles.container}>
                            <TextInput
                                style={styles.input}>
                                {College}
                            </TextInput>
                            <TouchableOpacity style={styles.btnEye}>
                                <MaterialCommunityIcons
                                    name={'check-decagram'}
                                    size={24}
                                    color={'dodgerblue'}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container}>
                            <TextInput
                                style={styles.input}>
                                {Name}
                            </TextInput>
                            <TouchableOpacity style={styles.btnEye}>
                                <MaterialCommunityIcons
                                    name={'check-decagram'}
                                    size={24}
                                    color={'dodgerblue'}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container}>
                            <TextInput
                                style={styles.input}>
                                {Id}
                            </TextInput>
                            <TouchableOpacity style={styles.btnEye}>
                                <MaterialCommunityIcons
                                    name={'check-decagram'}
                                    size={24}
                                    color={'dodgerblue'}
                                />
                            </TouchableOpacity>
                        </View>
                        <Btn bgColor={violet} textColor='white' btnLabel="Mark Present" Press={() => handleMarkPresent()} />
                    </View>

                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },
    input: {
        width: '80%',
        marginBottom: 10,
        padding: 10,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        color: 'white',
    },
    btnEye: {
        position: 'absolute',
        right: 40,
        top: 12,

    },
    signupText: {
        marginTop: 10,
        color: 'blue',
    },
});
