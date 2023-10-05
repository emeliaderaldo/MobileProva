import { useState } from "react"
import {View, Text, Button} from "react-native"


const State = () => {
    // let contador = 0
    const [contador, setContador] = useState(0)
    return(
        <View>
            <Text style={{fontSize:25, fontWeight:"bold"}}>
                Contador: {contador}
            </Text>
            <Button
                title="CONTAR + 1"
                onPress={
                    ()=>{
                        // contador ++
                        // contador += 1
                        // contador = contador + 1
                        // console.log(contador)
                        setContador(contador +1)
                }
            }       
            />
        </View>
    )
}

export default State