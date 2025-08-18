import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  baseButton: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonRed: {
    backgroundColor: 'black',
    borderRadius: 0, // quadrado
    width: 100,
    height: 50,
  },
  buttonBlue: {
    backgroundColor: 'blue',
    borderRadius: 25, // arredondado
    width: 100,
    height: 50,
  },
  buttonGreen: {
    backgroundColor: 'green',
    borderRadius: 15, // levemente arredondado
    width: 80,
    height: 80,
  },
  buttonPurple: {
    backgroundColor: 'purple',
    borderRadius: 40, // circular
    width: 80,
    height: 80,
  },
  infoContainer: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  infoTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  infoText: {
    color: '#ccc',
    fontFamily: 'monospace',
  },
  buttonClear: {
    backgroundColor: '#555',
    borderRadius: 10,
    width: 100,
    height: 50,
  },
  
});
