 import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  heroBackground: {
    width: '100%',
    minHeight: 600,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: 'space-between',
    alignItems: 'center', // Centra el contenedor interno horizontalmente en web/desktop
  },
  /* Contenedor interno para alinear con el ancho máximo de 1200px del resto de secciones */
  innerContainer: {
    width: '100%',
    maxWidth: 1200,
    flex: 1,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  header: {
    marginTop: 10,
    width: '100%',
  },
  brandTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  brandSubtitle: {
    color: '#E0E0E0',
    fontSize: 12,
  },
  contentContainer: {
    marginBottom: 40,
    maxWidth: 650,
    width: '100%', // Asegura que respete el maximo en desktop
  },
  tagline: {
    color: '#A3E635',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  mainTitle: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 38,
    marginBottom: 14,
  },
  mainTitleDesktop: {
    fontSize: 48,
    lineHeight: 54,
  },
  description: {
    color: '#F3F4F6',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 24,
  },
  descriptionDesktop: {
    fontSize: 16,
    lineHeight: 24,
  },
  buttonRow: {
    flexDirection: 'column',
    gap: 12,
  },
  buttonRowDesktop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#16A34A',
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 25,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 25,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15,
  },
});

export default styles;