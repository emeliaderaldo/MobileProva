import { useEffect, useState } from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import estilo from "./14estilo"

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
        <View style={estilo.container}>
            <Text style={estilo.header}>{title}</Text>
            <Text style={estilo.description}>{description}</Text>

            <FlatList
                data={movies}
                renderItem={
                    ({item}) => {
                        return(
                            <View style={estilo.card}>
                            <View style={{padding:20}}>
                                <Text style={{fontSize:25,fontWeight:"bold"}}>{item.id}</Text>
                            </View>
                            <View style={estilo.movie}>
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