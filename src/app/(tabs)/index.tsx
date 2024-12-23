import { Image, StyleSheet } from 'react-native';


import ParallaxScrollView from '@src/components/HomeParallaxScrollView/index.ios';
import { ThemedText } from '@src/components/ThemedText';
import { ThemedView } from '@src/components/ThemedView';
import { Colors } from '@src/constants/Colors';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={Colors.black}
      headerImage={
        <Image
          source={require('@public/images/icon.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText  type="title">Fabian Aps</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">ITler/DJ/Producer aus Leidenschaft</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    fontFamily: 'Sans',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    fontFamily: 'Sans',
  },
  reactLogo: {
    height: 390.0,
    width: 390.0,
    padding: 32.0,
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
});
