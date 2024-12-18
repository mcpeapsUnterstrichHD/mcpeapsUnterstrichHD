import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Sans: require('@/assets/fonts/CaskaydiaCoveNerdFontPropo-Bold.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFontPropo-BoldItalic.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFontPropo-ExtraLight.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFontPropo-ExtraLightItalic.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFontPropo-Italic.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFontPropo-Light.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFontPropo-LightItalic.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFontPropo-Regular.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFontPropo-SemiBold.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFontPropo-SemiBoldItalic.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFontPropo-SemiLight.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFontPropo-SemiLightItalic.ttf'),
    Mono: require('@/assets/fonts/CaskaydiaCoveNerdFontMono-Bold.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFontMono-BoldItalic.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFontMono-ExtraLight.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFontMono-ExtraLightItalic.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFontMono-Italic.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFontMono-Light.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFontMono-LightItalic.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFontMono-Regular.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFontMono-SemiBold.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFontMono-SemiBoldItalic.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFontMono-SemiLight.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFontMono-SemiLightItalic.ttf'),
    Serif: require('@/assets/fonts/CaskaydiaCoveNerdFont-Bold.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFont-BoldItalic.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFont-ExtraLight.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFont-ExtraLightItalic.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFont-Italic.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFont-Light.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFont-LightItalic.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFont-Regular.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFont-SemiBold.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFont-SemiBoldItalic.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFont-SemiLight.ttf') ||
      require('@/assets/fonts/CaskaydiaCoveNerdFont-SemiLightItalic.ttf'),
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
      <StatusBar style="auto" />
    </>
  );
}
