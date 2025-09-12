// App.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { traduzirTexto } from "./traducao_Azure"; // importa função de tradução

export default function App() {
  const [hex, setHex] = useState("#FF5733");
  const [lang, setLang] = useState("pt");
  const [colorName, setColorName] = useState("");
  const [translated, setTranslated] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    setLoading(true);
    try {
      const cleanHex = hex.replace("#", "");

      // 🔹 Pega nome da cor (em inglês) pela The Color API
      const colorRes = await fetch(`https://www.thecolorapi.com/id?hex=${cleanHex}`);
      const colorData = await colorRes.json();
      const nameEn = colorData.name.value;
      setColorName(nameEn);

      // 🔹 Traduz usando o arquivo externo
      const trad = await traduzirTexto(nameEn, lang);
      setTranslated(trad);
    } catch (err) {
      console.error("Erro:", err);
      setColorName("Erro ao buscar cor");
      setTranslated("");
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tradutor de Cores 🎨</Text>

      <TextInput
        style={styles.input}
        value={hex}
        onChangeText={setHex}
        placeholder="#FF5733"
      />

      <TextInput
        style={styles.input}
        value={lang}
        onChangeText={setLang}
        placeholder="Idioma (pt, es, fr, de...)"
      />

      <TouchableOpacity style={styles.button} onPress={handleTranslate}>
        <Text style={styles.buttonText}>
          {loading ? "Carregando..." : "Traduzir Cor"}
        </Text>
      </TouchableOpacity>

      {colorName !== "" && (
        <View style={styles.result}>
          <Text style={styles.resultText}>Cor (EN): {colorName}</Text>
          <Text style={styles.resultText}>Traduzido: {translated}</Text>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: hex,
              marginTop: 15,
              borderRadius: 10,
              borderWidth: 1,
            }}
          />
        </View>
      )}
    </View>
  );
}
