import React from 'react';
import { Text, View, Image, useWindowDimensions } from 'react-native';
import FeaturesStyles from '../Styles/FeaturesStyle';

const FEATURES = [
  {
    id: '1',
    icon: require('../../assets/images/piscina-IMG.png'),
    title: 'Piscina privada',
    subtitle: 'Para disfrutar en familia',
  },
  {
    id: '2',
    icon: require('../../assets/images/bbq-IMG.png'),
    title: 'Zona BBQ',
    subtitle: 'Reúnate y comparte',
  },
  {
    id: '3',
    icon: require('../../assets/images/personas-IMG.png'),
    title: '8 personas',
    subtitle: 'Capacidad máxima',
  },
  {
    id: '4',
    icon: require('../../assets/images/arcade-IMG.png'),
    title: 'Zona de Juegos',
    subtitle: 'Entretenimiento',
  },
  {
    id: '5',
    icon: require('../../assets/images/parqueadero-IMG.png'),
    title: 'Parqueadero',
    subtitle: 'Seguro y privado',
  },
];

export default function FeaturesSection() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  return (
    <View style={FeaturesStyles.container}>
      <View style={[FeaturesStyles.grid, isDesktop && FeaturesStyles.gridDesktop]}>
        {FEATURES.map((item) => (
          <View 
            key={item.id} 
            style={[
              FeaturesStyles.featureCard, 
              isDesktop && FeaturesStyles.featureCardDesktop
            ]}
          >
            <Image 
              source={item.icon} 
              style={FeaturesStyles.iconImage}
              resizeMode="contain"
            />
            <View style={FeaturesStyles.textContainer}>
              <Text style={FeaturesStyles.title}>{item.title}</Text>
              <Text style={FeaturesStyles.subtitle}>{item.subtitle}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}