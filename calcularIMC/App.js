import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState(null);

  const handlePesoInput = (text) => {
    const filtered = text.replace(/[^0-9.,]/g, "");
    setPeso(filtered);
  };

  const handleAlturaInput = (text) => {
    const filtered = text.replace(/[^0-9]/g, "");
    setAltura(filtered);
  };

  const calcularIMC = () => {
    setErro(null); 

    if (!peso || !altura) {
      setErro("Por favor, preencha peso e altura.");
      return;
    }

    const alturaMetros = parseFloat(altura.replace(",", ".")) / 100;
    const pesoKg = parseFloat(peso.replace(",", "."));

    if (isNaN(alturaMetros) || isNaN(pesoKg)) {
      setErro("Insira valores numéricos válidos.");
      return;
    }

    if (alturaMetros <= 0 || pesoKg <= 0) {
      setErro("Peso e altura devem ser maiores que zero.");
      return;
    }

    if (alturaMetros > 3 || pesoKg > 500) {
      setErro("Valores fora do limite permitido.");
      return;
    }

    const imc = pesoKg / (alturaMetros * alturaMetros);

    let classificacao = "";
    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 24.9) classificacao = "Peso normal";
    else if (imc < 29.9) classificacao = "Sobrepeso";
    else if (imc < 34.9) classificacao = "Obesidade grau I";
    else if (imc < 39.9) classificacao = "Obesidade grau II";
    else classificacao = "Obesidade grau III";

    setResultado(`IMC: ${imc.toFixed(2)} - ${classificacao}`);
  };

  const limparCampos = () => {
    setPeso("");
    setAltura("");
    setResultado(null);
    setErro(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={handlePesoInput}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={altura}
        onChangeText={handleAlturaInput}
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={calcularIMC}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.clearButton]}
          onPress={limparCampos}
        >
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {erro && <Text style={styles.error}>{erro}</Text>}
      {resultado && <Text style={styles.result}>{resultado}</Text>}
    </View>
  );
}
