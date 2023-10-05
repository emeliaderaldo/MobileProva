import { View, Text, Button, TextInput } from "react-native";
import myStyle from "./MyStyle";
import Resultado from "./resultado";


const IMC = ({ navigation }) => {
    return (
        <View style={myStyle.container}>

            {/* <NavigationContainer>
                <Stack.Navigator initialRouteName="Resultado">

                    <Stack.Screen name="Resultado" component={Resultado} options={{ title: "Resultado" }} />

                </Stack.Navigator>
            </NavigationContainer> */}


            <Text style={myStyle.header}>IMC</Text>

            <Button
                title="calcular"
                onPress={() => navigation.navegate("Resultado")}
            />


        </View>
    )
}


export default IMC