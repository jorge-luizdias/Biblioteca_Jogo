import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Platform, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

// Importações das imagens originais do seu projeto (ajuste se necessário)
import pindaImg from "../assets/pinda.jpg"; 
import joiaImg from "../assets/joia.jpg"; 
import tefitImg from "../assets/tefit.jpg"; 
import rei_corImg from "../assets/rei_cor.jpg";
import tefit_corImg from "../assets/tefit_cor.jpg";
import reiImg from "../assets/rei.jpg";
import thorfImg from "../assets/thorf.jpg";
import polvoImg from "../assets/polvo.jpg";

export default function Personagens() {
  const router = useRouter();
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

  const categorias = ["Todos", "Heróis", "Aliados", "Chefes", "Vilões", "Artefatos"];

  const todosPersonagens = [
    {
      id: 1,
      nome: "Pinda",
      categoria: "Heróis",
      badgeClass: styles.tagHeroi,
      role: "O Herói dos Reinos",
      desc: "Um elfo tímido que se torna o herói dos reinos.",
      imagem: pindaImg,
      isEmoji: false
    },
    {
      id: 2,
      nome: "Tefit",
      categoria: "Aliados",
      badgeClass: styles.tagAliado,
      role: "A Guardiã da Floresta",
      desc: "Guardiã milenar da floresta de Protage.",
      imagem: tefitImg,
      isEmoji: false
    },
    {
      id: 3,
      nome: "Octorion",
      categoria: "Chefes",
      badgeClass: styles.tagChefe,
      role: "Soberano do Pântano",
      desc: "Rei do Pântano de Doug, dominado pelas trevas.",
      imagem: polvoImg,
      isEmoji: false
    },
    {
      id: 4,
      nome: "Thorf",
      categoria: "Chefes",
      badgeClass: styles.tagChefe,
      role: "Senhor de Magmus",
      desc: "Senhor do reino de lava, cego de fúria.",
      imagem: thorfImg,
      isEmoji: false
    },
    {
      id: 5,
      nome: "Tefit Corrompida",
      categoria: "Chefes",
      badgeClass: styles.tagChefe,
      role: "A Guardiã das Trevas",
      desc: "Tefit dominada pela Joia Carmesim.",
      imagem: tefit_corImg,
      isEmoji: false
    },
    {
      id: 6,
      nome: "Rei Laios Corrompido",
      categoria: "Vilões",
      badgeClass: styles.tagVilao,
      role: "Portadora da Joia Carmesim",
      desc: "A mente por trás de toda a corrupção.",
      imagem: rei_corImg,
      isEmoji: false
    },
    {
      id: 7,
      nome: "Rei Laios",
      categoria: "Aliados",
      badgeClass: styles.tagAliado,
      role: "Guardião da Joia",
      desc: "Rei de Protage e antigo guardião da Joia.",
      imagem: reiImg,
      isEmoji: false
    },
    {
      id: 8,
      nome: "Joia da Alma Carmesim",
      categoria: "Artefatos",
      badgeClass: styles.tagArtefato,
      role: "Artefato das Trevas",
      desc: "Artefato das trevas que corrompe os reinos.",
      imagem: joiaImg,
      isEmoji: false
    }
  ];

  const personagensFiltrados = categoriaAtiva === "Todos" 
    ? todosPersonagens 
    : todosPersonagens.filter(p => p.categoria === categoriaAtiva);

  return (
    <View style={styles.containerTela}>
      
      {/* ================= BARRA SUPERIOR (APENAS WEB) ================= */}
      {Platform.OS === 'web' && (
        <View style={styles.headerOriginal}>
          <View style={styles.logoBox}>
            <Text style={styles.logoText}>
              MOONVEIL <Text style={styles.logoSub}>CODEX</Text>
            </Text>
          </View>
          
          <View style={styles.menuLinks}>
            <TouchableOpacity onPress={() => router.push("/")} style={styles.menuItem}>
              <Text style={styles.menuItemText}>Início</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/mundo")} style={styles.menuItem}>
              <Text style={styles.menuItemText}>Mundo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/personagens")} style={[styles.menuItem, styles.menuItemAtivo]}>
              <Text style={styles.menuItemTextAtivo}>Personagens</Text>
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

      {/* CONTEÚDO COM SCROLL */}
      <ScrollView style={styles.scrollMain} contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.conteudoInterno}>
          
          {/* TITULO SECAO */}
          <View style={styles.headerSecao}>
            <Text style={styles.subtituloCodex}>CODEX</Text>
            <Text style={styles.tituloPagina}>Personagens</Text>
            <Text style={styles.descricaoGeral}>
              Todos os rostos da saga — do tímido herói à mente por trás das trevas.
            </Text>
          </View>

          {/* FILTROS */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.barraFiltros} contentContainerStyle={styles.barraFiltrosContainer}>
            {categorias.map((cat) => (
              <TouchableOpacity 
                key={cat} 
                onPress={() => setCategoriaAtiva(cat)}
                style={[styles.botaoFiltro, categoriaAtiva === cat && styles.botaoFiltroAtivo]}
              >
                <Text style={[styles.textoFiltro, categoriaAtiva === cat && styles.textoFiltroAtivo]}>
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* GRID DE CARDS */}
          <View style={styles.gridCards}>
            {personagensFiltrados.map((item) => (
              <View key={item.id} style={styles.cardHorizontal}>
                
                <View style={styles.avatarContainer}>
                  {item.isEmoji ? (
                    <Text style={styles.avatarEmoji}>{item.emoji}</Text>
                  ) : (
                    <Image source={item.imagem} style={styles.avatarImagem} />
                  )}
                </View>

                <View style={styles.infoContainer}>
                  <View style={[styles.badgeBase, item.badgeClass]}>
                    <Text style={styles.badgeTexto}>{item.categoria.slice(0, -1).toUpperCase()}</Text>
                  </View>
                  
                  <Text style={styles.nomeText}>{item.nome}</Text>
                  <Text style={styles.roleText}>{item.role}</Text>
                  <Text style={styles.descText} numberOfLines={2}>{item.desc}</Text>
                </View>

              </View>
            ))}
          </View>

          {/* ================= RODAPÉ ESTILIZADO ================= */}
          <View style={styles.rodapeContainer}>
            <Text style={styles.rodapeTitulo}>LEGENDS OF MOONVEIL</Text>
            <Text style={styles.rodapeDescricao}>
              Uma biblioteca dedicada à saga de Pinda, o herói dos reinos. Explore o universo, os personagens e os segredos da lendária Joia da Alma Carmesim.
            </Text>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerTela: {
    flex: 1,
    backgroundColor: "#0b0907",
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
  scrollMain: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  conteudoInterno: {
    width: "92%",
    maxWidth: 1200,
    alignSelf: "center",
    paddingTop: 40,
    paddingBottom: 20,
  },
  headerSecao: {
    marginBottom: 25,
  },
  subtituloCodex: {
    fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System",
    color: "#7e7063",
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 2,
    marginBottom: 4,
  },
  tituloPagina: {
    fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System",
    color: "#fff",
    fontSize: Platform.OS === 'web' ? 44 : 32,
    fontWeight: "700",
    marginBottom: 10,
  },
  descricaoGeral: {
    fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System",
    color: "#7e7063",
    fontSize: 14,
  },
  barraFiltros: {
    marginBottom: 35,
    flexDirection: "row",
  },
  barraFiltrosContainer: {
    gap: 8,
    paddingVertical: 4,
  },
  botaoFiltro: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "rgba(126, 112, 99, 0.2)",
  },
  botaoFiltroAtivo: {
    backgroundColor: "rgba(229, 192, 123, 0.1)",
    borderColor: "#e5c07b",
  },
  textoFiltro: {
    fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System",
    color: "#7e7063",
    fontSize: 13,
    fontWeight: "500",
  },
  textoFiltroAtivo: {
    color: "#e5c07b",
    fontWeight: "600",
  },
  gridCards: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    justifyContent: "flex-start",
  },
  cardHorizontal: {
    backgroundColor: "#13100d",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(229, 192, 123, 0.02)",
    flexDirection: "row", 
    alignItems: "center",
    width: Platform.OS === 'web' ? "31.5%" : "100%", 
    minWidth: Platform.OS === 'web' ? 340 : "100%",
  },
  avatarContainer: {
    width: 80,
    height: 80,
    backgroundColor: "#1a1612",
    borderRadius: 6,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    borderWidth: 1,
    borderColor: "rgba(229, 192, 123, 0.05)",
  },
  avatarImagem: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  avatarEmoji: {
    fontSize: 28,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  badgeBase: {
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 4,
    marginBottom: 6,
    alignSelf: 'flex-start',
  },
  tagHeroi: { backgroundColor: "rgba(229, 192, 123, 0.1)" },
  tagAliado: { backgroundColor: "rgba(46, 117, 89, 0.15)" },
  tagChefe: { backgroundColor: "rgba(219, 110, 48, 0.15)" },
  tagVilao: { backgroundColor: "rgba(186, 45, 45, 0.15)" },
  tagArtefato: { backgroundColor: "rgba(140, 43, 116, 0.15)" },
  badgeTexto: {
    color: "#fff",
    fontSize: 8,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  nomeText: {
    fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System",
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  roleText: {
    fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System",
    color: "#dfa46a",
    fontSize: 11,
    fontWeight: "500",
    marginTop: 1,
    marginBottom: 6,
  },
  descText: {
    fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System",
    color: "#7e7063",
    fontSize: 12,
    lineHeight: 16,
  },
  rodapeContainer: {
    marginTop: 80,
    paddingVertical: 40,
    borderTopWidth: 1,
    borderColor: "rgba(126, 112, 99, 0.08)",
    alignItems: "center",
    justifyContent: "center",
  },
  rodapeTitulo: {
    fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System",
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 2,
    marginBottom: 12,
    textAlign: "center",
  },
  rodapeDescricao: {
    fontFamily: Platform.OS === 'web' ? "'Montserrat', sans-serif" : "System",
    color: "#544b42",
    fontSize: 12,
    lineHeight: 20,
    textAlign: "center",
    maxWidth: 540,
  },
});