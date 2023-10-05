import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding:30,
        paddingTop: 25,
        width:390,
        backgroundColor: "black",
    },
  
    conteudo1:{
        color:"white",
        fontSize:15,
        fontWeight:"medium",
        margin:10
    },
    
    conteudo2: {
        fontSize: 15,
        color:"white",
        fontWeight:"600",
        paddingLeft: 20,
        margin:10

    },

    conteudo3: {
        fontSize: 15,
        color:"white",
        fontWeight:"600",
        paddingLeft: 20,

        flexDirection:"column-reverse",
        justifyContent:"flex-end",
        alignItems:"column"
    },

})

export default estilos