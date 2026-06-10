import { StyleSheet, Text, View, ScrollView } from "react-native";

const criaturas = [
  { id: "1", nome: "Lodozombie", desc: "Morto-vivo de lama que se arrasta pelas águas turvas." },
  { id: "2", nome: "Sanguesuga", desc: "Criatura inchada que drena a energia de suas vítimas." },
  { id: "3", nome: "Esporito", desc: "Espírito de esporos venenosos que paira sobre o brejo." },
  { id: "4", nome: "Mosquito Gigante", desc: "Inseto colossal de asas membranosas e ferrão letal." }
];

export default function Bestiario() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.tagline}>CRIATURAS</Text>
      <Text style={styles.tituloPagina}>Bestiário</Text>
      <Text style={styles.descricaoPagina}>
        Todas as criaturas corrompidas que cruzam o caminho de Pinda, agrupadas por reino.
      </Text>

      <Text style={styles.secaoRegiao}>Pântano de Doug</Text>

      <View style={styles.gradeCriaturas}>
        {criaturas.map((c) => (
          <View key={c.id} style={styles.cardCriatura}>
            {/* Imagem Placeholder Pixel Art */}
            <View style={styles.imgPlaceholder} />
            
            <View style={styles.cardCorpo}>
              <Text style={styles.nomeCriatura}>{c.nome}</Text>
              <Text style={styles.descCriatura}>{c.desc}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0d0a07" },
  contentContainer: { padding: 25 },
  tagline: { fontFamily: "PixelMedium", fontSize: 12, color: "#e5c07b", letterSpacing: 3, marginBottom: 5 },
  tituloPagina: { fontFamily: "PixelBold", fontSize: 36, color: "#fff", marginBottom: 10 },
  descricaoPagina: { fontFamily: "PixelRegular", fontSize: 16, color: "#aaa", marginBottom: 35 },
  secaoRegiao: { fontFamily: "PixelBold", fontSize: 20, color: "#e5c07b", marginBottom: 20, borderBottomWidth: 1, borderColor: "rgba(229,192,123,0.15)", paddingBottom: 8 },
  gradeCriaturas: { flexDirection: "row", flexWrap: "wrap", gap: 15, justifyContent: "center" },
  cardCriatura: { backgroundColor: "#14110e", borderRadius: 8, borderWidth: 1, borderColor: "rgba(255,255,255,0.03)", width: "100%", maxWidth: 260, overflow: "hidden" },
  imgPlaceholder: { height: 150, backgroundColor: "#1d1813" },
  cardCorpo: { padding: 12 },
  nomeCriatura: { fontFamily: "PixelBold", fontSize: 16, color: "#fff", marginBottom: 4 },
  descCriatura: { fontFamily: "PixelRegular", fontSize: 13, color: "#888", lineHeight: 18 }
});