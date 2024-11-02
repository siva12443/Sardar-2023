import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Button, Alert, SafeAreaView } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Background from "./Background";
import { LinearGradient } from "expo-linear-gradient";
import { bg, white, black, primary, secondary, grey } from './Constants';

// import QRCodeScanner from 'react-native-qrcode-scanner';
// import { RNCamera } from 'react-native-camera';

const SheetUrl = "https://sheet.best/api/sheets/1af26dc3-6107-4be7-90b6-26a93c382e4d"
export default function BarCode(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [existingStudents, setExistingStudents] = useState([]);
  const [studentsList, setStudentsList] = useState([]);
  const BarCodeRef = useRef();

  const sampleData = [
    {
      studentName: 'Siva',
      studentId: '21g110',
      collegeName: 'St. Joseph'
    },
    {
      studentName: 'Venky',
      studentId: '21cs021',
      collegeName: 'Gurunanak'
    },
    {
      studentName: 'Keerthi',
      studentId: '21cs056',
      collegeName: 'Keerthana'
    }];

  useEffect(() => {
    const subscribe = props.navigation.addListener('focus', () => {
      console.log("focussed", scanned);
      // setScanned(false);
      setScanned(false);
      getPresentData();
      // getStudentList();
    });
    return subscribe;
  }, []);

  // const getStudentList = async () => {
  //   try {
  //     const res = await fetch("https://sheet.best/api/sheets/214a8d40-c912-44e0-8a89-bb24455f4217");
  //     const data = await res.json();
  //     console.log("daattata", data);
  //     if (Array.isArray(data)) {
  //       // Extract all 'Id' values from the array of objects
  //       // const existingStudentIds = data.map(item => item.Id);
  //       // setExistingStudents(existingStudentIds);
  //       setStudentsList(data)
  //     } else {
  //       alert("Data is not in the expected format.");
  //     }
  //   } catch (error) {
  //     alert("Please connect to the Internet.");
  //   }
  // };

  const getPresentData = async () => {
    try {
      const res = await fetch(SheetUrl);
      const data = await res.json();
      console.log("daattata", data);
      if (Array.isArray(data)) {
        // Extract all 'Id' values from the array of objects
        // const existingStudentIds = data.map(item => item.Id);
        setExistingStudents(data);
      } else {
        alert("Data is not in the expected format.");
      }
    } catch (error) {
      alert("Please connect to the Internet.");
    }
  };

  // Function to find studentName and collegeName by studentId
  function findStudentDetails(inputId) {
    const student = existingStudents.find(student => student.Id === inputId);
    const index = existingStudents.indexOf(student);
    console.log("student",student);
    if (student) {
      return { result: student, rowNum: index };
      // return {
      //   studentName: student.studentName,
      //   collegeName: student.collegeName
      // };
    } else {
      return null; // Return null if no match is found
    }
  }

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
    // getPresentData()
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    console.log("data", data);
    setScanned(true);
    const student = findStudentDetails(data);
    console.log("student",student);
    if (student == null) {
      Alert.alert(
        'Student Not Found',
        `Student with ID ${data} not found.`,
        [
          {
            text: 'OK',
            onPress: () => {
              setScanned(false)
            },
          },
        ],
        { cancelable: false }
      );
    }
    else if (student?.result?.Status === 'Present') {
      Alert.alert(
        'Student Already Exists',
        `Student with ID ${data} is already present.`,
        [
          {
            text: 'OK',
            onPress: () => {
              setScanned(false)
            },
          },
        ],
        { cancelable: false }
      );
    } else if (student?.result?.Status === null) {
      props.navigation.navigate("Details",{data:student?.result , rowNum:student?.rowNum})
      // props.navigation.navigate("Details", { data: [result.Name, result.College, data], rowNum: index })
    }
    return;
    if (!existingStudents.includes(data)) {
      props.navigation.navigate("Details", { data: [result.studentName, result.collegeName, data] })
    } else {
      Alert.alert(
        'Student Already Exists',
        `Student with ID ${data} is already present.`,
        [
          {
            text: 'OK',
            onPress: () => {
              setScanned(false)
            },
          },
        ],
        { cancelable: false }
      );
    }

  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  // Return the View
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.barcodebox}>
          {!scanned && <BarCodeScanner
            // ref={BarCodeRef}
            onBarCodeScanned={handleBarCodeScanned}
            style={{ height: 300, width: 400 }} />}

        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 40,
    marginVertical: 100,
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 500,
    width: 300,
    overflow: 'hidden',
    borderRadius: 20,
    backgroundColor: 'white',
  }
});