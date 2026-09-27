import { FlatList, StyleSheet, Text, View } from 'react-native';

const products = [
  { id: '1', icon: '⌨️', name: 'Teclado', price: '59 €' },
  { id: '2', icon: '🖱️', name: 'Ratón', price: '39 €' },
  { id: '3', icon: '🖥️', name: 'Monitor', price: '199 €' },
  { id: '4', icon: '🎧', name: 'Auriculares', price: '79 €' },
  { id: '5', icon: '💻', name: 'Portátil', price: '899 €' },
  { id: '6', icon: '📱', name: 'Móvil', price: '599 €' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos</Text>

      <FlatList
        data={products}
        numColumns={2}
        columnWrapperStyle={styles.row}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 70,
    backgroundColor: '#0f172a',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 12,
  },
  row: {
    gap: 10,
  },
  card: {
    flex: 1,
    height: 110,
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 20,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 32,
  },
  name: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  price: {
    marginTop: 4,
    color: '#2563eb',
    fontWeight: 'bold',
    fontSize: 14,
  },
});