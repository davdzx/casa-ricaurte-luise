import { StyleSheet, Platform } from 'react-native';

const RoomsStyles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    paddingHorizontal: 20,
    backgroundColor: '#F8FAFC', // Fondo ligeramente gris/cálido para diferenciar la sección
  },
  wrapper: {
    flexDirection: 'column',
    gap: 32,
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  wrapperDesktop: {
    flexDirection: 'row',
    gap: 40,
    alignItems: 'flex-start',
  },

  /* --- BLOQUE 1: INFORMACIÓN Y TEXTO --- */
  textColumn: {
    width: '100%',
  },
  textColumnDesktop: {
    width: '32%',
    paddingRight: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0F172A',
    lineHeight: 38,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#64748B',
    marginBottom: 16,
  },
  description: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 24,
    marginBottom: 28,
  },
  buttonOutline: {
    borderWidth: 1.5,
    borderColor: '#334155',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#334155',
    fontWeight: '600',
    fontSize: 14,
  },

  /* --- BLOQUE 2: CARDS DE HABITACIONES --- */
  cardsColumn: {
    width: '100%',
    flexDirection: 'column',
    gap: 20,
  },
  cardsColumnDesktop: {
    width: '68%',
    flexDirection: 'row',
    gap: 16,
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  imageTouchable: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardContent: {
    paddingVertical: 14,
    paddingHorizontal: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 8,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  detailIcon: {
    fontSize: 14,
    marginRight: 8,
    color: '#64748B',
  },
  detailText: {
    fontSize: 13,
    color: '#64748B',
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
});

export default RoomsStyles;