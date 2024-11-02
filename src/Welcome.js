import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BarCodeScanner from './BarCodeScanner';
import HomeScreen from './HomeScreen';

// Screen Names
const homeName = 'Home';
const BarCode = 'QR Code Scanner';



const Tab = createBottomTabNavigator();

export default function Welcome() {
    return (
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                let iconName;
                let rn = route.name;

                if (rn === homeName) {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (rn === BarCode) {
                    iconName = focused ? 'qr-code' : 'qr-code-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />
              },
            })}
            
            
            >
               
            <Tab.Screen name={homeName} component={HomeScreen}/>
            <Tab.Screen name={BarCode} component={BarCodeScanner}/>
            
            </Tab.Navigator>
    )
}