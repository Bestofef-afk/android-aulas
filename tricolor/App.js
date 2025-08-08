
import { Text, View } from 'react-native';
import { styles } from './styles';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.area1}>
        <Text style={styles.title}>Area1</Text>
      </View>
      <View style={styles.area2}>
       <Text style={styles.title}>Area2</Text>
      </View>
      <View style={styles.area3}>
        <Text style={styles.title}>Area3</Text>
      </View>
    </View>
  );
}

