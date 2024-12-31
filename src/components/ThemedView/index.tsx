import { View, type ViewProps } from 'react-native';
import { Colors } from '@/constants/Colors';

export type ThemedViewProps = ViewProps & {
};

export function ThemedView({ style, ...otherProps }: Readonly<ThemedViewProps>) {
  const backgroundColor = Colors.styles.background

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
