import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';

export default function More() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={Colors.blue}
      headerImage={
        <IconSymbol
          size={310}
          color={Colors.primary}
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">More</ThemedText>
      </ThemedView>
      <ThemedText >This app includes example code to help you get started.</ThemedText>
      <Collapsible title="File-based routing">
        <ThemedText >
          This app has two screens:{' '}
          <ThemedText type="Sans-SemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
          <ThemedText type="Sans-SemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText >
          The layout file in <ThemedText type="Sans-SemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <ThemedText >
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <ThemedText type="Sans-SemiBold">w</ThemedText> in the terminal running this project.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Images">
        <ThemedText >
          For static images, you can use the <ThemedText type="Sans-SemiBold">@2x</ThemedText> and{' '}
          <ThemedText type="Sans-SemiBold">@3x</ThemedText> suffixes to provide files for
          different screen densities
        </ThemedText>
        <Image source={require('@public/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Custom fonts">
        <ThemedText >
          Open <ThemedText type='Mono-Regular'>app/_layout.tsx</ThemedText> to see how to load{' '}
          <ThemedText type='Serif-Regular'>
            custom fonts such as this one.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <ThemedText >
          This template has light and dark mode support. The{' '}
          <ThemedText type="Sans-SemiBold">useColorScheme()</ThemedText> hook lets you inspect
          what the user's current color scheme is, and so you can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <ThemedText >
          This template includes an example of an animated component. The{' '}
          <ThemedText type="Sans-SemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful <ThemedText type="Sans-SemiBold">react-native-reanimated</ThemedText>{' '}
          library to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText >
              The <ThemedText type="Sans-SemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
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
    gap: 8,
  }
});
