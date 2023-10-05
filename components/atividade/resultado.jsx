import { View, Text, Button, TextInput } from "react-native";
import myStyle from "./MyStyle";

const Resultado = ({ navigation }) => {
    return (
        <View style={myStyle.container}>
            <Text style={myStyle.header}>Resultado</Text>

            <Button
                title="voltar"
                onPress={() => navigation.popToTop()}
            />


        </View>
    )
}

export default Resultado