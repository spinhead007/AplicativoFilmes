import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import { getDatabase, ref, onValue } from 'firebase/database';
import { app } from '../../../firebase'; // Verifique o caminho do arquivo de configuração

export default function Outros() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const db = getDatabase(app);
    const filmesRef = ref(db, 'filmes');

    const unsubscribe = onValue(filmesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const filmesArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key]
        }));
        setFilmes(filmesArray);
      } else {
        setFilmes([]);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Filmes Cadastrados</Text>
      {filmes.length > 0 ? (
        <FlatList
          data={filmes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.filmeContainer}>
              <Text style={styles.filmeNome}>Nome: {item.nome}</Text>
              <Text style={styles.filmeAno}>Ano: {item.ano}</Text>
              <Text style={styles.filmeSinopse}>Sinopse: {item.sinopse}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noFilmes}>Nenhum filme cadastrado</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  filmeContainer: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
  filmeNome: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 5,
  },
  filmeAno: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 5,
  },
  filmeSinopse: {
    fontSize: 14,
    color: '#bbb',
  },
  noFilmes: {
    color: '#fff',
    fontSize: 18,
    marginTop: 20,
  },
});
