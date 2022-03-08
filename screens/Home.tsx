import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Alert, TextInput } from 'react-native';
import { RootStackParams } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../components/UI/CustomButton';

type Props = NativeStackScreenProps<RootStackParams, 'Screen_A'>;

export const Home = ({ navigation }: Props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem('UserData').then((value) => {
        if (value !== null) {
          let user = JSON.parse(value);
          setName(user.Name);
          setAge(user.Age);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const updateData = async () => {
    if (name.length === 0) {
      Alert.alert('Warning', 'Please write your name.');
    } else {
      try {
        const user = {
          Name: name,
        };
        await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
        Alert.alert('Success!', 'You have updated your name!');
      } catch (error) {
        console.log(error);
      }
    }
  };
  const removeData = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate('Login', {});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>Welcome {name} !</Text>
      <Text style={styles.containerText}>Your age is {age}.</Text>
      <TextInput
        placeholder='Enter your name'
        style={styles.input}
        value={name}
        onChangeText={(value) => {
          setName(value);
        }}
      />
      <CustomButton
        title='Update'
        color='#ff7f00'
        onPressFunction={updateData}
      />
      <CustomButton
        title='Remove'
        color='#f4010f'
        onPressFunction={removeData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff011',
    alignItems: 'center',
  },
  containerText: {
    fontSize: 40,
    margin: 10,
    fontFamily: 'CookieRegular',
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
