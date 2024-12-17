import { Text, type TextProps, StyleSheet, Falsy, RecursiveArray, RegisteredStyle } from 'react-native';
import { Colors } from '@/constants/Colors';
import { TextStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = Colors.styles.text;

  return (
    <Text
      style={style, [styles[type], { color }]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'sans',
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    fontFamily: 'sans',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
    fontFamily: 'sans',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: Colors.link,
    fontFamily: 'sans',
  },
});
