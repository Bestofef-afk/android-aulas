import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import styles from './styles';

export default function App() {
  const [selectedStyle, setSelectedStyle] = useState(null);

  const buttons = [
    { id: 1, style: styles.buttonRed },
    { id: 2, style: styles.buttonBlue },
    { id: 3, style: styles.buttonGreen },
    { id: 4, style: styles.buttonPurple },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Botões</Text>

      <View style={styles.buttonContainer}>
        {buttons.map((btn) => (
          <TouchableOpacity
            key={btn.id}
            style={[styles.baseButton, btn.style]}
            onPress={() => setSelectedStyle(btn.style)}
          >
            <Text style={styles.buttonText}>Botão {btn.id}</Text>
          </TouchableOpacity>
        ))}
       
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Estilo do botão clicado:</Text>
        <ScrollView>
          <Text style={styles.infoText}>
            {selectedStyle
              ? JSON.stringify(StyleSheet.flatten(selectedStyle), null, 2)
              : 'Clique em um botão para ver as infos.'}
          </Text>
        </ScrollView>
        <TouchableOpacity
          style={[styles.baseButton, styles.buttonClear]}
          onPress={() => setSelectedStyle(null)}
        >
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
