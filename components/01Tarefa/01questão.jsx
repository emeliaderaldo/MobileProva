import { View, Text, Image } from "react-native";
import Questao03 from "./03questão";
import { Button } from "react-native-web";
import { useState } from "react";

const Questao01 = () => {
  const imagem1 =
    "https://i.pinimg.com/236x/5c/3e/9c/5c3e9c430b283eaa0cc1c22094d182ed--twitter-com-funny-cats.jpg";
  const imagem2 =
    "https://i.pinimg.com/originals/a8/9f/8d/a89f8d8f68b287aa908e44f4f2b3f1c7.png";

  const [imageSource, setImageSource] = useState(imagem1);

  const trocar = () => {
    const novaImagem = imageSource === imagem1 ? imagem2 : imagem1;
    setImageSource(novaImagem);
  };

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        title="Mudar imagem"
        onPress={() => {
          trocar();
        }}
      />

      <Image
        id="imagem"
        source={{
          uri: imageSource,
        }}
        style={{ height: 150, width: 150 }}
      />

      <Text style={{ fontWeight: "bold", fontSize: "20px" }}>Emeli Aderaldo</Text>
      <Text style={{ fontWeight: "bold", fontSize: "20px" }}> Mombaça/Quixadá</Text>
      <Text style={{ fontWeight: "bold", fontSize: "20px" }}>Design Digital</Text>
      <Text style={{ fontWeight: "bold", fontSize: "20px" }}>6º Semestre</Text>
      <br />
      <Questao03 cor="blue" />
    </View>
  );
};

export default Questao01;