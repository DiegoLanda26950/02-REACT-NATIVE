import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://picsum.photos/600/400' }}
          style={styles.image}
        />

        <View style={styles.content}>
          <Text style={styles.category}>OFERTA</Text>
          <Text style={styles.title}>Auriculares Wireless</Text>
          <Text style={styles.rating}>⭐ 4.8</Text>

          <View style={styles.bottom}>
            <Text style={styles.price}>89,99 €</Text>

            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>AÑADIR</Text>
            </Pressable>
          </View>
        </View>
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
    borderRadius: 24,
    overflow: 'hidden',
  },
  image: {
    width: '80%',
    height: 150,
    alignSelf: 'center',
    marginTop: 24,
    borderRadius: 16,
  },
  content: {
    padding: 24,
  },
  category: {
    color: '#e23c3c',
    backgroundColor: '#edc0c0',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    fontWeight: 'bold',
    fontSize: 14,
  },
  title: {
    marginTop: 6,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#131820',
  },
  rating: {
    marginTop: 22,
    fontSize: 18,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#141b2b',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});