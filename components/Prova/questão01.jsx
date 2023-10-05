import { View, ScrollView, Text, SectionList } from "react-native";
import { PaperProvider, IconButton, MD3Colors } from "react-native-paper";
import estilo from "./estilo";
import dados from "./dados";

const Questao01 = ({ navigation }) => {
  return (
    <PaperProvider>
      <ScrollView style={estilo.fundo}>
        <SectionList
          sections={dados}
          keyExtractor={(item) => item.nome}
          renderItem={({ item, section }) => {
            return (
              <View style={estilo.container}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <IconButton
                    icon={item.icon}
                    iconColor={"white"}
                    size={30}
                    onPress={() =>
                      navigation.navigate("Questao02", {
                        selectedTitle: section.title,
                      })
                    }
                    mode="contained"
                  />
                  <View>
                    <Text style={estilo.textoNome}>{item.nome}</Text>
                  </View>
                </View>
                <Text style={estilo.textoValor}>{item.valor}</Text>
              </View>
            );
          }}
          renderSectionHeader={({ section }) => {
            return <Text style={estilo.titulo}>{section.title}</Text>;
          }}
        />
      </ScrollView>
    </PaperProvider>
  );
};

export default Questao01;