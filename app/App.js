import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export function Header() {
  return <Text style={styles.title}>Bem-vindo ao App de Perfil</Text>;
}

export function UserInfo({ nome, idade, email }) {
  return (
    <View style={styles.container}>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Email: {email}</Text>
    </View>
  );
}

export function MensagemPersonalizada({ nome }) {
  return <Text>Olá, {nome}! Que bom ver você por aqui.</Text>;
}

export function Footer() {
  return <Text>© 2025 - App de Perfil</Text>;
}

export default function App() {
  return (
    <View style={styles.scroll}>
      <View style={styles.container}>
        <Header />
        <UserInfo nome="Ana" idade={25} email="ana@email.com" />
        <MensagemPersonalizada nome="Ana" />
        <Footer />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  }
});
