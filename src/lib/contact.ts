import { z } from "zod";

/**
 * @module contact
 * @description Contact information constants used across the CV, contact page, footer,
 * and imprint. Provides structured contact data with display strings and actionable
 * links (tel:, mailto:, Apple Maps).
 *
 * Note: The `city` and `country` fields in the address use Intlayer dictionary keys
 * (e.g. `"Cv.about.address.berlin"`) so they can be resolved to localized strings
 * at render time via the {@link module:i18n|t()} function.
 *
 * @see {@link module:i18n} — for resolving localized address fields
 */

/**
 * Enumeration of supported contact methods.
 */
export const ContactType = z.enum(["telephone", "email", "address"]);
export type ContactType = z.infer<typeof ContactType>;

/**
 * Contact detail with a human-readable display string and an actionable link.
 *
 * @property display - Human-readable contact value (e.g. phone number, email address)
 * @property link - Actionable URI for the contact method (e.g. `tel:`, `mailto:`)
 */
export const ContactDetailsSchema = z.object({
  display: z.string(),
  link: z.url(),
});
export type ContactDetails = z.infer<typeof ContactDetailsSchema>;

/**
 * Structured postal address with individual fields and a maps link.
 *
 * @property street - Street name and house number
 * @property zip - Postal / ZIP code
 * @property city - City name (may be an Intlayer dictionary key for localization)
 * @property country - Country name (may be an Intlayer dictionary key for localization)
 * @property link - Deep link to the address on Apple Maps
 */
export const AddressDetailsSchema = z.object({
  street: z.string(),
  zip: z.string(),
  city: z.string(),
  country: z.string(),
  link: z.url(),
});
export type AddressDetails = z.infer<typeof AddressDetailsSchema>;

/**
 * All contact details for the site owner, keyed by {@link ContactType}.
 *
 * @example
 * ```ts
 * import { contactDetails } from "$lib/contact";
 *
 * // Use in an anchor tag
 * const emailHref = contactDetails.email.link; // "mailto:aps.fabian@..."
 *
 * // Resolve localized city via Intlayer
 * const city = t(cvDict, contactDetails.address.city); // "Berlin" or "Berlin"
 * ```
 */
export const contactDetails: {
  telephone: ContactDetails;
  email: ContactDetails;
  address: AddressDetails;
} = {
  telephone: {
    display: "+4917645172171",
    link: "tel:+4917645172171",
  },
  email: {
    display: "aps.fabian@mcpeapsunterstrichhd.dev",
    link: "mailto:aps.fabian@mcpeapsunterstrichhd.dev",
  },
  address: {
    street: "Ludwig-Renn-Straße 33",
    zip: "12679",
    city: "Cv.about.address.berlin",
    country: "Cv.about.address.germany",
    link: "https://maps.apple.com/?address=Ludwig-Renn-Stra%C3%9Fe%2033,%2012679%20Berlin,%20Deutschland",
  },
};
