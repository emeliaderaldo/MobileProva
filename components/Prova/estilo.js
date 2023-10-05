import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 20,
    margin: 10,
    borderBottomWidth: 1,
    borderColor: "grey",
  },
  fundo: {
    backgroundColor: "black",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 20,
    color: "grey",
  },
  textoValor: {
    fontSize: 15,
    textAlign: "right",
    color: "white",
    fontWeight: "bold",
  },
  textoHora: {
    fontSize: 10,
    color: "grey",
  },
  textoNome: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});

export default estilo;