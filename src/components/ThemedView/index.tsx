import { View, type ViewProps } from 'react-native';

import { Colors } from '@src/constants/Colors';

export type ThemedViewProps = ViewProps & {
};

export function ThemedView({ style, ...otherProps }: ThemedViewProps) {
  const backgroundColor = Colors.styles.background

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
