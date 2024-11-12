import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { getDatabase, ref, push } from 'firebase/database';
import { app } from '../../../firebase'; // Certifique-se que o caminho está correto

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [sinopse, setSinopse] = useState('');
  const [ano, setAno] = useState('');

  const salvarFilme = () => {
    if (nome && sinopse && ano) {
      const db = getDatabase(app);
      const filmesRef = ref(db, 'filmes');

      push(filmesRef, {
        nome: nome,
        sinopse: sinopse,
        ano: ano
      })
        .then(() => {
          Alert.alert('Sucesso', 'Filme salvo com sucesso!');
          setNome('');
          setSinopse('');
          setAno('');
        })
        .catch((error) => {
          Alert.alert('Erro', 'Erro ao salvar o filme: ' + error.message);
        });
    } else {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Filme</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Filme"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Sinopse"
        value={sinopse}
        onChangeText={setSinopse}
      />
      <TextInput
        style={styles.input}
        placeholder="Ano"
        value={ano}
        onChangeText={setAno}
        keyboardType="numeric"
      />
      <Button title="Salvar Filme" onPress={salvarFilme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
});
