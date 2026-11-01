 import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  useWindowDimensions,
} from 'react-native';
import RoomsStyles from '../Styles/RoomsStyle';

// Actualizamos los datos para permitir múltiples comodidades por habitación
const ROOMS_DATA = [
  {
    id: '1',
    title: 'Habitación 1',
    features: [
      { icon: '🛏', text: ' 2 Camas Dobles - 1 Cama Sencilla' },
      { icon: '🚿', text: 'Baño privado' },
      { icon: '🌀', text: 'Ventilador y Closet' },
    ],
    image: require('../images/Room-IMG1.jpg'), // REEMPLAZA CON TU FOTO
  },
  {
    id: '2',
    title: 'Habitación 2',
    features: [
      { icon: '🛏', text: '1 Camarote y 4 Camas Sencillas' },
        { icon: '🚿', text: 'Baño privado y Closet ' },
      { icon: '🌀', text: '2 Ventiladores' },
    ],
    image: require('../images/Room-IMG2.jpg'), // REEMPLAZA CON TU FOTO
  },
  {
    id: '3',
    title: 'Habitación 3',
    features: [
      { icon: '🛏', text: '1 Camarote y 2 Camas Sencillas' },
      { icon: '🌀', text: '2 Ventiladores y Closet ' },
    ],
    image: require('../images/Room-IMG3.jpg'), // REEMPLAZA CON TU FOTO
  },
];

export default function RoomsSection() {
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <View style={RoomsStyles.container}>
      <View style={[RoomsStyles.wrapper, isDesktop && RoomsStyles.wrapperDesktop]}>
        
        {/* BLOQUE 1: INFORMACIÓN Y TEXTO */}
        <View style={[RoomsStyles.textColumn, isDesktop && RoomsStyles.textColumnDesktop]}>
          <Text style={RoomsStyles.title}>Habitaciones</Text>
          <Text style={RoomsStyles.subtitle}>Comodidad para todos</Text>
          
          <Text style={RoomsStyles.description}>
            Contamos con 3 acogedoras habitaciones con capacidad para 14 personas, todas cuentan con ventiladores y closet , la principal con baño privado.
            Además, la casa dispone de 4 baños y una amplia sala-comedor y sala de juegos.
          </Text>

          <TouchableOpacity style={RoomsStyles.buttonOutline} activeOpacity={0.7}>
            <Text style={RoomsStyles.buttonText}>Ver todas las habitaciones →</Text>
          </TouchableOpacity>
        </View>

        {/* BLOQUE 2: TARJETAS DE HABITACIONES */}
        <View style={[RoomsStyles.cardsColumn, isDesktop && RoomsStyles.cardsColumnDesktop]}>
          {ROOMS_DATA.map((room) => (
            <View key={room.id} style={RoomsStyles.card}>
              
              {/* Imagen Clickeable */}
              <TouchableOpacity
                activeOpacity={0.9}
                style={RoomsStyles.imageTouchable}
                onPress={() => setSelectedImage(room.image)}
              >
                <Image
                  source={room.image}
                  style={RoomsStyles.cardImage}
                  resizeMode="cover"
                />
              </TouchableOpacity>

              {/* Información de la Habitación */}
              <View style={RoomsStyles.cardContent}>
                <Text style={RoomsStyles.cardTitle}>{room.title}</Text>
                
                {/* Mapeo dinámico de características/íconos */}
                {room.features.map((feature, idx) => (
                  <View key={idx} style={RoomsStyles.detailRow}>
                    <Text style={RoomsStyles.detailIcon}>{feature.icon}</Text>
                    <Text style={RoomsStyles.detailText}>{feature.text}</Text>
                  </View>
                ))}
              </View>

            </View>
          ))}
        </View>

      </View>

      {/* MODAL / VISOR PANTALLA COMPLETA */}
      {selectedImage && (
        <Modal
          visible={true}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setSelectedImage(null)}
        >
          <View style={RoomsStyles.modalContainer}>
            <TouchableOpacity 
              style={RoomsStyles.modalBackground} 
              activeOpacity={1}
              onPress={() => setSelectedImage(null)} 
            />

            <TouchableOpacity 
              style={RoomsStyles.closeButton} 
              onPress={() => setSelectedImage(null)}
            >
              <Text style={RoomsStyles.closeButtonText}>✕</Text>
            </TouchableOpacity>

            <Image
              source={selectedImage}
              style={RoomsStyles.fullImage}
              resizeMode="contain"
            />
          </View>
        </Modal>
      )}

    </View>
  );
}