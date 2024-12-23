import { Text, type TextProps, StyleSheet} from 'react-native';
import { Colors } from '@src/constants/Colors';

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
      style={[style, styles[type], { color }]}
      {...rest} adjustsFontSizeToFit = {true}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Sans',
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    fontFamily: 'Sans',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
    fontFamily: 'Sans',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Sans',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: Colors.link,
    fontFamily: 'Sans',
  },
});
