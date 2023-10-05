import { View, Image } from "react-native";

const ChildA = () => {
    return (
        <View
            style={{
                backgroundColor:"yellow",
                flexDirection:"column",
                alignItems:"center"}}>
            <Image 
            source={{uri:"https://i.em.com.br/57huk7LYAwf7jcJnkBq9NOeoFt0=/675x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/29/1500320/imagem-generica-de-um-guaxinim-deitado-em-um-galho-_1_122607.jpg"}}
            style={{height:200, width:200}}
            
            />

        </View>

    )
}

export default ChildA