import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.grid}>
        <Metric title="Ventas" value="12.450 €" />
        <Metric title="Clientes" value="348" />
        <Metric title="Pedidos" value="1.024" />
        <Metric title="Conversión" value="7,4%" />
        <Metric title="Tickets" value="86" />
      </View>
    </View>
  );
}

function Metric({ title, value }: { title: string; value: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    paddingTop: 70,
    backgroundColor: '#141b2c',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 12,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },

  card: {
    width: '48%',
    height: 110,
    backgroundColor: 'white',
    padding: 26,
    borderRadius: 20,
  },

  label: {
    color: '#334155',
    fontSize: 16,
  },

  value: {
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 4,
    color: '#1e293b',
  },
});