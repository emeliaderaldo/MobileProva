import { View, Text, SectionList, StyleSheet, ScrollView} from "react-native"
// import { PaperProvider, IconButton, MD3Colors } from "react-native-paper";
import estilos from "./estilos"
import dados from "./dados"
import dados2 from "./dados2"

const Questao01 = () => {
  return (
    // <PaperProvider>
    //   <ScrollView>
        <View style={estilos.container}>
          <SectionList
            sections={dados}
            keyExtractor={(item) => "..." + item}
            renderItem={
              ({ item, section }) => {
                return (
                  <Text style={estilos.conteudo2}>{item.nome}, {section.preco} </Text>
                )
              }

            }

            renderSectionHeader={
              ({ section }) => {
                return (
                  <Text style={estilos.conteudo1}>{section.title}</Text>
                )
              }
            }
          />

          <SectionList
            sections={dados2}
            keyExtractor={(item) => "..." + item}
            renderItem={
              ({ item }) => {
                return (
                  <Text style={estilos.conteudo3}>{item.value} </Text>
                )
              }

            }
          />
        </View>
    //   </ScrollView>
    // </PaperProvider>

  )
}


export default Questao01