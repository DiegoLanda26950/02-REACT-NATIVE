import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.hello}>Buenos días 👋</Text>
      <Text style={styles.user}>Laura</Text>

      <Balance />

      <Text style={styles.sectionTitle}>Acciones</Text>
      <View style={styles.actions}>
        <Action title="Enviar" />
        <Action title="Recibir" />
      </View>

      <Text style={styles.sectionTitle}>Movimientos</Text>

      <Movement title="Nómina" amount="+2.340 €" />
      <Movement title="Supermercado" amount="-42,80 €" />
      <Movement title="Cafetería" amount="-3,20 €" />
      <Movement title="Electricidad" amount="-74,20 €" />
    </ScrollView>
  );
}

function Balance() {
  return (
    <View style={styles.balanceCard}>
      <Text style={styles.balanceLabel}>Saldo disponible</Text>
      <Text style={styles.balance}>4.280,32 €</Text>
    </View>
  );
}

function Action({ title }: { title: string }) {
  return (
    <View style={styles.action}>
      <Text style={styles.actionText}>{title}</Text>
    </View>
  );
}

function Movement({ title, amount }: { title: string; amount: string }) {
  return (
    <View style={styles.movement}>
      <Text style={styles.movementTitle}>{title}</Text>
      <Text style={styles.amount}>{amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    paddingHorizontal: 32,
  },
  hello: {
    marginTop: 70,
    color: 'white',
    fontSize: 18,
  },
  user: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    marginBottom: 16,
  },
  balanceCard: {
    backgroundColor: '#020617',
    borderRadius: 22,
    padding: 24,
  },
  balanceLabel: {
    color: 'white',
    fontSize: 16,
  },
  balance: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 6,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 28,
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
  },
  action: {
    flex: 1,
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 18,
  },
  actionText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#1e293b',
  },
  movement: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 20,
    marginBottom: 10,
  },
  movementTitle: {
    flex: 1,
    fontSize: 19,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  amount: {
    fontSize: 18,
    color: '#1e293b',
  },
});