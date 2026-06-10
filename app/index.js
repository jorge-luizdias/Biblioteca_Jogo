import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView, Platform, Image } from "react-native";
import { useRouter } from "expo-router";

// Certifique-se de que os nomes dos arquivos estão exatamente assim na sua pasta assets
import mapaFundo from "../assets/mapa_fundo.jpg";
import pindaImg from "../assets/pinda.jpg";
import joiaImg from "../assets/joia.jpg"; 
import tefitImg from "../assets/tefit.jpg"; 
import rei_corImg from "../assets/rei_cor.jpg"; 

export default function Inicio() {
  const router = useRouter();

  return (
    <View style={styles.containerMaster}>
      
      {/* ================= BARRA SUPERIOR (APENAS WEB) ================= */}
      {Platform.OS === 'web' && (
        <View style={styles.headerOriginal}>
          <View style={styles.logoBox}>
            <Text style={styles.logoText}>
              MOONVEIL <Text style={styles.logoSub}>CODEX</Text>
            </Text>
          </View>
          
          <View style={styles.menuLinks}>
            <TouchableOpacity onPress={() => router.push("/")} style={[styles.menuItem, styles.menuItemAtivo]}>
              <Text style={styles.menuItemTextAtivo}>Início</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/mundo")} style={styles.menuItem}>
              <Text style={styles.menuItemText}>Mundo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/personagens")} style={styles.menuItem}>
              <Text style={styles.menuItemText}>Personagens</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/bestiario")} style={styles.menuItem}>
              <Text style={styles.menuItemText}>Bestiário</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/historia")} style={styles.menuItem}>
              <Text style={styles.menuItemText}>História</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <ScrollView style={styles.scrollMain} contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* SEÇÃO 1: HERO BANNER (APRESENTAÇÃO INICIAL COMPLETA) */}
        <View style={styles.heroWrapper}>
          <ImageBackground 
            source={mapaFundo} 
            style={styles.backgroundImage} 
            imageStyle={styles.imageBackgroundStyle}
          >
            <View style={styles.overlayFiltro}>
              <View style={styles.heroCenter}>
                
                {Platform.OS !== 'web' && (
                  <Text style={styles.mobileLogoBrand}>LEGENDS OF MOONVEIL</Text>
                )}

                <Text style={styles.subtituloOuro}>O CODEX OFICIAL DA SAGA</Text>
                
                <Text style={styles.tituloPrincipal}>
                  Legends of{"\n"}
                  <Text style={styles.tituloSub}>MoonVeil</Text>
                </Text>

                {/* Introdução aprimorada baseada nas novas informações */}
                <Text style={styles.paragrafoDescricao}>
                  A quebra do selo da <Text style={styles.textRed}>Joia da Alma Carmesim</Text> lançou os reinos em corrupção absoluta. Parta ao lado de <Text style={styles.boldWhite}>Pinda</Text>, um elfo tímido da floresta de Protage, em uma jornada solitária para subjugar as trevas, conquistar os poderes elementares e restaurar a paz em MoonVeil.
                </Text>

                <View style={styles.containerBotoes}>
                  <TouchableOpacity style={styles.botaoLaranja} onPress={() => router.push("/historia")}>
                    <Text style={styles.textoBotaoLaranja}>Ler a História  →</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.botaoTransparente} onPress={() => router.push("/mundo")}>
                    <Text style={styles.textoBotaoTransparente}>Explorar o Mundo</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>

          <View style={styles.fadeSuaveMobileWeb} />
        </View>

        {/* SEÇÃO 2: CARD GRID DE NAVEGAÇÃO RÁPIDA */}
        <View style={styles.secaoPreta}>
          <View style={styles.gridCategorias}>
            <TouchableOpacity style={styles.cardCategoria} onPress={() => router.push("/mundo")}>
              <Text style={styles.iconeCard}>🗺️</Text>
              <Text style={styles.tituloCard}>Mundo</Text>
              <Text style={styles.descCard}>4 reinos para explorar</Text>
              <Text style={styles.linkCard}>4 entradas →</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardCategoria} onPress={() => router.push("/personagens")}>
              <Text style={styles.iconeCard}>👥</Text>
              <Text style={styles.tituloCard}>Personagens</Text>
              <Text style={styles.descCard}>Heróis, chefes e vilões</Text>
              <Text style={styles.linkCard}>8 entradas →</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardCategoria} onPress={() => router.push("/bestiario")}>
              <Text style={styles.iconeCard}>💀</Text>
              <Text style={styles.tituloCard}>Bestiário</Text>
              <Text style={styles.descCard}>Criaturas das trevas</Text>
              <Text style={styles.linkCard}>12 entradas →</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardCategoria} onPress={() => router.push("/historia")}>
              <Text style={styles.iconeCard}>📜</Text>
              <Text style={styles.tituloCard}>História</Text>
              <Text style={styles.descCard}>A saga completa</Text>
              <Text style={styles.linkCard}>12 entradas →</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* SEÇÃO 3: FIGURAS DA SAGA */}
        <View style={styles.secaoFiguras}>
          <View style={styles.headerSecaoFlex}>
            <View style={styles.headerTextGroup}>
              <Text style={styles.subtituloOuroLeft}>EM DESTAQUE</Text>
              <Text style={styles.tituloSecaoBranco}>Figuras da Saga</Text>
            </View>
            <TouchableOpacity onPress={() => router.push("/personagens")} style={styles.botaoVerTodosContainer}>
              <Text style={styles.linkVerTodos}>Ver todos →</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.gridFiguras}>
            <View style={styles.cardFiguraItem}>
              <View style={styles.containerFotoFigura}>
                <Image source={pindaImg} style={styles.fotoFiguraStyle} />
              </View>
              <View style={styles.tagBadgeHeroi}><Text style={styles.tagBadgeText}>HERÓI</Text></View>
              <Text style={styles.tituloFiguraName}>Pinda</Text>
              <Text style={styles.subFiguraRole}>O Herói dos Reinos</Text>
            </View>

            <View style={styles.cardFiguraItem}>
              <View style={styles.containerFotoFigura}>
                <Image source={tefitImg} style={styles.fotoFiguraStyle} />
              </View>
              <View style={styles.tagBadgeAliado}><Text style={styles.tagBadgeText}>ALIADO</Text></View>
              <Text style={styles.tituloFiguraName}>Tefit</Text>
              <Text style={styles.subFiguraRole}>A Guardiã da Floresta</Text>
            </View>

            <View style={styles.cardFiguraItem}>
              <View style={styles.containerFotoFigura}>
                <Image source={rei_corImg} style={styles.fotoFiguraStyle} />
              </View>
              <View style={styles.tagBadgeVilao}><Text style={styles.tagBadgeText}>VILÃO</Text></View>
              <Text style={styles.tituloFiguraName}>A Velha Cigana</Text>
              <Text style={styles.subFiguraRole}>Portadora da Joia</Text>
            </View>

            <View style={styles.cardFiguraItem}>
              <View style={styles.containerFotoFigura}>
                <Image source={joiaImg} style={styles.fotoFiguraStyle} />
              </View>
              <View style={styles.tagBadgeArtefato}><Text style={styles.tagBadgeText}>ARTEFATO</Text></View>
              <Text style={styles.tituloFiguraName}>Joia da Alma</Text>
              <Text style={styles.subFiguraRole}>Artefato das Trevas</Text>
            </View>
          </View>
        </View>

        {/* SEÇÃO 4: CONQUISTAS */}
        <View style={styles.secaoPoderes}>
          <View style={styles.containerBordaPoderes}>
            <Text style={styles.subtituloOuroLeft}>CONQUISTAS DE PINDA</Text>
            <Text style={styles.tituloSecaoBrancoMargin}>Os Poderes do Herói</Text>

            <View style={styles.gridPoderesBox}>
              <View style={styles.cardPoderInner}>
                <Text style={[styles.iconPoderColor, { color: "#4facfe" }]}>💧</Text>
                <Text style={styles.tituloPoderText}>Poder da Água</Text>
                <Text style={styles.subInfoPoder}>PÂNTANO DE DOUG</Text>
                <Text style={styles.descPoderText}>Domínio sobre as águas obtido após libertar o Rei Waler da corrupção.</Text>
              </View>

              <View style={styles.cardPoderInner}>
                <Text style={[styles.iconPoderColor, { color: "#ff8c00" }]}>🔥</Text>
                <Text style={styles.tituloPoderText}>Poder do Fogo</Text>
                <Text style={styles.subInfoPoder}>REINO DE LAVA</Text>
                <Text style={styles.descPoderText}>Chamas elementares arrancadas do vulcão após subjugar o Rei Flamo.</Text>
              </View>

              <View style={styles.cardPoderInner}>
                <Text style={[styles.iconPoderColor, { color: "#00ff87" }]}>🌱</Text>
                <Text style={styles.tituloPoderText}>Braço de Vinhas</Text>
                <Text style={styles.subInfoPoder}>FLORESTA DE PROTAGE</Text>
                <Text style={styles.descPoderText}>Prótese viva dada por Tefit após Pinda sacrificar seu membro para libertá-la.</Text>
              </View>
            </View>
          </View>
        </View>

        {/* SEÇÃO 5: RODAPÉ */}
        <View style={styles.footerLayout}>
          <Text style={styles.footerLogo}>⚔️ LEGENDS OF MOONVEIL</Text>
          <Text style={styles.footerText}>
            Uma biblioteca dedicada à saga de Pinda, o herói dos reinos. Explore o universo, os personagens e os segredos da lendária Joia da Alma Carmesim.
          </Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMaster: {
    flex: 1,
    backgroundColor: "#0b0907",
  },
  scrollMain: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  headerOriginal: {
    width: "100%",
    height: 75,
    backgroundColor: "#0b0907",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "8%",
    borderBottomWidth: 1,
    borderColor: "rgba(229, 192, 123, 0.04)",
    zIndex: 100,
  },
  logoBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System",
    fontWeight: "700",
    fontSize: 18,
    color: "#e5c07b",
    letterSpacing: 1.5,
  },
  logoSub: {
    color: "#7e7063",
    fontSize: 11,
    fontWeight: "400",
    marginLeft: 3,
  },
  menuLinks: {
    flexDirection: "row",
    alignItems: "center",
    gap: 32,
  },
  menuItem: {
    paddingVertical: 6,
  },
  menuItemAtivo: {
    borderBottomWidth: 1.5,
    borderBottomColor: "#e5c07b",
  },
  menuItemText: {
    fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System",
    color: "#7e7063",
    fontSize: 14,
    fontWeight: "500",
  },
  menuItemTextAtivo: {
    fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System",
    color: "#e5c07b",
    fontSize: 14,
    fontWeight: "600",
  },
  heroWrapper: {
    position: "relative",
    width: "100%",
    backgroundColor: "#0b0907",
  },
  backgroundImage: {
    width: "100%",
    height: Platform.OS === 'web' ? "calc(100vh - 75px)" : 580, 
    minHeight: 540,
  },
  imageBackgroundStyle: {
    objectFit: "cover",
    objectPosition: "center 30%",
  },
  overlayFiltro: {
    flex: 1,
    backgroundColor: "rgba(11, 9, 7, 0.52)", 
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
    paddingTop: Platform.OS === 'web' ? 40 : 80, 
  },
  fadeSuaveMobileWeb: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 160, 
    ...Platform.select({
      web: {
        backgroundImage: "linear-gradient(to bottom, transparent 0%, rgba(11, 9, 7, 0.6) 40%, rgba(11, 9, 7, 0.9) 80%, #0b0907 100%)",
      },
      default: {
        backgroundColor: "transparent",
        borderBottomWidth: 90,
        borderBottomColor: "#0b0907",
        opacity: 0.95,
      }
    })
  },
  mobileLogoBrand: {
    color: "#e5c07b",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 3,
    marginBottom: 20,
    fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System",
  },
  heroCenter: {
    width: "90%",
    maxWidth: 820,
    alignItems: "center",
    zIndex: 5,
  },
  subtituloOuro: {
    fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System",
    fontWeight: "600",
    fontSize: 11,
    color: "#e5c07b",
    letterSpacing: 5,
    marginBottom: 16,
    textAlign: "center",
  },
  tituloPrincipal: {
    fontFamily: Platform.OS === 'web' ? "'Cinzel', serif" : "System",
    fontWeight: "700",
    fontSize: Platform.OS === 'web' ? 64 : 36, 
    color: "#fff",
    textAlign: "center",
    lineHeight: Platform.OS === 'web' ? 74 : 44,
    marginBottom: 20,
  },
  tituloSub: {
    color: "#dfa46a", // O nome "MoonVeil" ganha destaque na cor cobre/ouro
  },
  paragrafoDescricao: {
    fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System",
    fontWeight: "400",
    fontSize: Platform.OS === 'web' ? 16 : 14,
    color: "#a4968a",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 35,
    maxWidth: 680,
  },
  boldWhite: {
    fontWeight: "600",
    color: "#fff",
  },
  textRed: {
    color: "#ff4444",
    fontWeight: "600",
  },
  containerBotoes: {
    flexDirection: "row",
    gap: 14,
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  botaoLaranja: {
    backgroundColor: "#dfa46a",
    paddingVertical: 13,
    paddingHorizontal: 26,
    borderRadius: 6,
  },
  textoBotaoLaranja: {
    fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System",
    fontWeight: "700",
    color: "#0b0907",
    fontSize: 14,
  },
  botaoTransparente: {
    backgroundColor: "rgba(19, 16, 13, 0.5)",
    paddingVertical: 13,
    paddingHorizontal: 26,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.12)",
  },
  textoBotaoTransparente: {
    fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System",
    fontWeight: "600",
    color: "#fff",
    fontSize: 14,
  },
  secaoPreta: {
    width: "100%",
    backgroundColor: "#0b0907",
    alignItems: "center",
    paddingVertical: 30,
  },
  gridCategorias: {
    width: "88%",
    maxWidth: 1100,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "center",
  },
  cardCategoria: {
    flex: 1,
    minWidth: 240,
    backgroundColor: "#13100d",
    borderRadius: 8,
    padding: 22,
    borderWidth: 1,
    borderColor: "rgba(229, 192, 123, 0.03)",
  },
  iconeCard: { fontSize: 22, marginBottom: 14 },
  tituloCard: { fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System", color: "#fff", fontSize: 17, fontWeight: "600", marginBottom: 4 },
  descCard: { fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System", color: "#7e7063", fontSize: 13, marginBottom: 16 },
  linkCard: { fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System", color: "#dfa46a", fontSize: 13, fontWeight: "500" },
  secaoFiguras: { 
    width: "100%", 
    backgroundColor: "#0b0907", 
    alignItems: "center", 
    paddingBottom: 60 
  },
  headerSecaoFlex: { 
    width: "88%", 
    maxWidth: 1100, 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    marginBottom: 30,
    flexWrap: "wrap", 
    gap: 10
  },
  headerTextGroup: {
    flexDirection: "column",
  },
  botaoVerTodosContainer: {
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
  subtituloOuroLeft: { fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System", color: "#e5c07b", fontSize: 11, fontWeight: "600", letterSpacing: 3, marginBottom: 6 },
  tituloSecaoBranco: { fontFamily: Platform.OS === 'web' ? "'Cinzel', serif" : "System", color: "#fff", fontSize: Platform.OS === 'web' ? 28 : 24, fontWeight: "700" },
  tituloSecaoBrancoMargin: { fontFamily: Platform.OS === 'web' ? "'Cinzel', serif" : "System", color: "#fff", fontSize: Platform.OS === 'web' ? 28 : 24, fontWeight: "700", marginBottom: 25 },
  linkVerTodos: { 
    fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System", 
    color: "#dfa46a", 
    fontSize: 13,
    fontWeight: "500"
  },
  gridFiguras: { width: "88%", maxWidth: 1100, flexDirection: "row", flexWrap: "wrap", gap: 16, justifyContent: "center" },
  cardFiguraItem: { flex: 1, minWidth: 220, backgroundColor: "#13100d", borderRadius: 8, padding: 14 },
  
  containerFotoFigura: {
    width: "100%",
    height: 400,
    backgroundColor: "#1a1612",
    borderRadius: 6,
    overflow: "hidden", 
    marginBottom: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  fotoFiguraStyle: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", 
  },
  emojiImgFallback: {
    fontSize: 38,
  },

  tagBadgeHeroi: { backgroundColor: "rgba(229, 192, 123, 0.15)", paddingVertical: 4, paddingHorizontal: 8, borderRadius: 4, marginBottom: 10, alignSelf: 'flex-start' },
  tagBadgeAliado: { backgroundColor: "rgba(79, 172, 254, 0.15)", paddingVertical: 4, paddingHorizontal: 8, borderRadius: 4, marginBottom: 10, alignSelf: 'flex-start' },
  tagBadgeVilao: { backgroundColor: "rgba(255, 68, 68, 0.15)", paddingVertical: 4, paddingHorizontal: 8, borderRadius: 4, marginBottom: 10, alignSelf: 'flex-start' },
  tagBadgeArtefato: { backgroundColor: "rgba(0, 255, 135, 0.15)", paddingVertical: 4, paddingHorizontal: 8, borderRadius: 4, marginBottom: 10, alignSelf: 'flex-start' },
  tagBadgeText: { color: "#fff", fontSize: 9, fontWeight: "700" },
  tituloFiguraName: { fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System", color: "#fff", fontSize: 17, fontWeight: "600", marginBottom: 2 },
  subFiguraRole: { fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System", color: "#7e7063", fontSize: 12 },
  secaoPoderes: { width: "100%", backgroundColor: "#0b0907", alignItems: "center", paddingBottom: 60 },
  containerBordaPoderes: { width: "88%", maxWidth: 1100, padding: 25, borderRadius: 12, borderWidth: 1, borderColor: "rgba(229, 192, 123, 0.08)", backgroundColor: "#0e0c0a" },
  gridPoderesBox: { flexDirection: "row", flexWrap: "wrap", gap: 16 },
  cardPoderInner: { flex: 1, minWidth: 240, backgroundColor: "#13100d", borderRadius: 8, padding: 20 },
  iconPoderColor: { fontSize: 24, marginBottom: 12 },
  tituloPoderText: { fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System", color: "#fff", fontSize: 17, fontWeight: "600", marginBottom: 2 },
  subInfoPoder: { fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System", color: "#e5c07b", fontSize: 10, fontWeight: "600", marginBottom: 10 },
  descPoderText: { fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System", color: "#908276", fontSize: 13, lineHeight: 20 },
  footerLayout: { width: "100%", backgroundColor: "#0b0907", alignItems: "center", paddingVertical: 50, borderTopWidth: 1, borderColor: "rgba(255, 255, 255, 0.03)" },
  footerLogo: { fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System", color: "#fff", fontSize: 14, fontWeight: "600", marginBottom: 10 },
  footerText: { fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System", color: "#61564d", fontSize: 12, textAlign: "center", maxWidth: 550, lineHeight: 20, paddingHorizontal: 20 },
});