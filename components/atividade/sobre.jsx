import { View, Text, Button, TextInput } from "react-native";
import myStyle from "./MyStyle";

const Sobre = ({ navigation }) => {
    return (
        <View style={myStyle.container}>
            <Text style={myStyle.header}>Sobre</Text>

            <Button
                title="Ok"
                onPress={() => navigation.popToTop()}
            />


        </View>
    )
}

export default Sobre