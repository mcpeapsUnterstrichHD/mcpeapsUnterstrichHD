// This file is a fallback for using MaterialIcons on Android and web.

import { ThemedText, ThemedTextProps } from '@/components/ThemedText';
import React from 'react';

export type IconSymbolProps = ThemedTextProps & {
  name: string,
  size: number,
  color: string,
};

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  ...rest
}: IconSymbolProps) {
  return <ThemedText style={[{
    fontSize: size,
    lineHeight: size,
    color: color,
  },style]} type='Mono-Regular' {...rest} >{name}</ThemedText>;
}
