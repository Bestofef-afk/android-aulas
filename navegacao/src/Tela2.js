import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function Tela2({ navigation }) {

  function voltar() {
    navigation.navigate('Principal');
  }

  return (
    <View style={styles.container}>
      <Text>Tela 2</Text>

      <TouchableOpacity style={styles.buttons} onPress={voltar}>
        <Text>Tela principal</Text>
      </TouchableOpacity>

    </View>
  );
}








const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        flex: 1,
        alignItems: 'center',        
    },
    title: {
        marginTop: 100,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 50
    },
    buttons: {
        width: '50%',
        height: 40,
        backgroundColor: '#ff9900',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 15
    },
    textButtons: {
        fontSize: 17,
        fontWeight: 'bold'
    }
});