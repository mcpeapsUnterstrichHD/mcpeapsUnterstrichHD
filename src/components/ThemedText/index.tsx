import { Text, type TextProps, StyleSheet} from 'react-native';
import { Colors } from '@/constants/Colors';

export type ThemedTextProps = TextProps & {
  type?: 'Sans-Bold' | 'Sans-BoldItalic' | 'Sans-ExtraLight' | 'Sans-ExtraLightItalic' | 'Sans-Italic' | 'Sans-Light' | 'Sans-LightItalic' | 'Sans-Regular' | 'Sans-SemiBold' | 'Sans-SemiBoldItalic' | 'Sans-SemiLight' | 'Sans-SemiLightItalic' | 'Mono-Bold' | 'Mono-BoldItalic' | 'Mono-ExtraLight' | 'Mono-ExtraLightItalic' | 'Mono-Italic' | 'Mono-Light' | 'Mono-LightItalic' | 'Mono-Regular' | 'Mono-SemiBold' | 'Mono-SemiBoldItalic' | 'Mono-SemiLight' | 'Mono-SemiLightItalic' | 'Serif-Bold' | 'Serif-BoldItalic' | 'Serif-ExtraLight' | 'Serif-ExtraLightItalic' | 'Serif-Italic' | 'Serif-Light' | 'Serif-LightItalic' | 'Serif-Regular' | 'Serif-SemiBold' | 'Serif-SemiBoldItalic' | 'Serif-SemiLight' | 'Serif-SemiLightItalic' | 'custom' | 'title' | 'subtitle' | 'code' | 'link';
};

export function ThemedText({
  style,
  type = 'Sans-Regular',
  ...rest
}: ThemedTextProps) {
  const color = Colors.styles.text;

  return (
    <Text
      style={[styles[type],style, { color }]}
      {...rest} adjustsFontSizeToFit = {true}
    />
  );
}

const styles = StyleSheet.create({
  // typetopography
  'Sans-Bold' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
    fontFamily: 'Sans-Bold',
  },
  'Sans-BoldItalic' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'Sans-BoldItalic',
  },
  'Sans-ExtraLight' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '200',
    fontFamily: 'Sans-ExtraLight',
  },
  'Sans-ExtraLightItalic' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '200',
    fontStyle: 'italic',
    fontFamily: 'Sans-ExtraLightItalic',
  },
  'Sans-Italic' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'normal',
    fontStyle: 'italic',
    fontFamily: 'Sans-Italic',
  },
  'Sans-Light' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'light',
    fontFamily: 'Sans-Light',
  },
  'Sans-LightItalic' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'light',
    fontStyle: 'italic',
    fontFamily: 'Sans-LightItalic',
  },
  'Sans-Regular' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'normal',
    fontFamily: 'Sans-Regular',
  },
  'Sans-SemiBold' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'semibold',
    fontFamily: 'Sans-SemiBold',
  },
  'Sans-SemiBoldItalic' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'semibold',
    fontStyle: 'italic',
    fontFamily: 'Sans-SemiBoldItalic',
  },
  'Sans-SemiLight' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '300',
    fontFamily: 'Sans-SemiLight',
  },
  'Sans-SemiLightItalic' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '300',
    fontStyle: 'italic',
    fontFamily: 'Sans-SemiLightItalic',
  },
  'Mono-Bold' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
    fontFamily: 'Mono-Bold',
  },
  'Mono-BoldItalic' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'Mono-BoldItalic',
  },
  'Mono-ExtraLight' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '200',
    fontFamily: 'Mono-ExtraLight',
  },
  'Mono-ExtraLightItalic' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '200',
    fontStyle: 'italic',
    fontFamily: 'Mono-ExtraLightItalic',
  },
  'Mono-Italic' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'normal',
    fontStyle: 'italic',
    fontFamily: 'Mono-Italic',
  },
  'Mono-Light' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'light',
    fontFamily: 'Mono-Light',
  },
  'Mono-LightItalic' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'light',
    fontStyle: 'italic',
    fontFamily: 'Mono-LightItalic',
  },
  'Mono-Regular' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'normal',
    fontFamily: 'Mono-Regular',
  },
  'Mono-SemiBold' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'semibold',
    fontFamily: 'Mono-SemiBold',
  },
  'Mono-SemiBoldItalic' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'semibold',
    fontStyle: 'italic',
    fontFamily: 'Mono-SemiBoldIalic',
  },
  'Mono-SemiLight' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '300',
    fontFamily: 'Mono-SemiLight',
  },
  'Mono-SemiLightItalic' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '300',
    fontStyle: 'italic',
    fontFamily: 'Mpno-SemiLightItalic',
  },
  'Serif-Bold' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
    fontFamily: 'Serif-Bold',
  },
  'Serif-BoldItalic' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'Serif-BoldItalic',
  },
  'Serif-ExtraLight' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '200',
    fontFamily: 'Serif-ExtraLight',
  },
  'Serif-ExtraLightItalic' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '200',
    fontStyle: 'italic',
    fontFamily: 'Serif-ExtraLightItalic',
  },
  'Serif-Italic' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'normal',
    fontStyle: 'italic',
    fontFamily: 'Serif-Italic',
  },
  'Serif-Light' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'light',
    fontFamily: 'Serif-Light',
  },
  'Serif-LightItalic' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'light',
    fontStyle: 'italic',
    fontFamily: 'Serif-LightItalic',
  },
  'Serif-Regular' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'normal',
    fontFamily: 'Serif-Regular',
  },
  'Serif-SemiBold' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'semibold',
    fontFamily: 'Serif-SemiBold',
  },
  'Serif-SemiBoldItalic' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'semibold',
    fontStyle: 'italic',
    fontFamily: 'Serif-SemiBoldItalic',
  },
  'Serif-SemiLight' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '300',
    fontFamily: 'Serif-SemiLight',
  },
  'Serif-SemiLightItalic' : {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '300',
    fontStyle: 'italic',
    fontFamily: 'Serif-SemiLightItalic',
  },
  // custom
  custom: {},
  // predfind
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
    fontFamily: 'Sans-Bold',
  },
  subtitle: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 'bold',
    fontFamily: 'Sans-Bold',
  },
  code: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: 'normal',
    fontFamily: 'Mono-Regular',
  },
  link: {
    lineHeight: 16,
    fontSize: 16,
    color: Colors.styles.link,
    fontFamily: 'Sans-Regular',
  },
});
