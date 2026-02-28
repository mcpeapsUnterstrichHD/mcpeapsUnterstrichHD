/**
 * @module i18n
 * @description Translation resolution helpers for the Intlayer internationalization system.
 * Provides the {@link t} and {@link tArr} functions that dynamically traverse Intlayer
 * dictionary objects to resolve localized strings at runtime.
 *
 * Intlayer stores translations as nested reactive proxy objects. These helpers handle
 * the complexity of unwrapping proxy `.value` getters, stripping dictionary prefixes,
 * resolving parameterized templates, and converting results to plain strings.
 *
 * @see {@link module:lang} — Supported language definitions
 * @see {@link module:getLocale} — Server-side locale detection
 * @see `src/lib/content/*.content.ts` — Intlayer dictionary definition files
 */

/**
 * Resolves a localized string from an Intlayer dictionary store using dot or underscore
 * notation key paths.
 *
 * The function:
 * 1. Strips known dictionary prefixes (e.g. `"Cv."`, `"Projects_"`) from the key
 * 2. Traverses the nested dictionary object along the key path segments
 * 3. Unwraps Intlayer proxy objects (accessing `.value` getters)
 * 4. Supports parameterized strings via `{placeholder}` substitution
 * 5. Falls back to the raw key string if resolution fails
 *
 * @param storeValue - The reactive Intlayer dictionary store value (from `useIntlayer()`)
 * @param key - Dot or underscore separated path to the translation
 *              (e.g. `"hero.greeting"` or `"Cv.about.name"`)
 * @param params - Optional key-value pairs for template substitution
 *                 (replaces `{key}` patterns in the resolved string)
 * @returns The resolved translation string, or the raw key if not found
 *
 * @example
 * ```svelte
 * <script lang="ts">
 *   import { useIntlayer } from "svelte-intlayer";
 *   import { t } from "$lib/i18n";
 *   const cvDict = useIntlayer("Cv");
 *   // Simple lookup
 *   const name = t($cvDict, "about.name"); // "Fabian Aps"
 *   // With parameter substitution
 *   const greeting = t($cvDict, "hero.greeting", { name: "World" }); // "Hello, World!"
 * </script>
 * ```
 */
export function t(storeValue: any, key: string, params?: Record<string, any>): string {
  if (!storeValue || !key) return key;

  // Remove root dictionary prefixes if present (e.g., "Cv.", "Projects_", "Aboutme_")
  const prefixes = ['Cv', 'Projects', 'Aboutme', 'Recommendation', 'Sites', 'Logo', 'Imprint', 'Footer', 'Sidebar', 'Linkhub', 'CookieConsent', 'Contact', 'Common'];
  let cleanKey = key;
  for (const prefix of prefixes) {
    if (cleanKey.startsWith(`${prefix}.`)) cleanKey = cleanKey.replace(`${prefix}.`, '');
    if (cleanKey.startsWith(`${prefix}_`)) cleanKey = cleanKey.replace(`${prefix}_`, '');
  }

  const parts = cleanKey.split(/[._]/);
  let current = storeValue;

  for (const part of parts) {
    if (current !== null && typeof current === 'object') {
      // Intlayer maps internal properties as getters. Let's explicitly trigger them.
      if ('value' in current && typeof current.value === 'object' && current.value !== null) {
        current = current.value;
      }
      current = current[part];
    } else {
      return key; // Fallback to raw key if not an object
    }
  }

  // Final check to verify it actually resolved to something
  if (current === undefined) return key;

  let resolvedVal = current;

  // 1) First attempt to extract the raw primitive string from Intlayer wrapper
  if (resolvedVal !== null && (typeof resolvedVal === 'object' || typeof resolvedVal === 'function')) {
    if ('value' in resolvedVal) {
      if (resolvedVal.value !== undefined) {
        resolvedVal = resolvedVal.value;
      } else {
        // It has a .value property, meaning it's an Intlayer Node, but the value is undefined.
        // We cannot use it. Do not attempt to call it.
        return key;
      }
    }
  }

  // 2) If it's STILL a function (i.e. not an Intlayer node, maybe a custom formatter injected in custom dictionaries), try calling it.
  if (typeof resolvedVal === 'function') {
    try {
      resolvedVal = resolvedVal(params);
    } catch {
      return key;
    }
  }

  if (typeof resolvedVal === 'string') {
    let str = resolvedVal;
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        str = str.replace(`{${k}}`, String(v));
      }
    }
    return str;
  }

  if (Array.isArray(resolvedVal)) {
    return resolvedVal.map(v => {
      let inner = v;
      if (inner !== null && typeof inner === 'object' && 'value' in inner) {
        inner = inner.value;
      }
      return String(inner);
    }).join(', ');
  }

  // Final fallback
  try {
    return String(resolvedVal?.value ?? resolvedVal);
  } catch (e) {
    return String(resolvedVal);
  }
}

/**
 * Resolves a translation key to an array of strings.
 *
 * Uses {@link t} internally and then splits the result:
 * - If the key is not found, returns an empty array `[]`
 * - If the resolved value is a comma-separated string, splits and trims each segment
 * - If already an array, returns it directly
 * - Otherwise wraps the single string in an array
 *
 * This is useful for dictionary entries that store lists (e.g. skill badges, bullet points).
 *
 * @param storeValue - The reactive Intlayer dictionary store value
 * @param key - Dot or underscore separated path to the translation
 * @param params - Optional key-value pairs for template substitution
 * @returns Array of resolved translation strings (empty array if key not found)
 *
 * @example
 * ```ts
 * const badges = tArr($projectsDict, "portfolio.badges");
 * // ["SvelteKit", "TypeScript", "Tailwind CSS"]
 * ```
 */
export function tArr(storeValue: any, key: string, params?: Record<string, any>): string[] {
  const result = t(storeValue, key, params);
  if (result === key) return []; // Meaning not found
  if (typeof result === 'string') {
    // If it's a single string with commas from JSON
    if (result.includes(',')) return result.split(',').map(s => s.trim()).filter(Boolean);
    return [result];
  }
  if (Array.isArray(result)) return result;
  return [];
}
