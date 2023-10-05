import { View, Text, Button } from "react-native";
import myStyle from "./MyStyle";

const Inicio = ({ navigation, route }) => {
    // const {name, grade} = route.params
    return (
        <View style={myStyle.container}>
            <Text style={myStyle.header}>Atividade</Text>
            {/* <Text style={myStyle.header}>Screen 02</Text>
            <Text style={myStyle.header}>{name}</Text>
            <Text style={myStyle.header}>{grade}</Text> */}
            <Button
                title="Cadastro"
                onPress={() => navigation.navigate("Cadastro")}
            />

            <Button
                title="IMC"
                onPress={() => navigation.navigate("IMC")}
            />

            <Button
                title="Sobre"
                onPress={() => navigation.navigate("Sobre")}
            />

        </View>
    )
}

export default Inicio