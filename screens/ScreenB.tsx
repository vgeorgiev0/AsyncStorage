import { View, StyleSheet, Pressable, Text } from 'react-native';
import { RootStackParams } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParams, 'Screen_B'>;

export const ScreenB = ({ route, navigation }: Props) => {
  const { itemName, itemId } = route.params;

  const onPressHandler = () => {
    navigation.navigate('Screen_A', { Message: 'message from B' });
    navigation.setParams({ itemId: 15 });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>Hello from screen B</Text>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({
          backgroundColor: pressed ? '#ddd' : '#0f0',
        })}
      >
        <Text style={styles.containerText}>Go to screen A</Text>
      </Pressable>
      <Text style={[styles.containerText]}>{itemName}</Text>
      <Text style={styles.containerText}>ID : {itemId}</Text>
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
