import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.subtitle}>Introduce tus datos</Text>

        <TextInput style={styles.input} placeholder="Correo electrónico" />
        <TextInput style={styles.input} placeholder="Contraseña"secureTextEntry />

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
        </Pressable>

        <Text style={styles.register}>¿No tienes cuenta? Regístrate</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 32,
    backgroundColor: '#0f172a',
  },
  card: {
    backgroundColor: 'white',
    padding: 26,
    borderRadius: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 24,
    marginBottom: 24,
    color: '#64748b',
  },
  input: {
    backgroundColor: '#f1f5f9',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#2563eb',
    padding: 16,
    borderRadius: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  register: {
    textAlign: 'center',
    marginTop: 22,
    color: '#64748b',
  },
});