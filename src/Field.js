import React ,{useState} from 'react';
import {TextInput} from 'react-native';
import {darkGreen, violet} from './Constants';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Field = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <TextInput
      {...props}
      style={{borderRadius: 100, 
        padding: 10, 
        color: 'black', 
        paddingHorizontal: 10, 
        width: '68%', 
        backgroundColor: 'rgb(220,220, 220)', 
        marginVertical: 10}}
        placeholderTextColor={'grey'}>
      </TextInput>

  );
};

export default Field;
