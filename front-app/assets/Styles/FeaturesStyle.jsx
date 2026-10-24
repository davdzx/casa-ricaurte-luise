 import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FAFAFA', // Fondo ligeramente gris/cálido para dar elegancia
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  grid: {
    width: '100%',
    maxWidth: 1200,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12, // Espaciado limpio entre tarjetas
  },
  gridDesktop: {
    justifyContent: 'space-around',
    gap: 16,
  },
  featureCard: {
    width: '48%', // Fuerza 2 columnas en celulares
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    // Sombra suave para destacar las tarjetas
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
  },
  featureCardDesktop: {
    width: 'auto', // En PC toma solo el ancho necesario para estar en 1 fila
    minWidth: 190,
    flex: 1,
  },
  iconImage: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1A1A1A',
    lineHeight: 18,
  },
  subtitle: {
    fontSize: 11,
    color: '#666666',
    marginTop: 2,
    lineHeight: 14,
  },
});