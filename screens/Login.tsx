import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, TextInput, Alert } from 'react-native';
import CustomButton from '../components/UI/CustomButton';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../types';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => {},
  (error) => {
    console.log(error);
  }
);
type Props = NativeStackScreenProps<RootStackParams, 'Login'>;

export default function Login({ navigation }: Props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    createTable();
    getData();
  }, []);

  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS ' +
          'Users ' +
          '(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);'
      );
    });
  };

  const getData = () => {
    try {
      db.transaction((tx) => {
        tx.executeSql('SELECT Name, Age FROM Users', [], (tx, results) => {
          const len = results.rows.length;
          if (len > 0) {
            navigation.navigate('Home', {});
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setData = async () => {
    if (name.length == 0 || age.length == 0) {
      Alert.alert('Warning!', 'Please write your data.');
    } else {
      try {
        await db.transaction(async (tx) => {
          // await tx.executeSql(
          //     "INSERT INTO Users (Name, Age) VALUES ('" + name + "'," + age + ")"
          // );
          await tx.executeSql('INSERT INTO Users (Name, Age) VALUES (?,?)', [
            name,
            age,
          ]);
        });
        navigation.navigate('Home', {});
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.body}>
      <Image
        style={styles.logo}
        source={require('../assets/images/sqlite.png')}
      />
      <Text style={styles.text}></Text>
      <TextInput
        style={styles.input}
        placeholder='Enter your name'
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder='Enter your age'
        onChangeText={(value) => setAge(value)}
      />
      <CustomButton title='Login' color='#1eb900' onPressFunction={setData} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0080ff',
  },
  logo: {
    width: 200,
    height: 100,
    margin: 20,
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
    fontSize: 20,
    marginBottom: 10,
  },
});
