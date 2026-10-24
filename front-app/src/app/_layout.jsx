import { useEffect } from 'react';
import { Slot } from 'expo-router';
import { useFonts } from 'expo-font';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Layout() {
  const [loaded, error] = useFonts({
    ...MaterialCommunityIcons.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  if (!loaded) {
    return null;
  }

  return <Slot />;
}