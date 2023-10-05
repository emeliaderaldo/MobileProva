import { View, Text, SectionList, StyleSheet } from "react-native"

const MyFlexBox = () => {
    return(
        <View style={estilos.container}>
            <View style={estilos.View1}></View>
            <View style={estilos.View2}></View>
            <View style={estilos.View3}></View>
        </View>
    )
}

const estilos =StyleSheet.create({
    container:{
        marginTop: 25,
        flex:1,
        backgroundColor:"blue"
    },
    View1:{
        flex:1,
        backgroundColor:"green"
    },
    View2:{
        flex:1,
        backgroundColor:"white"
    },
    View3:{
        flex:2,
        backgroundColor:"purple"
    }
})

export default MyFlexBox