import { View, type ViewProps } from 'react-native';
import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

export type ThemedViewProps = ViewProps & {
};

export function ThemedView({ style, ...otherProps }: ThemedViewProps) {
  return <View style={[styles.default, style]} {...otherProps} />;
}


const styles = StyleSheet.create({
  default: {
    backgroundColor: Colors.styles.background,
    //width: '100%',
    //height: '100%',
    //minWidth: '100%',
    //minHeight: '100%',
    //maxWidth: '100%',
    //maxHeight: '100%',
  } });