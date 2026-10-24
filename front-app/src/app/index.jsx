 import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import HeroSection from "../../assets/componentes/HeroSection";
import FeaturesSection from "../../assets/componentes/FeaturesSection";
import AboutSection from "../../assets/componentes/AboutSection";
import RoomsSection from "../../assets/componentes/RoomsSection";
import GallerySection from "../../assets/componentes/GallerySection";
import LocationSection from "../../assets/componentes/LocationSection";
import FooterSection from "../../assets/componentes/FooterSection";

function Index() {
  // 🚀 Referencia apuntando al contenedor de la Galería
  const galleryRef = useRef(null);

  // 🚀 Función para realizar el desplazamiento suave en Web
  const scrollToGallery = () => {
    if (galleryRef.current && galleryRef.current.scrollIntoView) {
      galleryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* 🚀 Pasamos la función de desplazamiento al Hero */}
      <HeroSection onVerGaleriaPress={scrollToGallery} />
      
      <FeaturesSection />
      <AboutSection />
      <RoomsSection />

      {/* 🚀 Envolvemos la Galería en una View para asignarle la referencia nativa */}
      <View ref={galleryRef}>
        <GallerySection />
      </View>

      <LocationSection />
      <FooterSection />

    </ScrollView>
  );
}

// Definición básica de estilos para evitar advertencias de StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});

export default Index;


