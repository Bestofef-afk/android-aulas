import { View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function App() {

  function codigoCor(cor){
   console.log(`codigo da cor: ${cor}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.ladoalado}>
       
        <View style={styles.area}>
          <TouchableOpacity style={styles.btn1} onPress={() => () => codigoCor(styles.btn1.backgroundColor)(styles.btn1.backgroundColor)}>

          </TouchableOpacity>
        </View>

        <View style={styles.area}>
          <TouchableOpacity style={styles.btn2} onPress={() => codigoCor(styles.btn1.backgroundColor)}>

          </TouchableOpacity>
        </View>
        
        <View style={styles.area}>
          <TouchableOpacity style={styles.btn3} onPress={() => codigoCor(styles.btn1.backgroundColor)}>

          </TouchableOpacity>
        </View>
        
        <View style={styles.area}>
          <TouchableOpacity style={styles.btn4} onPress={() => codigoCor(styles.btn1.backgroundColor)}>

          </TouchableOpacity>
        </View>
        
        <View style={styles.area}>
          <TouchableOpacity style={styles.btn5} onPress={() => codigoCor(styles.btn1.backgroundColor)}>

          </TouchableOpacity>
        </View>
        
        <View style={styles.area}>
          <TouchableOpacity style={styles.btn6} onPress={() => codigoCor(styles.btn1.backgroundColor)}>

          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

