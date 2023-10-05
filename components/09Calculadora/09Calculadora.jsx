import {View, Text, TextInput, Button, Pressable} from "react-native"
import estilos from "./CSS"
import { useState } from "react"

const Calculadora = () => {

    const [number1,setNumber1] = useState("")
    const [number2,setNumber2] = useState("")
    const [result,setResult] = useState("")

    function somar() {
        setResult(parseInt(number1) + parseInt(number2))
        //console.log(number1 + number2)    
    }

    function subtrair() {
        setResult(parseInt(number1) - parseInt(number2))
    }

    function multiplicar() {
        setResult(parseInt(number1) * parseInt(number2))
    }

    function dividir() {
        const res = parseInt(number1) / parseInt(number2)
        setResult( res.toFixed(4) )
    }

    return (
        <View style={estilos.container}>
            <Text>Calculadora</Text>
            <TextInput
                style={estilos.input}
                onChangeText={(numero)=>setNumber1(numero)}
                keyboardType="numeric"
            />

            <TextInput
                style={estilos.input}
                onChangeText={(numero)=>setNumber2(numero)}
                keyboardType="numeric"
            />    

            <View style={estilos.containerBotoes}>
                <Button title="SOMAR" onPress={somar}/>
                <Button title="SUBTR" onPress={subtrair}/>
                <Button title="MULTI" onPress={multiplicar}/>
                <Button title="DIVID" onPress={dividir}/>
                
            </View>

            <View>
                <Pressable 
                    onPress={somar}
                    style={
                        ({pressed})=>[{
                            backgroundColor: pressed ? 'rgb(210, 230, 255)' : '#2196f3',
                            padding: 5,
                            margin:10
                        }]
                    }
                >
                    <Text style={{color:"white", fontWeight: "bold"}}> SOMAR </Text>
                </Pressable>
            </View>

            <Text style={[estilos.header,{marginTop:20}]}>
                Resultado: {result}
            </Text>
               
        </View>
    )
}

// const estilos = StyleSheet.create({
//     container:{
//         flex:1,
//         flexDirection:"column",
//         justifyContent:"center",
//         alignItems:"center"
//     },
//     header: {
//         fontSize:22,
//         fontWeight:"bold"
//     }
// })

export default Calculadora



