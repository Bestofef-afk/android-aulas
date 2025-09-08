import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  colorBox: {
    width: 150,
    height: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
  },
  colorText: {
    fontWeight: 'bold',
    backgroundColor: 'rgba(255,255,255,0.6)',
    padding: 5,
    borderRadius: 5,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    width: 70,
    height: 70,
    margin: 5,
    borderRadius: 8,
  },
  reloadBtn: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 8,
  },
  reloadText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
