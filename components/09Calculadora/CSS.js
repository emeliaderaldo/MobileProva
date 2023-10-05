import { StyleSheet } from "react-native"

const estilo = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    header: {
        fontSize:22,
        fontWeight:"bold"
    },
    input: {
        height:40,
        width:275,
        borderColor: "black",
        borderWidth:2,
        paddingLeft: 10,

        fontSize:20,
        margin: 5
    },
    containerBotoes: {
        flexDirection: "row",
        width:300,
        justifyContent: "space-evenly",
        marginTop:10

    }
    
})

export default estilo