import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Button, { ButtonTypes } from './components/Button';

export default function App() {
  const [result, setResult] = useState(0);
  const width = (useWindowDimensions().width - 5) / 4;
  // const { width } = useWindowDimensions();
  console.log(width);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.resultContainer}>
        <Text style={styles.result}>0</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.leftPad}>
          <View style={styles.number}>
            <Button
              title="1"
              onPress={() => {}}
              buttonStyle={{ width, height: width, marginBottom: 1 }}
            ></Button>
            <Button
              title="2"
              onPress={() => {}}
              buttonStyle={{ width, height: width, marginBottom: 1 }}
            ></Button>
            <Button
              title="3"
              onPress={() => {}}
              buttonStyle={{ width, height: width, marginBottom: 1 }}
            ></Button>
            <Button
              title="4"
              onPress={() => {}}
              buttonStyle={{ width, height: width, marginBottom: 1 }}
            ></Button>
          </View>
          <View style={styles.bottom}></View>
        </View>

        <View style={styles.operator}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  resultContainer: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  buttonContainer: {
    backgroundColor: 'skyblue',
    flexDirection: 'row',
  },
  result: { color: '#ffffff', fontSize: 60, fontWeight: '700', padding: 30 },
  leftPad: {},
  number: {},
  bottom: { flexDirection: 'row' },
  operator: {},
});
