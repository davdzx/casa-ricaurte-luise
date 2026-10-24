import { StyleSheet, Platform } from 'react-native';

const LocationStyles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    paddingHorizontal: 20,
    backgroundColor: '#F8FAFC', // Fondo claro
  },
  wrapper: {
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#F1F5F9',
    flexDirection: 'column',
  },
  wrapperDesktop: {
    flexDirection: 'row',
  },

  /* COLUMNA 1: INFORMACIÓN */
  infoColumn: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
  },
  iconHeader: {
    fontSize: 24,
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 22,
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#065F46', // Verde bosque / corporativo
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 25,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },

  /* COLUMNA 2: MAPA */
  mapColumn: {
    flex: 1.2,
    minHeight: 250,
    position: 'relative',
    backgroundColor: '#E2E8F0',
  },
  mapIframe: {
    width: '100%',
    height: '100%',
    borderWidth: 0,
  },

  /* COLUMNA 3: SECCIÓN CÓDIGO QR */
  qrColumn: {
    flex: 0.9,
    backgroundColor: '#064E3B', // Tono verde oscuro
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  qrIcon: {
    fontSize: 22,
  },
  qrTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    maxWidth: 160,
    lineHeight: 18,
  },
  qrContainer: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  qrImage: {
    width: 140,
    height: 140,
  },
});

export default LocationStyles;