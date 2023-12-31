import { View, Text, SectionList, StyleSheet } from "react-native"

const dados = [
    {
        title: "J", data: [
            { nome: "Jefferson2", id: 1},
            { nome: "Jonas", id: 2 },
            { nome: "Juarez", id: 7 }
        ]
    },
    {
        title: "S", data: [
            { nome: "Sabrina", id: 3},
            { nome: "Sávio", id: 4 }
        ]
    },
    {
        title: "E", data: [
            { nome: "Eustáquio", id: 5 },
            { nome: "Elon", id: 6 }
        ]
    }
]

const MySectionList = () => {
    return (
        <View style={estilo.container}>
            <SectionList
                sections={dados}
                keyExtractor={(item) => "SDDCeredEDDeed" + item.id}
                renderItem={
                    ({ item }) => {
                        return (
                            <Text style={{ fontSize: 25 }}>{item.nome}</Text>
                        )
                    }
                }
                renderSectionHeader={
                    ({ section }) => {
                        return (
                            <Text style={{ fontSize: 25, fontWeight: "bold" }}>{section.title}</Text>
                        )
                    }
                }
            />
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 25
    }

})

export default MySectionList