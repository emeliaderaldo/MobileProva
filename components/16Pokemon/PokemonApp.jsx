import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokedexScreen from "./PokedexScreen";
import PokemonModalScreen from "./PokemonModalScreen";

const NativeStack = createNativeStackNavigator()

const PokemonApp = () => {
    return (

        <NavigationContainer>
            <NativeStack.Navigator>
                <NativeStack.Group>
                    <NativeStack.Screen name="Pokedex" component={PokedexScreen} />
                </NativeStack.Group>

                <NativeStack.Group screenOptions={{ presentation: "modal" }}>
                    <NativeStack.Screen name="PokemonModal" component={PokemonModalScreen} />
                </NativeStack.Group>
            </NativeStack.Navigator>
        </NavigationContainer>


    )
}

export default PokemonApp