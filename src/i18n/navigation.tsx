// Navigation wrappers that consider the routing configuration
// Adapted from Next.js next-intl/navigation for TanStack Start

import { Link as TanStackLink, useLocation, useNavigate } from '@tanstack/react-router';
import { routing, getPathname, getLocaleFromPath, removeLocalePrefix } from './routing';
import { LanguagesNUM } from '@/lib/lang';
import { forwardRef, type ComponentProps } from 'react';

// Get current locale from pathname
export function useLocale(): LanguagesNUM {
  const location = useLocation();
  return getLocaleFromPath(location.pathname);
}

// Get pathname without locale prefix
export function usePathname(): string {
  const location = useLocation();
  return removeLocalePrefix(location.pathname);
}

// Router with locale awareness
export function useRouter() {
  const navigate = useNavigate();
  const locale = useLocale();

  return {
    push: (path: string, options?: { locale?: LanguagesNUM }) => {
      const targetLocale = options?.locale ?? locale;
      const localePath = getPathname(path, targetLocale);
      navigate({ to: localePath });
    },
    replace: (path: string, options?: { locale?: LanguagesNUM }) => {
      const targetLocale = options?.locale ?? locale;
      const localePath = getPathname(path, targetLocale);
      navigate({ to: localePath, replace: true });
    },
  };
}

// Link component with locale awareness
type LinkProps = Omit<ComponentProps<typeof TanStackLink>, 'to'> & {
  href: string;
  locale?: LanguagesNUM;
  children?: React.ReactNode;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, locale, ...props }, ref) => {
    const currentLocale = useLocale();
    const targetLocale = locale ?? currentLocale;

    // For external links, use regular anchor
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:')) {
      return <a ref={ref} href={href} {...props} />;
    }

    const localePath = getPathname(href, targetLocale);

    return <TanStackLink ref={ref} to={localePath} {...props} />;
  }
);

Link.displayName = 'Link';

// Re-export redirect helper
export function redirect(path: string, locale?: LanguagesNUM) {
  const targetLocale = locale ?? routing.defaultLocale;
  const localePath = getPathname(path, targetLocale);

  if (typeof window !== 'undefined') {
    window.location.href = localePath;
  }
}

export { getPathname };
