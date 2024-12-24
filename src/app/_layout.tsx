import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import 'expo-dev-client';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  fade: true,
});

export default function App() {
  const [loaded] = useFonts({
    Sans: require('~/fonts/CaskaydiaCoveNerdFontPropo-Bold.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFontPropo-BoldItalic.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFontPropo-ExtraLight.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFontPropo-ExtraLightItalic.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFontPropo-Italic.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFontPropo-Light.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFontPropo-LightItalic.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFontPropo-Regular.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFontPropo-SemiBold.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFontPropo-SemiBoldItalic.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFontPropo-SemiLight.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFontPropo-SemiLightItalic.ttf'),
    Mono: require('~/fonts/CaskaydiaCoveNerdFontMono-Bold.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFontMono-BoldItalic.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFontMono-ExtraLight.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFontMono-ExtraLightItalic.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFontMono-Italic.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFontMono-Light.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFontMono-LightItalic.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFontMono-Regular.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFontMono-SemiBold.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFontMono-SemiBoldItalic.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFontMono-SemiLight.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFontMono-SemiLightItalic.ttf'),
    Serif: require('~/fonts/CaskaydiaCoveNerdFont-Bold.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFont-BoldItalic.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFont-ExtraLight.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFont-ExtraLightItalic.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFont-Italic.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFont-Light.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFont-LightItalic.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFont-Regular.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFont-SemiBold.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFont-SemiBoldItalic.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFont-SemiLight.ttf') ||
      require('~/fonts/CaskaydiaCoveNerdFont-SemiLightItalic.ttf'),
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
