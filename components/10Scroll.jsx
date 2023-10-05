import { View, Text, Image, ScrollView, SafeAreaView } from "react-native"

const imagem = {
    uri:"https://fotos.amomeupet.org/uploads/fotos/1629303712_611d33a001207_hd.jpeg",
    width:240,
    height:320
}

const MyScrollView = () => {
    return (
        <ScrollView>
            <View
                style={{
                    flex:1,
                    justifyContent:"flex-start",
                    alignItems:"center",
                    paddingTop:25,
                    margin:10

                }}
            >
            <Text style={{fontSize:25,fontWeight:"bold"}}>Guaxi e ania</Text>
            <Image source={imagem}/>
            <Image source={imagem}/>
            <Image source={imagem}/>
            <Image source={imagem}/>
            <Image source={imagem}/>
            </View>
        </ScrollView>
    )
}
export default MyScrollView