import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Fabian Aps',
  slug: 'mcpeapsunterstrichhd',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './public/images/icon.png',
  scheme: 'mahd',
  userInterfaceStyle: 'dark',
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.comboom.sucht.mcpeapsunterstrichhd',
    splash: {
      image: './public/images/splash-icon.png',
      backgroundColor: '#2E3440'
    },
    usesBroadcastPushNotifications: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './public/images/adaptive-icon.png',
      backgroundColor: '#2E3440'
    },
    package: 'com.comboom.sucht.mcpeapsunterstrichhd',
    splash: {
      image: './public/images/splash-icon.png',
      backgroundColor: '#2E3440'
    }
  },
  androidNavigationBar: {
    visible: 'sticky-immersive',
    backgroundColor: '#2E3440',
    barStyle: 'light-content',

  },
  androidStatusBar: {
    barStyle: 'light-content',
    backgroundColor: '#2E3440',
    hidden: false,
    translucent: false,
  },
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './public/images/favicon.png',
    themeColor: '#2E3440',
    backgroundColor: '#2E3440',
    name: 'Fabian Aps | Portfolio',
    shortName: 'Fabian Aps',
    splash: {
      image: './public/images/splash-icon.png',
      backgroundColor: '#2E3440'
    },
    statusBar: {
      style: 'dark',
      backgroundColor: '#2E3440'
    },
    webkit: {
      enableInlineMediaPlayback: true,
      forceSoftwareRendering: false,
      mediaPlaybackRequiresUserAction: false,
      presentationStyle: 'fullscreen',
      scrollBounce: true,
      scrollEnabled: true,
      showsPageControl: true,
      tabBarVisible: true,
    },
  },
  notification: {
    icon: './public/images/icon.png',
    color: '#2E3440',
    iosDisplayInForeground: true,
    androidMode: 'collapse',
    androidCollapsedTitle: '#{unread_notifications} new Notifications from mcpeaps_HD',
  },
  plugins: [
    'expo-router',
    'react-native-v8',
    [
      'expo-splash-screen',
      {
        image: './public/images/splash-icon.png',
        backgroundColor: '#2E3440'
      }
    ], [
      'expo-asset',
      {
        assets: [
          './public'
        ]
      }
    ]
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    router: {
      origin: false
    },
    eas: {
      projectId: 'c544932e-5e92-43f6-bfc0-ebc37bf95c01'
    }
  },
  owner: 'mcpeaps_hd',
  githubUrl: 'https://github.com/mcpeapsUnterstrichHD/mcpeapsUnterstrichHD',
  platforms: ['android', 'ios', 'web'],
  description: 'Fabian Aps | Portfolio',
  primaryColor: '#2E3440',
});
