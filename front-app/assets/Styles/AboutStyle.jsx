 import { StyleSheet } from 'react-native';

const AboutStyles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    position: 'relative',
  },
  wrapper: {
    flexDirection: 'column',
    gap: 24,
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  wrapperDesktop: {
    flexDirection: 'row',
    gap: 32,
    alignItems: 'center',
  },

  /* --- BLOQUE 1: TEXTOS --- */
  textColumn: {
    width: '100%',
  },
  textColumnDesktop: {
    width: '42%',
    paddingRight: 16,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#64748B',
    letterSpacing: 1.5,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0F172A',
    lineHeight: 34,
    marginBottom: 16,
  },
  description: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 24,
    marginBottom: 20,
  },
  listContainer: {
    marginBottom: 24,
    gap: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkIcon: {
    color: '#15803D',
    fontWeight: 'bold',
    marginRight: 10,
    fontSize: 15,
  },
  listText: {
    fontSize: 15,
    color: '#334155',
  },
  button: {
    backgroundColor: '#059669',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },

  /* --- BLOQUE 2: GALERÍA DE IMÁGENES --- */
  imageColumn: {
    width: '100%',
    gap: 12,
  },
  imageColumnDesktop: {
    width: '58%',
    flexDirection: 'row',
    height: 380, 
    gap: 16,     
  },

  /* Contenedores de Imagen Principal */
  mainImageContainer: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    overflow: 'hidden',
  },
  mainImageContainerDesktop: {
    width: '65%', 
    height: '100%',
  },

  /* Contenedores de Imágenes Secundarias */
  sideImagesContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: 12,
    height: 120,
  },
  sideImagesContainerDesktop: {
    width: '35%', 
    flexDirection: 'column',
    height: '100%',
    gap: 16,      
  },

  /* Cajas contenedoras individuales */
  imageBox: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#F1F5F9', 
  },
  sideImageBoxMobile: {
    flex: 1,
    height: '100%',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#F1F5F9',
  },
  sideImageBoxDesktop: {
    flex: 1, // Cambiado de 0 a 1 para que React Native Web distribuya el espacio equitativamente
    width: '100%',
    height: undefined, // Elimina la restricción de altura rígida heredada de la vista móvil
  },

  imageTouchable: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },

  /* --- MODAL --- */
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 10,
    borderRadius: 20,
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  fullImage: {
    width: '90%',
    height: '80%',
  },
});

export default AboutStyles;
