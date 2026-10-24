import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Linking,
  useWindowDimensions,
} from 'react-native';
import FooterStyles from '../Styles/FooterStyle';

 function FooterSection() {
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;

  // Número de WhatsApp para reservas (reemplazar con el número real)
  const phoneNumber = '573000000000';
  const whatsappMessage = encodeURIComponent(
    '¡Hola! Quisiera obtener más información sobre la disponibilidad de Casa El Paraíso.'
  );

  const handleOpenWhatsApp = () => {
    Linking.openURL(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`);
  };

  // Imagen de fondo temporal de naturaleza/paisaje desde internet
  const bgImageUri =
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop';

  return (
    <ImageBackground
      source={{ uri: bgImageUri }}
      style={FooterStyles.container}
      resizeMode="cover"
    >
      {/* Capa oscura superpuesta */}
      <View style={FooterStyles.overlay} />

      <View style={FooterStyles.wrapper}>
        
        {/* SECCIÓN 1: CALL TO ACTION (CTA) */}
        <View style={FooterStyles.ctaContainer}>
          <Text style={FooterStyles.title}>¿Listo para vivir esta experiencia?</Text>
          <Text style={FooterStyles.subtitle}>
            Contáctanos y reserva tu próxima escapada.
          </Text>

          {/* Botón único de WhatsApp */}
          <TouchableOpacity
            style={FooterStyles.whatsappButton}
            activeOpacity={0.85}
            onPress={handleOpenWhatsApp}
          >
            <Text style={FooterStyles.whatsappIcon}>💬</Text>
            <Text style={FooterStyles.whatsappText}>Reservar por WhatsApp</Text>
          </TouchableOpacity>
        </View>

        {/* SECCIÓN 2: LÍNEA BÁSICA DEL FOOTER */}
        <View
          style={[
            FooterStyles.bottomRow,
            isDesktop && FooterStyles.bottomRowDesktop,
          ]}
        >
          {/* Nombre y slogan de la marca */}
          <View style={FooterStyles.brandContainer}>
            <Text style={FooterStyles.brandName}>Casa El Paraíso</Text>
            <Text style={FooterStyles.brandTagline}>Descanso en la naturaleza</Text>
          </View>

          {/* Copyright */}
          <Text style={FooterStyles.copyrightText}>
            © 2026 Casa El Paraíso. Todos los derechos reservados.
          </Text>
        </View>

      </View>
    </ImageBackground>
  );
}

export default FooterSection;