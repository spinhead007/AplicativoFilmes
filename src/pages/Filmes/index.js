import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import axios from 'axios';

export default function Filmes() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const loadFilmes = async () => {
      try {
        const response = await axios.get('https://sujeitoprogramador.com/r-api/?api=filmes');
        setFilmes(response.data);
      } catch (error) {
        console.error('Erro ao carregar filmes:', error);
      }
    };

    loadFilmes();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={filmes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.foto }} style={styles.image} />
            <Text style={styles.title}>{item.nome}</Text>
            <Text style={styles.sinopse}>{item.sinopse}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // fundo preto
    alignItems: 'center',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center', // Centraliza os itens
  },
  title: {
    color: '#fff', // texto branco
    fontSize: 18,
    marginVertical: 5,
  },
  sinopse: {
    color: '#fff', // texto da sinopse em branco
    fontSize: 14,
    textAlign: 'center', // Centraliza o texto da sinopse
    marginVertical: 5,
  },
  image: {
    width: 100, // Largura da imagem
    height: 150, // Altura da imagem
    borderRadius: 10, // Bordas arredondadas na imagem
  },
});
