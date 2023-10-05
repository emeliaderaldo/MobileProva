import { View, Text } from "react-native";

const Questao03 = ({ cor }) => {
  return (
    <View>
      <Text style={{ color: cor , fontWeight: "bold", fontSize: "20px" }}>Direção de arte</Text>
      <Text style={{ color: cor , fontWeight: "bold", fontSize: "20px"}}>Comunicação visual</Text>
      <Text style={{ color: cor , fontWeight: "bold", fontSize: "20px"}}>Projeto Integrado</Text>
      <Text style={{ color: cor , fontWeight: "bold", fontSize: "20px"}}>Tipografia</Text>
      <Text style={{ color: cor , fontWeight: "bold", fontSize: "20px"}}>Multimídia</Text>
    </View>
  );
};

export default Questao03;