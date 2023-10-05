import { View, Text, Button, TextInput } from "react-native";
import myStyle from "./MyStyle";

const Cadastro = ({ navigation }) => {
    return (
        <View style={myStyle.container}>
            <Text style={myStyle.header}>Cadastro</Text>
            {/* <TextInput
                placeholder="Nome"
            />
            <TextInput
                placeholder="Senha"
            /> */}


            <TextInput
                placeholder="Nome"
            />

            <Button
                title="Ok"
                onPress={() => navigation.navigate("Sobre")}
            />


        </View>
    )
}

export default Cadastro