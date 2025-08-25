import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f7",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 10,
  },
  button: {
    flex: 1,
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  clearButton: {
    backgroundColor: "#FF3B30",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  error: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
  },
});

export default styles;