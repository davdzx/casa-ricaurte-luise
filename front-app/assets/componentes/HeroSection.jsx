 import React, { useEffect, useRef } from "react";
import { 
  Text, 
  View, 
  ImageBackground, 
  TouchableOpacity, 
  useWindowDimensions, 
  Linking,
  Animated 
} from "react-native";
import styles from "../Styles/HeroStyles";

function HeroSection({ onVerGaleriaPress }) {
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;

  const fadeAnim = useRef(new Animated.Value(0)).current;       
  const translateYAnim = useRef(new Animated.Value(25)).current; 

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1100, 
        useNativeDriver: true, 
      }),
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 1100,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  // 🚀 WhatsApp con número real y mensaje automático
  const handleWhatsApp = () => {
    const phoneNumber = "573053817091"; // 👈 Cambia este número por el del cliente
    const textMessage = encodeURIComponent("¡Hola! Me gustaría solicitar información y consultar disponibilidad para una reserva.");
    Linking.openURL(`https://wa.me/${phoneNumber}?text=${textMessage}`);
  };

  return (
    <ImageBackground
      source={require('../images/bannercasa.jpg')}
      style={styles.heroBackground}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        
        <View style={styles.innerContainer}>
          
          <View style={styles.header}>
            <Text style={styles.brandTitle}>Casa Ricaurte</Text>
            <Text style={styles.brandSubtitle}>Descanso en la naturaleza</Text>
          </View>

          <Animated.View 
            style={[
              styles.contentContainer,
              {
                opacity: fadeAnim, 
                transform: [{ translateY: translateYAnim }] 
              }
            ]}
          >
            <Text style={styles.tagline}>CASA DE DESCANSO CAMPESTRE</Text>
            
            <Text style={[styles.mainTitle, isDesktop && styles.mainTitleDesktop]}>
              Tu escape perfecto{"\n"}en Ricaurte
            </Text>

            <Text style={[styles.description, isDesktop && styles.descriptionDesktop]}>
              Disfruta de una experiencia única en nuestra finca, rodeada de
              naturaleza, clima cálido y todas las comodidades para que tú y tu
              familia vivan momentos inolvidables.
            </Text>

            {/* Botones de Acción */}
            <View style={[styles.buttonRow, isDesktop && styles.buttonRowDesktop]}>
              <TouchableOpacity style={styles.primaryButton} onPress={handleWhatsApp}>
                <Text style={styles.primaryButtonText}>Reservar por WhatsApp</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.secondaryButton} onPress={onVerGaleriaPress}>
                <Text style={styles.secondaryButtonText}>Ver galería</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>

        </View>

      </View>
    </ImageBackground>
  );
}

export default HeroSection;