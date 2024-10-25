import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      // colores del gradiente
      colors={['#FF5733', '#33FF57']}
      style={styles.container}
    >
      <View style={styles.container}>
        <Image source={require('./assets/logo.png')} style={{
          width: 200,
          height: 200,
        }} />
        <Text style={styles.text}>Texto</Text>
        <StatusBar style="auto" />
        <Image source={{
          uri: 'https://cards.algoreducation.com/_next/image?url=https%3A%2F%2Ffiles.algoreducation.com%2Fproduction-ts%2F__S3__1d3390a4-fc4d-4562-b76d-58d45ac6a3ca&w=1920&q=75',
        }} style={{
          width: 200,
          height: 200,
        }} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#39b54a',
    fontSize: 20,
    fontWeight: '600',
  },
});
