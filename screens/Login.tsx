import { Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomButton from '../components/UI/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParams } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParams, 'Login'>;

const Login = (props: Props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem('UserData').then((value) => {
        if (value !== null) {
          // @ts-ignore
          props.navigation.navigate('Home');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setData = async () => {
    if (name.length === 0 || age.length === 0) {
      Alert.alert('Warning', 'Please write your name.');
    } else {
      try {
        const user = {
          Name: name,
          Age: age,
        };
        await AsyncStorage.setItem('UserData', JSON.stringify(user));
        props.navigation.navigate('Home', {});
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.body}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />
      <Text style={styles.text}>Async Storage</Text>
      <TextInput
        placeholder='Enter your name'
        style={styles.input}
        onChangeText={(value) => {
          setName(value);
        }}
      />
      <TextInput
        placeholder='Enter your age'
        style={styles.input}
        onChangeText={(value) => {
          setAge(value);
        }}
      />
      <CustomButton title='Confirm' color='#1eb900' onPressFunction={setData} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0080ff',
  },
  logo: {
    width: 100,
    height: 100,
    margin: 50,
  },
  text: {
    fontSize: 30,
    color: '#ffffff',
    marginBottom: 130,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 10,
  },
});
