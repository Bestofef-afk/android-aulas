import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import styles from './styles/HomeScreenStyles';
 // Importa o arquivo de estilo

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.jpg')} style={{ width: 150, height: 150, marginBottom: 20 }} />
      <Text style={styles.title}>Bem-vindo ao Alibabá!</Text>
      <Text style={styles.subtitle}>Sabores autênticos da culinária árabe</Text>
      <Button
        title="Ver Cardápio"
        onPress={() => navigation.navigate('Cardápio')}
        color="#8B4513"
      />
    </View>
  );
}

export default HomeScreen;