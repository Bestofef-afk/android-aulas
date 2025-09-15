import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { PRODUTOS } from '../data/data'; // caminho ajustado
import styles from './styles/MenuScreenStyles'; // Importa o arquivo de estilo

function MenuScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate('Detalhe do Produto', { produto: item })}
    >
      <Image source={item.imagem} style={styles.productImage} />
      <Text style={styles.productName}>{item.nome}</Text>
      <Text style={styles.productPrice}>{item.preco}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={PRODUTOS}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
}

export default MenuScreen;