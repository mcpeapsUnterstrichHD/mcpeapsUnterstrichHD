
import { Colors } from '@/constants/Colors';
import {TouchableOpacity, TouchableOpacityProps } from 'react-native';

export type ThemedTouchableOpacityProps = TouchableOpacityProps & {
};

export function ThemedTouchableOpacity({
  ...rest
}: ThemedTouchableOpacityProps) {
  return (<TouchableOpacity {...rest} />);
}
