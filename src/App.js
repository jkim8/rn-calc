import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
export default function App() {
  const isError = true;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>RN Calc</Text>
      <Text style={[styles.text, isError && styles.error]}>RN Calc2</Text>
      <Button
        title="button"
        color={'green'}
        onPress={() => console.log('click')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 80,
    color: 'blue',
  },
  error: {
    fontSize: 40,
    color: 'red',
  },
});
