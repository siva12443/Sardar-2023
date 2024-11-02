import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Signup from './src/Signup';
import Login from './src/Login';
import BarCodeScanner from './src/BarCodeScanner';
import HomeScreen from './src/HomeScreen';
import Welcome from './src/Welcome';
import Details from './src/Details';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name="BarCodeScanner" component={BarCodeScanner} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;