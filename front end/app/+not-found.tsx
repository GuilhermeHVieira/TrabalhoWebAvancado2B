import { Link } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';

export default function NotFoundPage() {
  return (
    <View style={styles.container}>
      <Text>Página não encontrada.</Text>
      <Link href="/">Voltar para a página inicial</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});