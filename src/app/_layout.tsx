import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import 'expo-dev-client';
import { Colors } from '@/constants/Colors';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  fade: true,
});

export default function App() {
  const [loaded] = useFonts({
    Sans: require('@public/fonts/CaskaydiaCoveNerdFontPropo-Bold.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFontPropo-BoldItalic.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFontPropo-ExtraLight.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFontPropo-ExtraLightItalic.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFontPropo-Italic.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFontPropo-Light.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFontPropo-LightItalic.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFontPropo-Regular.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFontPropo-SemiBold.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFontPropo-SemiBoldItalic.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFontPropo-SemiLight.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFontPropo-SemiLightItalic.ttf'),
    Mono: require('@public/fonts/CaskaydiaCoveNerdFontMono-Bold.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFontMono-BoldItalic.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFontMono-ExtraLight.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFontMono-ExtraLightItalic.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFontMono-Italic.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFontMono-Light.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFontMono-LightItalic.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFontMono-Regular.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFontMono-SemiBold.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFontMono-SemiBoldItalic.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFontMono-SemiLight.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFontMono-SemiLightItalic.ttf'),
    Serif: require('@public/fonts/CaskaydiaCoveNerdFont-Bold.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFont-BoldItalic.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFont-ExtraLight.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFont-ExtraLightItalic.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFont-Italic.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFont-Light.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFont-LightItalic.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFont-Regular.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFont-SemiBold.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFont-SemiBoldItalic.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFont-SemiLight.ttf') ||
      require('@public/fonts/CaskaydiaCoveNerdFont-SemiLightItalic.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar
        style="auto"
        animated={true}
        backgroundColor={Colors.styles.background}
        translucent={true}
      />
    </>
  );
}
