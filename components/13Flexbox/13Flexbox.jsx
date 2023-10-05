import { View, Text, SectionList, StyleSheet } from "react-native"

const MyFlexBox = () => {
    return(
        <View style={estilo.container}>
            <View style={estilo.View1}></View>
            <View style={estilo.View2}></View>
            <View style={estilo.View3}></View>
        </View>
    )
}

const estilo =StyleSheet.create({
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