import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Buenos días,</Text>
      <Text style={styles.user}>Laura 👋</Text>

      <View style={styles.goalCard}>
        <Text style={styles.goalLabel}>OBJETIVO DIARIO</Text>
        <Text style={styles.steps}>8.200</Text>

        <View style={styles.progressBackground}>
          <View style={styles.progress} />
        </View>
      </View>

      <Text style={styles.sectionTitle}>Resumen</Text>

      <View style={styles.grid}>
        <StatCard icon="🔥" value="610" />
        <StatCard icon="⏱" value="55 min" />
        <StatCard icon="❤️" value="69" />
        <StatCard icon="📍" value="6,3 km" />
      </View>

      <Text style={styles.sectionTitle}>Actividad reciente</Text>

      <Activity title="Carrera" detail="5,2 km · 28 min" />
      <Activity title="Bicicleta" detail="12 km · 42 min" />
    </ScrollView>
  );
}

function StatCard({ icon, value }: { icon: string; value: string }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statIcon}>{icon}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  );
}

function Activity({ title, detail }: { title: string; detail: string }) {
  return (
    <View style={styles.activity}>
      <Text style={styles.activityTitle}>{title}</Text>
      <Text style={styles.activityDetail}>{detail}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    paddingHorizontal: 32,
  },
  greeting: {
    marginTop: 70,
    color: 'white',
    fontSize: 18,
  },
  user: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 6,
    marginBottom: 14,
  },
  goalCard: {
    backgroundColor: '#064e2b',
    padding: 24,
    borderRadius: 22,
  },
  goalLabel: {
    color: 'white',
    fontSize: 16,
  },
  steps: {
    marginTop: 6,
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  progressBackground: {
    height: 10,
    backgroundColor: '#166534',
    borderRadius: 5,
    marginTop: 14,
    overflow: 'hidden',
  },
  progress: {
    width: '80%',
    height: '100%',
    backgroundColor: '#38ea79',
    borderRadius: 5,
  },
  sectionTitle: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  statCard: {
    width: '48%',
    height: 104,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statIcon: {
    fontSize: 24,
    marginRight: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  activity: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 18,
    marginBottom: 10,
  },
  activityTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  activityDetail: {
    marginTop: 4,
    color: '#64748b',
  },
});