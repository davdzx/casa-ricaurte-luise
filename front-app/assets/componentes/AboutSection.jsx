  import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  useWindowDimensions,
} from 'react-native';
import AboutStyles from '../Styles/AboutStyle';

const HIGHLIGHTS = [
  'Piscina y Jacuzzy privado',
  'Zona de BBQ y comedor exterior',
  'Amplias zonas verdes',
  'Parqueadero privado',
  'Tenis de Mesa, Bolirana, Arcade',
];

const IMAGES = {
  main: require('../images/About-IMG3.jpg'),
  side1: require('../images/About-IMG2.jpg'),
  side2: require('../images/About-IMG1.jpg'),
};

export default function AboutSection() {
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <View style={AboutStyles.container}>
      <View style={[AboutStyles.wrapper, isDesktop && AboutStyles.wrapperDesktop]}>
        
        {/* BLOQUE 1: DESCRIPCIÓN */}
        <View style={[AboutStyles.textColumn, isDesktop && AboutStyles.textColumnDesktop]}>
          <Text style={AboutStyles.subtitle}>Quinta Solari</Text>
          <Text style={AboutStyles.title}>Espacios diseñados{"\n"}para tu descanso</Text>
          
          <Text style={AboutStyles.description}>
            Nuestra finca cuenta con una casa amplia, moderna y acogedora, con
            todos los espacios que necesitas para disfrutar, relajarte y compartir.
          </Text>

          <View style={AboutStyles.listContainer}>
            {HIGHLIGHTS.map((item, index) => (
              <View key={index} style={AboutStyles.listItem}>
                <Text style={AboutStyles.checkIcon}>✓</Text>
                <Text style={AboutStyles.listText}>{item}</Text>
              </View>
            ))}
          </View>

          <TouchableOpacity style={AboutStyles.button} activeOpacity={0.8}>
            <Text style={AboutStyles.buttonText}>Ver más fotos →</Text>
          </TouchableOpacity>
        </View>

        {/* BLOQUE 2: GALERÍA DE IMÁGENES */}
        <View style={[AboutStyles.imageColumn, isDesktop && AboutStyles.imageColumnDesktop]}>
          
          {/* Foto Principal Grande */}
          <View style={[AboutStyles.mainImageContainer, isDesktop && AboutStyles.mainImageContainerDesktop]}>
            <View style={AboutStyles.imageBox}>
              <TouchableOpacity 
                activeOpacity={0.9} 
                style={AboutStyles.imageTouchable}
                onPress={() => setSelectedImage(IMAGES.main)}
              >
                <Image
                  source={IMAGES.main}
                  style={AboutStyles.image}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Columna con 2 Fotos Apiladas */}
          <View style={[
            AboutStyles.sideImagesContainer, 
            isDesktop && AboutStyles.sideImagesContainerDesktop
          ]}>
            <View style={[
              AboutStyles.sideImageBoxMobile, 
              isDesktop && AboutStyles.sideImageBoxDesktop
            ]}>
              <TouchableOpacity 
                activeOpacity={0.9} 
                style={AboutStyles.imageTouchable}
                onPress={() => setSelectedImage(IMAGES.side1)}
              >
                <Image
                  source={IMAGES.side1}
                  style={AboutStyles.image}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>

            <View style={[
              AboutStyles.sideImageBoxMobile, 
              isDesktop && AboutStyles.sideImageBoxDesktop
            ]}>
              <TouchableOpacity 
                activeOpacity={0.9} 
                style={AboutStyles.imageTouchable}
                onPress={() => setSelectedImage(IMAGES.side2)}
              >
                <Image
                  source={IMAGES.side2}
                  style={AboutStyles.image}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>
          </View>

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
          <View style={AboutStyles.modalContainer}>
            <TouchableOpacity 
              style={AboutStyles.modalBackground} 
              activeOpacity={1}
              onPress={() => setSelectedImage(null)} 
            />

            <TouchableOpacity 
              style={AboutStyles.closeButton} 
              onPress={() => setSelectedImage(null)}
            >
              <Text style={AboutStyles.closeButtonText}>✕</Text>
            </TouchableOpacity>

            <Image
              source={selectedImage}
              style={AboutStyles.fullImage}
              resizeMode="contain"
            />
          </View>
        </Modal>
      )}

    </View>
  );
}
