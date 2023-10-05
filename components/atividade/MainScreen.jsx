import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Inicio from "./home";
import Cadastro from "./cadastro";
import Sobre from "./sobre";
import IMC from "./imc";
import Resultado from "./resultado";


const Stack = createNativeStackNavigator()

const MainScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Inicio">

                <Stack.Screen name="Inicio" component={Inicio} options={{title:"Inicio"}}/>
                <Stack.Screen name="Cadastro" component={Cadastro} options={{title:"Cadastro"}}/>
                <Stack.Screen name="Sobre" component={Sobre} options={{title:"Sobre"}}/>
                <Stack.Screen name="IMC" component={IMC} options={{title:"IMC"}}/>
                <Stack.Screen name="Resultado" component={Resultado} options={{title:"Resultado"}}/>
                
            
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainScreen