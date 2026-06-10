import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function Historia() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.tagline}>A SAGA COMPLETA</Text>
      <Text style={styles.tituloPagina}>História de Protage</Text>

      <View style={styles.caixaTexto}>
        <Text style={styles.paragrafo}>
          Em tempos remotos, o reino de Protage coexistia em harmonia graças ao equilíbrio das forças elementais. No entanto, a descoberta da antiga <Text style={styles.destaqueVermelho}>Joia da Alma Carmesim</Text> corrompeu o coração dos governantes reclusos, espalhando uma névoa de lodo e chamas destrutivas sobre a terra.
        </Text>
        <Text style={styles.paragrafo}>
          A salvação recai sobre as costas de <Text style={styles.destaqueDourado}>Pinda</Text>, um jovem elfo conhecido por sua timidez extrema, mas dotado de uma determinação inabalável. Auxiliado por Tefit, a antiga guardiã florestal, ele deve marchar contra os reis corrompidos para purificar o Codex da criação.
        </Text>
      </View>

      <Text style={styles.subtituloSecao}>Os Poderes do Herói</Text>
      
      <View style={styles.gradePoderes}>
        <View style={styles.cardPoder}>
          <Text style={styles.iconePoder}>💧</Text>
          <Text style={styles.nomePoder}>Poder da Água</Text>
          <Text style={styles.metaPoder}>REI WALER • PÂNTANO DE DOUG</Text>
          <Text style={styles.descPoder}>Domínio sobre as águas, capaz de apagar até as chamas de Magmus.</Text>
        </View>

        <View style={styles.cardPoder}>
          <Text style={styles.iconePoder}>🔥</Text>
          <Text style={styles.nomePoder}>Poder do Fogo</Text>
          <Text style={styles.metaPoder}>REI FLAMO • REINO DE LAVA</Text>
          <Text style={styles.descPoder}>Chamas conquistadas no coração do vulcão, arma contra a escuridão.</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0d0a07" },
  contentContainer: { padding: 25 },
  tagline: { fontFamily: "PixelMedium", fontSize: 12, color: "#e5c07b", letterSpacing: 3, marginBottom: 5 },
  tituloPagina: { fontFamily: "PixelBold", fontSize: 36, color: "#fff", marginBottom: 25 },
  caixaTexto: { backgroundColor: "#14110e", padding: 20, borderRadius: 10, borderWidth: 1, borderColor: "rgba(229,192,123,0.1)", marginBottom: 40 },
  paragrafo: { fontFamily: "PixelRegular", fontSize: 15, color: "#ccc", lineHeight: 24, marginBottom: 15 },
  destaqueVermelho: { color: "#ff4a4a", fontFamily: "PixelMedium" },
  destaqueDourado: { color: "#e5c07b", fontFamily: "PixelBold" },
  subtituloSecao: { fontFamily: "PixelBold", fontSize: 22, color: "#fff", marginBottom: 20 },
  gradePoderes: { flexDirection: "row", flexWrap: "wrap", gap: 15 },
  cardPoder: { backgroundColor: "#14110e", padding: 20, borderRadius: 8, borderWidth: 1, borderColor: "rgba(255,255,255,0.05)", flex: 1, minWidth: 280 },
  iconePoder: { fontSize: 24, marginBottom: 10 },
  nomePoder: { fontFamily: "PixelBold", fontSize: 18, color: "#fff", marginBottom: 4 },
  metaPoder: { fontFamily: "PixelMedium", fontSize: 11, color: "#e5c07b", marginBottom: 10, letterSpacing: 1 },
  descPoder: { fontFamily: "PixelRegular", fontSize: 13, color: "#999", lineHeight: 18 }
});