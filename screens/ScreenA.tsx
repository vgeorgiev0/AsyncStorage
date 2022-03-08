import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { RootStackParams } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParams, 'Screen_A'>;

export const ScreenA = ({ route, navigation }: Props) => {
  const Users = [
    {
      id: 1,
      name: 'User A',
    },
    {
      id: 2,
      name: 'User B',
    },
    {
      id: 3,
      name: 'User C',
    },
    {
      id: 4,
      name: 'User D',
    },
    {
      id: 5,
      name: 'User E',
    },
  ];

  const [name, setName] = useState('');

  const onPressHandler = () => {
    for (const user of Users) {
      setName(user.name);
    }
    // @ts-ignore
    // navigation.navigate('Screen_B');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>Hello from screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({
          backgroundColor: pressed ? '#ddd' : '#0f0',
        })}
      >
        <Text style={styles.containerText}>Get the last user</Text>
      </Pressable>
      <Text style={styles.containerText}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff011',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerText: {
    fontSize: 40,
    margin: 10,
    fontFamily: 'Bebas',
  },
});
