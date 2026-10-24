import { StyleSheet, Platform } from 'react-native';

const GalleryStyles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  wrapper: {
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },

  /* --- CABECERA --- */
  header: {
    flexDirection: 'column',
    gap: 16,
    marginBottom: 24,
  },
  headerDesktop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  titleGroup: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0F172A',
    lineHeight: 38,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748B',
  },

  /* FLECHAS DE NAVEGACIÓN */
  controlsContainer: {
    flexDirection: 'row',
    gap: 12,
    alignSelf: 'flex-start',
  },
  controlButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlText: {
    fontSize: 18,
    color: '#334155',
    fontWeight: '600',
    marginTop: -2,
  },

  /* --- CARRUSEL --- */
  scrollContent: {
    gap: 16,
    paddingRight: 20, // Espacio final para el scroll
  },
  card: {
    width: 260, // Ancho fijo por tarjeta en el carrusel
    height: 180,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#F1F5F9',
  },
  imageTouchable: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },

  /* --- MODAL PANTALLA COMPLETA --- */
  modalContainer: {
    ...StyleSheet.absoluteFillObject,
    position: Platform.OS === 'web' ? 'fixed' : 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(15, 23, 42, 0.92)',
  },
  modalBackground: {
    ...StyleSheet.absoluteFillObject,
  },
  fullImage: {
    width: '90%',
    height: '80%',
  },
  closeButton: {
    position: 'absolute',
    top: 30,
    right: 25,
    zIndex: 10000,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  /* --- NUEVOS ESTILOS PARA LAS FLECHAS DEL MODAL --- */
  modalArrow: {
    position: 'absolute',
    top: '50%',
    marginTop: -25, // Centra verticalmente según su propia altura
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10001,
  },
  modalArrowLeft: {
    left: 20, // Distancia desde el borde izquierdo
  },
  modalArrowRight: {
    right: 20, // Distancia desde el borde derecho
  },
  modalArrowText: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '300',
    lineHeight: 34,
    textAlign: 'center',
  },












});

export default GalleryStyles;