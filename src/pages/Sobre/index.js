import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Sobre() {
  const navigation = useNavigation(); // Hook para acessar a navegação

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      
      <View style={styles.buttonContainer}>
        <Button title="Filmes" onPress={() => navigation.navigate('Filmes')} />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button title="Cadastro de Filmes" onPress={() => navigation.navigate('Cadastro')} />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button title="Filmes Cadastrados" onPress={() => navigation.navigate('Outros')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '60%',
  },
});
