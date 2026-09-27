import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>

      <Text style={styles.subtitle}>Mi primera pantalla</Text>

      <Text style={styles.course}>Curso 2026/27</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262930',
    borderRadius: 35,
    margin: 20,
    borderWidth: 10,
    borderColor: '#262930',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  subtitle: {
    marginTop: 25,
    fontSize: 22,
    color: '#7187a5',
  },

  course: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#84d9dc',
  },
});