import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  useWindowDimensions,
  Platform,
} from 'react-native';
import LocationStyles from '../Styles/LocationStyle';


function LocationSection() {
  const { width } = useWindowDimensions();
  const isDesktop = width > 900;

  // URL del sitio web para generar el código QR dinámicamente
  const websiteUrl = 'https://tudominio.com'; // Reemplazar con la URL final de producción

  // Link directo a la ubicación en Google Maps
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Condominio+La+Ceiba+Ricaurte+Cundinamarca';

  // API gratuita para generar el QR en tiempo real
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
    websiteUrl
  )}`;

  const handleOpenMaps = () => {
    Linking.openURL(googleMapsUrl);
  };

  return (
    <View style={LocationStyles.container}>
      <View
        style={[
          LocationStyles.wrapper,
          isDesktop && LocationStyles.wrapperDesktop,
        ]}
      >
        {/* BLOQUE 1: INFORMACIÓN DE UBICACIÓN */}
        <View style={LocationStyles.infoColumn}>
          <Text style={LocationStyles.iconHeader}>📍</Text>
          <Text style={LocationStyles.title}>Ubicación</Text>
          <Text style={LocationStyles.subtitle}>
            Cerca de todo, lejos del estrés
          </Text>

          <Text style={LocationStyles.description}>
            Estamos ubicados en el Condominio La Ceiba (Ricaurte, Cundinamarca),
            en una zona campestre de fácil acceso y rodeados de naturaleza. Un
            lugar perfecto para desconectarte de la rutina y disfrutar.
          </Text>

          <TouchableOpacity
            style={LocationStyles.button}
            activeOpacity={0.8}
            onPress={handleOpenMaps}
          >
            <Text style={LocationStyles.buttonText}>
              Ver en Google Maps →
            </Text>
          </TouchableOpacity>
        </View>

        {/* BLOQUE 2: VISTA PREVIA DEL MAPA */}
        <View style={LocationStyles.mapColumn}>
          {Platform.OS === 'web' ? (
            <iframe
              title="Ubicación Ricaurte"
              src="https://maps.google.com/maps?q=Ricaurte%20Cundinamarca%20Condominio%20La%20Ceiba&t=&z=14&ie=UTF8&iwloc=&output=embed"
              style={LocationStyles.mapIframe}
              loading="lazy"
            />
          ) : (
            <TouchableOpacity
              style={{ flex: 1 }}
              activeOpacity={0.9}
              onPress={handleOpenMaps}
            >
              <Image
                source={require('../images/bannercasa.jpg')} // Puedes colocar una captura estática del mapa aquí
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
              />
            </TouchableOpacity>
          )}
        </View>

        {/* BLOQUE 3: SECCIÓN CÓDIGO QR */}
        <View style={LocationStyles.qrColumn}>
          <View style={LocationStyles.qrHeader}>
            <Text style={LocationStyles.qrIcon}>📱</Text>
            <Text style={LocationStyles.qrTitle}>
              Escanea y descubre más de nuestra finca
            </Text>
          </View>

          <View style={LocationStyles.qrContainer}>
            <Image
              source={{ uri: qrApiUrl }}
              style={LocationStyles.qrImage}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </View>
  );
}


export default LocationSection;