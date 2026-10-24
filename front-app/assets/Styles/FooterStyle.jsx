import { StyleSheet } from 'react-native';

const FooterStyles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 380,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(15, 23, 42, 0.75)', // Capa oscura para dar contraste
  },
  wrapper: {
    maxWidth: 1200,
    width: '100%',
    paddingVertical: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1,
  },

  /* BLOQUE LLAMADO A LA ACCIÓN (CTA) */
  ctaContainer: {
    alignItems: 'center',
    marginBottom: 48,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#E2E8F0',
    textAlign: 'center',
    marginBottom: 24,
  },
  whatsappButton: {
    backgroundColor: '#25D366', // Verde oficial de WhatsApp
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  whatsappIcon: {
    fontSize: 18,
  },
  whatsappText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },

  /* BLOQUE INFERIOR DEL FOOTER */
  bottomRow: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.15)',
    paddingTop: 24,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
  },
  bottomRowDesktop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  brandContainer: {
    alignItems: 'center',
  },
  brandName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  brandTagline: {
    color: '#94A3B8',
    fontSize: 12,
  },
  copyrightText: {
    color: '#94A3B8',
    fontSize: 13,
    textAlign: 'center',
  },
});

export default FooterStyles;