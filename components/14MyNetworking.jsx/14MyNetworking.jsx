import { useEffect, useState } from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import estilos from "./14Estilos"

const MyNetworking =() => {

    const [title, setTitle] = useState("")
    const [description, setDescripition] = useState("")
    const [movies, setMovies] = useState([])


    useEffect(
        ()=>{
            getMovies()
        },
        []
    )
    
    const getMovies = () =>{ //qnd o problema tiver resolvido acontece isso aqui
        fetch("https://reactnative.dev/movies.json")
        .then(response => response.json())
        .then(({title, description, movies}) => {
                setTitle(title) 
                setDescripition(description)
                setMovies(movies)
        })
        .catch(error=>console.log(error))
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.header}>{title}</Text>
            <Text style={estilos.description}>{description}</Text>

            <FlatList
                data={movies}
                renderItem={
                    ({item}) => {
                        return(
                            <View style={estilos.card}>
                            <View style={{padding:20}}>
                                <Text style={{fontSize:25,fontWeight:"bold"}}>{item.id}</Text>
                            </View>
                            <View style={estilos.movie}>
                                <Text style={{fontSize:20}}>{item.title}</Text>
                                <Text style={{fontSize:20}}>{item.releaseYear}</Text>
                            </View>
                        </View>
                        )
                    }
                    
                }
            />
        </View>
    )
}

export default MyNetworking