import { View,Text, Button } from "react-native";
import myStyle from "./15MyStyle";

const Screen03 = ({navigation}) => {
    return (
        <View style={myStyle.container}>
            <Text style={myStyle.header}>Screen 03</Text>
            <Button
                title="ir para S 01"
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}

export default Screen03