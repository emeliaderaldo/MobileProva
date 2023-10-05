import { View, Text, Button, FlatList, ScrollView, Image } from "react-native";
import { useState, useEffect } from "react";
import PokeButton from "./PokeButton"

const PokedexScreen = ({ navigation }) => {

    const [pokemons, setPokemons] = useState([])

    useEffect(

        () => {
            fetchPokemons()
        }
        ,
        []
    )

    const fetchPokemons = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=51")
            .then(response => response.json())
            .then(
                (json) => {
                    //let id = 0
                    const vetorFormatado = json.results.map(
                        ({ name, url }) => {
                            return { id: url.split("/")[6], name, url } //split separa
                        }
                    )//map
                    //console.log(vetorFormatado)
                    setPokemons(vetorFormatado)
                }
            )
            .catch(error => console.log(error))
    }

    const renderPokemons = () => {
        return (
            <ScrollView style={{ width: "95%" }}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap"
                    }}
                >
                    {
                        pokemons.map(
                            (pokemonObj) => {
                                return (
                                    <View style={{
                                        margin: 2,
                                        marginBottom: 15,
                                        padding: 1,
                                        backgroundColor: "lightgreen",
                                        // justifyContent:"center",
                                        alignItems: "center",
                                        width: 100,
                                        borderWidth: 2,
                                        borderColor: "green",
                                        borderRadius: 5

                                    }}>
                                        <Text style={{ fontWeight: "bold", fontSize: 11 }}>{pokemonObj.name.toUpperCase()}</Text>
                                        <Image
                                            source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonObj.id}.png` }}
                                            style={{ width: 60, height: 60 }}
                                        />
                                        <PokeButton
                                            title="Detalhes"
                                            onPress={
                                                () => {
                                                    navigation.navigate("PokemonModal", { url: pokemonObj.url })
                                                }
                                            }
                                        />
                                    </View>
                                )
                            }
                        )
                    }
                </View>
            </ScrollView>
        )
    }

    return (

        <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
            <Text>Pokedex Screen</Text>
            {renderPokemons()}
            {/* <FlatList
                data={pokemons}
                renderItem={
                    ({ item }) => {
                        return (
                            <Text>
                                {item.name}
                            </Text>
                        )

                    }
                }
            /> */}
            {/* <Button
                title="ABRIR MODAL"
                onPress={() => navigation.navigate("PokemonModal")}
            /> */}
        </View>

    )
}

export default PokedexScreen