import { StyleSheet, Text, View, ScrollView } from "react-native";

const reinos = [
  {
    id: "1",
    titulo: "Pântano de Doug",
    subtitulo: "Águas turvas e criaturas sombrias.",
    chefe: "Rei Waler",
    recompensa: "Poder da Água"
  },
  {
    id: "2",
    titulo: "Reino de Lava Magmus",
    subtitulo: "Rios de lava e fúria incandescente.",
    chefe: "Rei Flamo",
    recompensa: "Poder do Fogo"
  }
];

export default function Mundo() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.tituloPagina}>Mundo de Protage</Text>
      <Text style={styles.descricaoPagina}>
        Quatro reinos separam Pinda da Joia da Alma Carmesim. Cada um esconde um chefe corrompido e uma recompensa decisiva para o herói.
      </Text>

      <View style={styles.vitrineCards}>
        {reinos.map((reino) => (
          <View key={reino.id} style={styles.cardReino}>
            {/* Espaço reservado para a Imagem de Fundo Pixel Art */}
            <View style={styles.placeholderImagem}>
              <Text style={styles.badgeReino}>Reino {reino.id}</Text>
            </View>
            
            <View style={styles.cardCorpo}>
              <Text style={styles.cardTitulo}>{reino.titulo}</Text>
              <Text style={styles.cardSubtitulo}>{reino.subtitulo}</Text>
              
              <Text style={styles.cardInfoMeta}>
                Chefe: <Text style={styles.boldWhite}>{reino.chefe}</Text>
              </Text>
              <Text style={styles.cardInfoMeta}>
                Recompensa: <Text style={styles.boldGold}>{reino.recompensa}</Text>
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0a07",
  },
  contentContainer: {
    padding: 25,
    alignItems: "center",
  },
  tituloPagina: {
    fontFamily: "PixelBold",
    fontSize: 36,
    color: "#fff",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  descricaoPagina: {
    fontFamily: "PixelRegular",
    fontSize: 16,
    color: "#aaa",
    lineHeight: 24,
    marginBottom: 30,
    alignSelf: "flex-start",
    maxWidth: 700,
  },
  vitrineCards: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    width: "100%",
    justifyContent: "center",
  },
  cardReino: {
    backgroundColor: "#14110e",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(229, 192, 123, 0.15)",
    width: "100%",
    maxWidth: 450, // Tamanho ideal para alinhar lado a lado na Web
    overflow: "hidden",
  },
  placeholderImagem: {
    height: 200,
    backgroundColor: "#221c16", // Cor escura simulando onde vai entrar a imagem
    padding: 15,
    justifyContent: "flex-start",
  },
  badgeReino: {
    backgroundColor: "rgba(0,0,0,0.6)",
    color: "#fff",
    fontFamily: "PixelMedium",
    fontSize: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  cardCorpo: {
    padding: 20,
  },
  cardTitulo: {
    fontFamily: "PixelBold",
    fontSize: 22,
    color: "#fff",
    marginBottom: 6,
  },
  cardSubtitulo: {
    fontFamily: "PixelRegular",
    fontSize: 14,
    color: "#999",
    marginBottom: 15,
  },
  cardInfoMeta: {
    fontFamily: "PixelMedium",
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },
  boldWhite: {
    color: "#fff",
  },
  boldGold: {
    color: "#e5c07b",
  },
});