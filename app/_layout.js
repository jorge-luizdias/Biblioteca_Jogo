import React from "react";
import { Slot } from "expo-router";
import { StyleSheet, View, Platform } from "react-native";

export default function LayoutGlobal() {
  return (
    <View style={styles.containerMaster}>
      {/* O Slot apenas renderiza a página atual de forma isolada */}
      <View style={styles.conteudoDinamico}>
        <Slot />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMaster: {
    flex: 1,
    backgroundColor: "#0b0907",
    height: Platform.OS === 'web' ? "100vh" : "100%",
  },
  conteudoDinamico: {
    flex: 1,
    width: "100%",
  },
});