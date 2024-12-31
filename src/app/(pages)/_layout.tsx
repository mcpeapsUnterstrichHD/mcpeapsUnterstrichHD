import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { Platform } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import  MyDrawerContent from '@/components/ui/DrawerContent';

export default function TabLayout() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={MyDrawerContent}
        screenOptions={{
          //headerShown: false,
          //tabBarButton: HapticTab,
          headerTintColor: Colors.styles.foreground,
          headerBackButtonDisplayMode: 'minimal',
          headerTitleAllowFontScaling: true,
          headerStyle: {
            backgroundColor: Colors.styles.background,
            borderColor: Colors.gray,
          },
          headerTitleStyle: {
            fontFamily: 'Sans-Bold',
          },
          drawerInactiveBackgroundColor: Colors.styles.background,
          drawerActiveBackgroundColor: Colors.styles.selected_background,
          drawerInactiveTintColor: Colors.styles.foreground,
          drawerActiveTintColor: Colors.styles.selected_foreground,
          drawerLabelStyle: {
            fontFamily: 'Sans-Regular',
          },
          drawerAllowFontScaling: true,
          drawerStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: 'absolute',
              backgroundColor: Colors.styles.background,

            },
            default: {
              backgroundColor: Colors.styles.background,
            },
          }),
          drawerHideStatusBarOnOpen: false,
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: 'Home',
            headerTitle: 'Home',
            drawerIcon: () => <IconSymbol size={28} name="house.circle" color={Colors.styles.icon} />,
          }}
        />
        <Drawer.Screen
          name="aboutme"
          options={{
            title: 'About Me',
            headerTitle: 'About Me',
            drawerIcon: () => <IconSymbol size={28} name="person.circle" color={Colors.styles.icon} />,
          }}
        />
        <Drawer.Screen
          name="projects"
          options={{
            title: 'Projekte',
            headerTitle: 'Projekte',
            drawerIcon: () => <IconSymbol size={28} name="person.circle" color={Colors.styles.icon} />,
          }}
        />
        <Drawer.Screen
          name="lebenslauf"
          options={{
            title: 'Lebenslauf',
            headerTitle: 'Lebenslauf',
            drawerIcon: () => <IconSymbol size={28} name="person.circle" color={Colors.styles.icon} />,
          }}
        />
        <Drawer.Screen
          name="impressum"
          options={{
            title: 'Impressum',
            headerTitle: 'Impressum',
            drawerIcon: () => <IconSymbol size={28} name="checkmark.circle.trianglebadge.exclamationmark" color={Colors.styles.icon} />,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
