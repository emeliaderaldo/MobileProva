import { StyleSheet, View, Image} from "react-native";
import Dados from "./components/Prova/questão01";
// import Questao01 from "./components/01Tarefa/01questão";
// import HelloRNV2 from "./components/02HelloRNV2";
//import MyCat from "./components/03MyCat";
//import Parent from "./components/05Nested/05Parent";
//import State from "./components/06State";
// import MyTextInput from "./components/07TestInput";
// import JuntarNomes from "./components/08Nomes";
//import Calculadora from "./components/09Calculadora/09Calculadora";
//import MyScrollView from "./components/10Scroll";
//import MyFlatList from "./components/11FlatList";
//import MySectionList from "./components/12SectionList";
//import MyFlexBox from "./components/13Flexbox/13Flexbox";
//import MyNetworking from "./components/14MyNetworking.jsx/14MyNetworking";
//import MainScreen from "./components/15Nagegation/15NavStack/MainScreen";
//import Home from "./components/02Tarefa/01Home";
//import MainScreen from "./components/atividade/MainScreen";
//import PokemonApp from "./components/16Pokemon/PokemonApp";
import Questao01 from "./components/Prova/questão01";

export default function App() {
  return (
    < Questao01/>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#C0C0C0",
    alignItems: "center", //define o lugar da linha
    justifyContent: "center", //define o lugar da coluna
    marginTop: 50,
  },
  
});