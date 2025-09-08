import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';

export default function App() {
  const [colors, setColors] = useState(Array(16).fill('#FFFFFF'));
  const [selectedColor, setSelectedColor] = useState({ hex: '#FFFFFF', name: 'White'});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchColors();
  }, []);

  async function fetchColors() {
    try {
      setLoading(true);
     const promises = Array.from ({ length: 16 }, () => fetch('https://www.thecolorapi.com/random').then(res => res.json()));
     const data = await Promise.all(promises);
     const newColors = data.map (data => ({ name: data.name.value, hex: data.hex.value}));
      setColors(newColors);
      setSelectedColor(newColors[5]);
    } catch (error) {
      console.error('Erro ao buscar cores:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paleta de Cores</Text>

      <View style={[styles.colorBox, { backgroundColor: selectedColor.hex }]}>
        <Text style={styles.colorText}>{selectedColor.hex} - {selectedColor.name}</Text>
        
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <View style={styles.grid}>
          {colors.map((c, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.button, { backgroundColor: c.hex }]}
              onPress={() => setSelectedColor(c)}
            />
          ))}
        </View>
      )}

      <TouchableOpacity style={styles.reloadBtn} onPress={fetchColors}>
        <Text style={styles.reloadText}>🔄 Novas cores</Text>
      </TouchableOpacity>
    </View>
  );
}
