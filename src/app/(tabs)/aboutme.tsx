import { StyleSheet, Image, Platform } from 'react-native';

import ParallaxScrollView from '@src/components/HomeParallaxScrollView/index.ios';
import { ThemedText } from '@src/components/ThemedText';
import { ThemedView } from '@src/components/ThemedView';
import { IconSymbol } from '@src/components/ui/IconSymbol';
import { Colors } from '@src/constants/Colors';
import { HelloWave } from '@src/components/HelloWave';

export default function AboutMe() {
  const today = new Date();
  const birthday = new Date("2003-06-06");
  var age = today.getFullYear() - birthday.getFullYear();
  const m = today.getMonth() - birthday.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  return (
    <ParallaxScrollView
      headerBackgroundColor={Colors.blue}
      headerImage={
        <IconSymbol
          size={390}
          color={Colors.primary}
          name="person"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText  type="title">About Me</ThemedText>
      </ThemedView>
      <ThemedView style={styles.subtitleContainer}>
        <ThemedText type='subtitle' >Hallo </ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      <ThemedText type='subtitle' >Ich bin Fabian Aps</ThemedText>
        <ThemedText type='subtitle' >ITler/DJ/Producer</ThemedText>
      <ThemedText>Ich bin ein {age} jähriger ITler/DJ/Producher und ich liebe es
        Software zu entwikeln aber durch mein Praktikum bei der KfW
        Bankengruppe hat mir gezeigt, dass mir Anwendungsbetreung auch nicht
        schwer liegt, denoch mach ich die Entwicklung gerne als Hobby. Musik
        ist dabei auch eine Leidenschaft von mir, egal ab hören oder
        Produzieren.</ThemedText>
    </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: Colors.primary,
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    fontFamily: 'Sans',
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    fontFamily: 'Sans',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    fontFamily: 'Sans',
  }
});
