import React , {useState} from 'react';
import {View, Text, Touchable, SafeAreaView,TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen, violet} from './Constants';
import Field from './Field';
import axios from 'axios';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const API_KEY = 'AIzaSyC3h6CnzeDqk6qGSpxZASMI9RRO0YO1kSA'; // Replace with your actual API key
const SPREADSHEET_ID = '1Bn8LFwQ3CWUfNzE7pK1wa_vF-_VYYXe8tLxe5bY7xp8'; // Replace with your actual spreadsheet ID
const RANGE = 'Sheet1!A1:D10';

const Login = (props) => {

  const [show, setShow] = React.useState(false);
  const [visible, setvisible] = React.useState(true);
  const [username, setUsername] = useState('Sardar2023');
  const [password, setPassword] = useState('AmjcEuphoria');

  const handleLogin = async () => {
    if (username && password) {
      try {
        const response = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`);
        const data = response.data.values;
        const user = data.find(row => row[0] === username);

        if (user && user[1] === password) {
          props.navigation.navigate("Welcome")
        } else {
          alert('Invalid username or password');
        }
      } catch (error) {
        alert('Error fetching data:', error);
      }
    } else {
      alert('Please enter both username and password');
    }
  };
  
  const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '68%',
        padding: 10,

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 100,

        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {},
    
    btnEye:{
      position: 'absolute',
      right: 22,
      top: 12,

    },

    inputText: {
      color: 'gray',
      fontSize: 20,
      paddingLeft: 10,
      marginHorizontal: 10,
    },

});



  return (
    <SafeAreaView>
    <Background>
      <View style={{alignItems: 'center', width: 380}}>
        <Text
          style={{
            color: 'darkviolet',
            fontSize: 50,
            fontWeight: 'bold',
            marginVertical: 25,
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 45,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 40, color: violet, fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText = {(userName) => setUsername(userName)}
            value={username}
          />
          </View>
          <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            secureTextEntry={visible}
            onChangeText={(password) => setPassword(password)}
            value={password}
          />
          <TouchableOpacity style={styles.btnEye} onPress={
            () => {
              setvisible(!visible),
              setShow(!show)
            }
          }>
            <MaterialCommunityIcons 
             name={show === false ? 'eye-off-outline' : 'eye-outline'}
             size={24}
             color={'gray'}            
            />
          </TouchableOpacity>
          </View>
          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 30, marginBottom: 200}}>
            <Text style={{color: 'grey', fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
          </View>
          <Btn textColor='white' bgColor={violet} btnLabel="Login" Press={handleLogin} />
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight:"bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
    </SafeAreaView>
  );
};

export default Login;
