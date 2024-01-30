import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`);
  }, [count]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    counterText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#fff',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginBottom: 10,
    },
    buttonText: {
      fontSize: 40,
      color: '#4c669f',
    },
  });

  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
      <Text style={styles.counterText}>Contador: {count}</Text>
      <TouchableOpacity style={styles.button} onPress={increment}>
        <Text style={styles.buttonText}>Incrementar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={decrement}>
        <Text style={styles.buttonText}>Decrementar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}