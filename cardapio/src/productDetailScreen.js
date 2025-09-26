import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styles/ProductDetailScreenStyles'; // Importa o arquivo de estilo

function ProductDetailScreen({ route }) {
  const { produto } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={produto.imagem} style={styles.fullImage} />
      <View style={styles.content}>
        <Text style={styles.productName}>{produto.nome}</Text>
        <Text style={styles.productPrice}>{produto.preco}</Text>
        <Text style={styles.productDescription}>{produto.descricao}</Text>
      </View>
    </ScrollView>
  );
}

export default ProductDetailScreen;