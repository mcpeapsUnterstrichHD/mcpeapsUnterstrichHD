import { Link, RelativePathString } from 'expo-router';
import { openBrowserAsync } from 'expo-web-browser';
import { type ComponentProps } from 'react';
import { Linking } from 'react-native';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: string };

export function ExternalLink({ href, ...rest }: Props) {
  const handlePress = async (event: any) => {
    event.preventDefault();
    if (href.startsWith('tel:') || href.startsWith('mailto:')) {
      await Linking.openURL(href);
    } else {
      await openBrowserAsync(href);
    }
  };

  return (
    <Link
      target="_blank"
      {...rest}
      href={href as RelativePathString}
      onPress={handlePress}
    />
  );
}
