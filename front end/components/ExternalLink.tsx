import { Link } from 'expo-router';
import { openBrowserAsync } from 'expo-web-browser';
import { type ComponentProps } from 'react';
import { Platform } from 'react-native';

type LinkProps = Omit<ComponentProps<typeof Link>, 'href'> & { url: string };

export function ExternalLink({ url, ...rest }: LinkProps) {
  return (
    <Link
      target="_blank"
      {...rest}
      href={url}
      onPress={async (event) => {
        if (Platform.OS !== 'web') {
          event.preventDefault();
          await openBrowserAsync(url);
        }
      }}
    />
  );
}