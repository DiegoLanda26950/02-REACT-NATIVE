import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Noticias</Text>

      <NewsCard category="TECNOLOGÍA" title="IA y desarrollo" />
      <NewsCard category="MÓVIL" title="React Native" />
      <NewsCard category="CLOUD" title="Arquitecturas cloud" />
      <NewsCard category="DISEÑO" title="Interfaces accesibles" />
    </ScrollView>
  );
}

function NewsCard({ category, title }: { category: string; title: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    paddingHorizontal: 32,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 60,
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    padding: 26,
    borderRadius: 22,
    marginBottom: 12,
  },
  category: {
    color: '#1197bcc6',
    fontSize: 16,
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
  },
});