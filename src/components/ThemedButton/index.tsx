
import { Colors } from '@/constants/Colors';
import { Button, ButtonProps } from 'react-native';

export type ThemedButtonProps = ButtonProps & {
};

export function ThemedButton({
  ...rest
}: ThemedButtonProps) {
  const color = Colors.styles.text;
  return (<Button color={color}  {...rest} />);
}
