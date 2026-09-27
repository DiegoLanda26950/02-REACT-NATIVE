import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.subtitle}>Diseño de interfaces con React Native</Text>
        <View style={styles.button}>
          <Text style={styles.buttonText}>COMENZAR</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#191a1c',
  },
  card: {
    backgroundColor: '#fff5e2',
    padding: 28,
    borderRadius: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#e24a20'
  },
  subtitle: {
    marginTop: 25,
    fontSize: 20,
    color: '#64748b',
    textAlign: 'left',
    lineHeight: 35
  },
  button: {
    marginTop: 24,
    backgroundColor: '#eb860c',
    padding: 15,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
});