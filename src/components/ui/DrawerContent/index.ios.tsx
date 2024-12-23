import { Colors } from "@src/constants/Colors";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "@src/components/ThemedText";
import { ThemedView } from "@src/components/ThemedView";
import { useRouter } from "expo-router";
import { Image, StyleSheet} from 'react-native';
import { ThemedTouchableOpacity } from "@src/components/ThemedTouchableOpacity";
import { ExternalLink } from "@src/components/ExternalLink";

export default function MyDrawerContent(props: any) {
    const today = new Date();
    const { bottom, top } = useSafeAreaInsets()
    const router = useRouter()

    return (
        <ThemedView style={{
            flex: 1,
            paddingBottom: bottom,
            paddingTop: top,
        }}>
            <ThemedTouchableOpacity onPress={() => router.replace('/')}>
                <ThemedView>
                    <Image source={require('@public/images/icon.png')}style={styles.reactLogo}/>
                    <ThemedText type={'title'} style={{alignSelf: 'center',}}>Fabian Aps</ThemedText>
                    <ThemedText type='subtitle' style={{alignSelf: 'center',}}>ITler/DJ/Producer</ThemedText>
                </ThemedView>
            </ThemedTouchableOpacity>
            <DrawerContentScrollView {...props}
                scrollEnabled={false}
                contentContainerStyle={{
                    backgroundColor: Colors.styles.background,
                    paddingHorizontal: 16,
                    height: '100%',
                    gap: 1,
                }}
            >
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <ThemedView
                style={{
                    borderTopColor: Colors.gray,
                    borderTopWidth: 1,
                    paddingTop: 20,
                    paddingLeft: 20,
                    flexDirection: 'column',
                }}
            >
                <ThemedTouchableOpacity onPress={() => router.replace('/')}>
                    <ThemedText type={'defaultSemiBold'} style={{
                        color: Colors.gray,
                    }}>
                        &copy; {today.getFullYear()} Fabian Aps
                    </ThemedText>
                </ThemedTouchableOpacity>
                <ThemedView style={{
                    flexDirection: 'row',
                    padding: 2,
                    gap:2,
                }}>
                    <ExternalLink href='https://link.me/mcpeaps_hd'>
                        <ThemedText type={'default'} style={{color: Colors.styles.text,}}>Linkhub</ThemedText>
                    </ExternalLink>
                    <ThemedText type={'default'} style={{ color: Colors.styles.text, }}>|</ThemedText>
                    <ThemedTouchableOpacity onPress={() => router.replace('/')}>
                        <ThemedText type={'default'} style={{ color: Colors.styles.text, }}>Fabian Aps</ThemedText>
                    </ThemedTouchableOpacity>
                    <ThemedText type={'default'} style={{ color: Colors.styles.text, }}>|</ThemedText>
                    <ThemedTouchableOpacity onPress={() => router.replace('/impressum')}>
                        <ThemedText type={'default'} style={{ color: Colors.styles.text, }}>Impressum</ThemedText>
                    </ThemedTouchableOpacity>
                </ThemedView>
            </ThemedView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    reactLogo: {
        height: 200.0,
        width: 200.0,
        padding: 32.0,
        resizeMode: 'contain',
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'relative',
  }
});