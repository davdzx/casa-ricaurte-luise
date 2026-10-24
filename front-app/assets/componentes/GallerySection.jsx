 import React, { useState, useRef } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  useWindowDimensions,
} from 'react-native';
import GalleryStyles from '../Styles/GalleryStyle';

const GALLERY_IMAGES = [
  { id: '1', source: require('../images/Gallery-IMG1.jpg') },
  { id: '2', source: require('../images/Gallery-IMG2.jpg') },
  { id: '3', source: require('../images/Gallery-IMG3.jpg') },
  { id: '4', source: require('../images/bannercasa.jpg') },
  { id: '5', source: require('../images/bannercasa.jpg') },
  { id: '6', source: require('../images/bannercasa.jpg') },
];

function GallerySection() {
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;
  
  // 🚀 CAMBIO: Ahora guardamos el ÍNDICE (0, 1, 2...) de la imagen activa en lugar del source
  const [activeIndex, setActiveIndex] = useState(null);

  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollRef.current.scrollTo({
        x: scrollRef.current.scrollOffset
          ? scrollRef.current.scrollOffset + scrollAmount
          : scrollAmount,
        animated: true,
      });
    }
  };

  // 🚀 NUEVO: Funciones para cambiar de imagen dentro del modal
  const handlePrevImage = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(GALLERY_IMAGES.length - 1); // Va a la última si está en la primera
    }
  };

  const handleNextImage = () => {
    if (activeIndex < GALLERY_IMAGES.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0); // Vuelve a la primera si está en la última
    }
  };

  return (
    <View style={GalleryStyles.container}>
      <View style={GalleryStyles.wrapper}>
        
        {/* CABECERA CON TÍTULO Y NAVEGACIÓN */}
        <View style={[GalleryStyles.header, isDesktop && GalleryStyles.headerDesktop]}>
          <View style={GalleryStyles.titleGroup}>
            <Text style={GalleryStyles.title}>Galería</Text>
            <Text style={GalleryStyles.subtitle}>Un vistazo a lo que te espera</Text>
          </View>

          <View style={GalleryStyles.controlsContainer}>
            <TouchableOpacity
              style={GalleryStyles.controlButton}
              activeOpacity={0.7}
              onPress={() => handleScroll('left')}
            >
              <Text style={GalleryStyles.controlText}>‹</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={GalleryStyles.controlButton}
              activeOpacity={0.7}
              onPress={() => handleScroll('right')}
            >
              <Text style={GalleryStyles.controlText}>›</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* CARRUSEL HORIZONTAL */}
        <ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={GalleryStyles.scrollContent}
          onScroll={(e) => {
            if (scrollRef.current) {
              scrollRef.current.scrollOffset = e.nativeEvent.contentOffset.x;
            }
          }}
          scrollEventThrottle={16}
        >
          {GALLERY_IMAGES.map((item, index) => (
            <View key={item.id} style={GalleryStyles.card}>
              <TouchableOpacity
                activeOpacity={0.9}
                style={GalleryStyles.imageTouchable}
                onPress={() => setActiveIndex(index)} // 🚀 CAMBIO: Guardamos el índice actual
              >
                <Image
                  source={item.source}
                  style={GalleryStyles.image}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* MODAL / VISOR PANTALLA COMPLETA */}
      {activeIndex !== null && (
        <Modal
          visible={true}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setActiveIndex(null)}
        >
          <View style={GalleryStyles.modalContainer}>
            <TouchableOpacity
              style={GalleryStyles.modalBackground}
              activeOpacity={1}
              onPress={() => setActiveIndex(null)}
            />

            <TouchableOpacity
              style={GalleryStyles.closeButton}
              onPress={() => setActiveIndex(null)}
            >
              <Text style={GalleryStyles.closeButtonText}>✕</Text>
            </TouchableOpacity>

            {/* 🚀 NUEVO: Flecha Izquierda Modal */}
            <TouchableOpacity
              style={[GalleryStyles.modalArrow, GalleryStyles.modalArrowLeft]}
              onPress={handlePrevImage}
            >
              <Text style={GalleryStyles.modalArrowText}>‹</Text>
            </TouchableOpacity>

            {/* Contenedor de la Imagen */}
            <Image
              source={GALLERY_IMAGES[activeIndex].source}
              style={GalleryStyles.fullImage}
              resizeMode="contain"
            />

            {/* 🚀 NUEVO: Flecha Derecha Modal */}
            <TouchableOpacity
              style={[GalleryStyles.modalArrow, GalleryStyles.modalArrowRight]}
              onPress={handleNextImage}
            >
              <Text style={GalleryStyles.modalArrowText}>›</Text>
            </TouchableOpacity>

          </View>
        </Modal>
      )}
    </View>
  );
}

export default GallerySection;
