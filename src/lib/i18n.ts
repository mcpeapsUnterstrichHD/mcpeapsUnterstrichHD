// Dynamically traverse Svelte-Intlayer dictionary objects using dot or underscore notation
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
