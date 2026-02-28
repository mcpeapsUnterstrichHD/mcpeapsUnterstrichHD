/**
 * @module cv-data
 * @description Centralized CV (Curriculum Vitae) data structures and content.
 * Contains all education history, work experience, skills, and skill categories
 * displayed on the interactive CV page and the ATS-friendly CV variant.
 *
 * All user-facing text uses Intlayer dictionary keys (e.g. `"Cv.education.items.tuberlin.name"`)
 * that are resolved at render time via `t()` from {@link module:i18n}.
 *
 * Date strings use German format: `"DD.MM.YYYY"` or `"MM.YYYY"` for month-only precision.
 * Items are sorted chronologically (most recent first) using {@link sortByEndDate}.
 *
 * @see {@link module:i18n} — for resolving translation keys
 * @see `src/routes/[[locale=locale]]/cv/+page.svelte` — Interactive CV page
 * @see `src/routes/[[locale=locale]]/cv/ats/+page.svelte` — ATS-friendly CV page
 */

/**
 * Represents a single education entry (school, university, or training period).
 *
 * @property key - Unique identifier for this education item (e.g. `"tuberlin"`, `"oszimt"`)
 * @property nameKey - Intlayer dictionary key for the institution name
 * @property imgAltKey - Intlayer dictionary key for the institution logo alt text
 * @property descriptionKey - Intlayer dictionary key for the education description
 * @property image - Path to the institution logo (relative to `/static/`)
 * @property imageFallback - Short text fallback if the image fails to load
 * @property startdate - Start date in German format (`"MM.YYYY"` or `"DD.MM.YYYY"`)
 * @property enddate - End date in German format (`"MM.YYYY"` or `"DD.MM.YYYY"`)
 * @property badgeKeys - Array of Intlayer dictionary keys for badges (e.g. location, degree type)
 */
export interface EducationItem {
  key: string;
  nameKey: string;
  imgAltKey: string;
  descriptionKey: string;
  image: string;
  imageFallback: string;
  startdate: string;
  enddate: string;
  badgeKeys: string[];
}

/**
 * Represents a single work experience entry (internship, job, etc.).
 *
 * @property key - Unique identifier for this experience item (e.g. `"kfw"`, `"adk"`)
 * @property nameKey - Intlayer dictionary key for the company/organization name
 * @property imgAltKey - Intlayer dictionary key for the company logo alt text
 * @property descriptionKey - Intlayer dictionary key for the experience description
 * @property badgesKey - Intlayer dictionary key for the badges (single key, resolved as array)
 * @property image - Path to the company logo (relative to `/static/`)
 * @property imageFallback - Short text fallback if the image fails to load
 * @property startdate - Start date in German format (`"DD.MM.YYYY"` or `"MM.YYYY"`)
 * @property enddate - End date in German format (`"DD.MM.YYYY"` or `"MM.YYYY"`)
 */
export interface ExperienceItem {
  key: string;
  nameKey: string;
  imgAltKey: string;
  descriptionKey: string;
  badgesKey: string;
  image: string;
  imageFallback: string;
  startdate: string;
  enddate: string;
}

/**
 * Union type of all valid skill category identifiers.
 * Each category groups related skills together on the CV page.
 */
export type SkillCategoryKey =
  | "programming"
  | "databases"
  | "automation"
  | "operatingSystems"
  | "networking"
  | "devEnvironments"
  | "office"
  | "languages";

/**
 * Represents a single skill with proficiency level and metadata.
 *
 * @property title - Display name of the skill (e.g. `"Java"`, `"Swift (SwiftUI)"`)
 * @property category - Which {@link SkillCategoryKey} this skill belongs to
 * @property badgeKeys - Intlayer dictionary keys for localized badge labels
 * @property staticBadges - Optional non-localized badge labels (e.g. `"Apple"`, `"C++23"`)
 * @property image - Path to the skill/technology logo
 * @property imageAlt - Alt text for the logo image
 * @property imageFallback - Short text fallback if the image fails to load
 * @property level - Proficiency level from 0–100, rendered as a progress bar
 * @property darkImage - Optional alternative logo for dark mode
 * @property experience - Optional duration of experience (e.g. `{ type: "years", count: 3 }`)
 */
export interface SkillItem {
  title: string;
  category: SkillCategoryKey;
  badgeKeys: string[];
  staticBadges?: string[];
  image: string;
  imageAlt: string;
  imageFallback: string;
  level: number;
  darkImage?: string;
  experience?: { type: 'years' | 'months' | 'month' | 'year'; count: number };
}

/**
 * Represents a skill category heading used to group skills on the CV page.
 *
 * @property key - The {@link SkillCategoryKey} identifier for this category
 * @property titleKey - Intlayer dictionary key for the category's localized title
 */
export interface SkillCategory {
  key: SkillCategoryKey;
  titleKey: string;
}


/**
 * All education entries, ordered by data entry (use {@link sortByEndDate} for chronological display).
 * Includes university, vocational training, and school history.
 */
export const educationItems: EducationItem[] = [
  {
    key: "tuberlin",
    nameKey: "Cv.education.items.tuberlin.name",
    imgAltKey: "Cv.education.items.tuberlin.imgAlt",
    descriptionKey: "Cv.education.items.tuberlin.description",
    image: "/pictures/lebenslauf/schools/LogoDerTUBerlin2020.svg",
    imageFallback: "TUBerlin",
    startdate: "10.2025",
    enddate: "09.2028",
    badgeKeys: [
      "Cv.about.address.berlin",
      "Cv.education.badges.studies",
      "Cv.education.badges.batchlor_of_science",
      "Cv.education.badges.it",
    ],
  },
  {
    key: "looking",
    nameKey: "Cv.education.items.lookingForApprenticeship.name",
    imgAltKey: "Cv.education.items.lookingForApprenticeship.imgAlt",
    descriptionKey: "Cv.education.items.lookingForApprenticeship.description",
    image: "",
    imageFallback: "/",
    startdate: "08.2024",
    enddate: "09.2025",
    badgeKeys: [],
  },
  {
    key: "oszimt",
    nameKey: "Cv.education.items.oszimt.name",
    imgAltKey: "Cv.education.items.oszimt.imgAlt",
    descriptionKey: "Cv.education.items.oszimt.description",
    image: "/pictures/lebenslauf/schools/oszimt_logo.png",
    imageFallback: "OSZimt",
    startdate: "08.2021",
    enddate: "07.2024",
    badgeKeys: [
      "Cv.about.address.berlin",
      "Cv.education.badges.ausbildung",
      "Cv.education.badges.fachabitur",
      "Cv.education.badges.it",
    ],
  },
  {
    key: "cvl",
    nameKey: "Cv.education.items.cvl.name",
    imgAltKey: "Cv.education.items.cvl.imgAlt",
    descriptionKey: "Cv.education.items.cvl.description",
    image: "/pictures/lebenslauf/schools/cvl_logo.png",
    imageFallback: "CvL",
    startdate: "08.2010",
    enddate: "07.2021",
    badgeKeys: ["Cv.about.address.berlin", "Cv.education.badges.msaMitOG"],
  },
];

/**
 * All work experience entries, ordered by data entry.
 * Includes internships and professional experiences.
 */
export const experienceItems: ExperienceItem[] = [
  {
    key: "kfw",
    nameKey: "Cv.experience.items.kfw.name",
    imgAltKey: "Cv.experience.items.kfw.imgAlt",
    descriptionKey: "Cv.experience.items.kfw.description",
    badgesKey: "Cv.experience.items.kfw.badges",
    image: "/pictures/lebenslauf/firms/kfw_logo.svg",
    imageFallback: "KfW",
    startdate: "27.11.2023",
    enddate: "02.02.2024",
  },
  {
    key: "adk",
    nameKey: "Cv.experience.items.adk.name",
    imgAltKey: "Cv.experience.items.adk.imgAlt",
    descriptionKey: "Cv.experience.items.adk.description",
    badgesKey: "Cv.experience.items.adk.badges",
    image: "/pictures/lebenslauf/firms/adkberlin_logo.jpg",
    imageFallback: "ADK",
    startdate: "02.2020",
    enddate: "02.2020",
  },
  {
    key: "tosa",
    nameKey: "Cv.experience.items.tosa.name",
    imgAltKey: "Cv.experience.items.tosa.imgAlt",
    descriptionKey: "Cv.experience.items.tosa.description",
    badgesKey: "Cv.experience.items.tosa.badges",
    image: "/pictures/lebenslauf/firms/ToSa_logo.jpg",
    imageFallback: "TSS",
    startdate: "01.2019",
    enddate: "01.2019",
  },
  {
    key: "pfennig",
    nameKey: "Cv.experience.items.pfennig.name",
    imgAltKey: "Cv.experience.items.pfennig.imgAlt",
    descriptionKey: "Cv.experience.items.pfennig.description",
    badgesKey: "Cv.experience.items.pfennig.badges",
    image: "/pictures/lebenslauf/firms/Pfennigpfeiffer_logo.jpg",
    imageFallback: "P",
    startdate: "06.2018",
    enddate: "06.2018",
  },
];

/**
 * All skill entries across all categories.
 * Each skill includes proficiency level (0–100), technology logos, and localized badges.
 * Skills span programming languages, databases, automation tools, operating systems,
 * networking, development environments, office tools, and spoken languages.
 */
export const skillItems: SkillItem[] = [
  { title: "Java", category: "programming", badgeKeys: ["Cv.skills.badges.development"], staticBadges: [], image: "/pictures/lebenslauf/skills/java.svg", imageAlt: "Java Logo", imageFallback: "JDK", level: 80, experience: { type: "years", count: 3 } },
  { title: "Swift (SwiftUI)", category: "programming", badgeKeys: ["Cv.skills.badges.development", "Cv.skills.badges.frontend"], staticBadges: ["Apple"], image: "/pictures/lebenslauf/skills/swift.svg", imageAlt: "Swift Logo", imageFallback: "SUI", level: 60, experience: { type: "years", count: 2 } },
  { title: "Cisco IOS", category: "networking", badgeKeys: ["Cv.skills.badges.configuration"], staticBadges: [], image: "/pictures/lebenslauf/skills/cisco.svg", imageAlt: "Cisco Logo", imageFallback: "IOS", level: 50, experience: { type: "year", count: 1 } },
  { title: "Microsoft 365", category: "office", badgeKeys: ["Cv.skills.badges.office"], staticBadges: ["365", "Microsoft"], image: "/pictures/lebenslauf/skills/ms365.svg", imageAlt: "Microsoft 365 Logo", imageFallback: "MS365", level: 70, experience: { type: "years", count: 5 } },
  { title: "Visual Studio Code", category: "devEnvironments", badgeKeys: ["Cv.skills.badges.development"], staticBadges: ["Microsoft"], image: "/pictures/lebenslauf/skills/vscode.svg", imageAlt: "Visual Studio Code Logo", imageFallback: "VScode", level: 60, experience: { type: "years", count: 4 } },
  { title: "Apple Xcode 14+", category: "devEnvironments", badgeKeys: ["Cv.skills.badges.development"], staticBadges: ["Apple"], image: "/pictures/lebenslauf/skills/xcode.svg", imageAlt: "Apple Xcode Logo", imageFallback: "XCODE", level: 70, experience: { type: "years", count: 2 } },
  { title: "Apple macOS", category: "operatingSystems", badgeKeys: ["Cv.skills.badges.operatingSystem"], staticBadges: ["Apple"], image: "/pictures/lebenslauf/skills/macos.svg", darkImage: "/pictures/lebenslauf/skills/macos-dark.svg", imageAlt: "macOS Logo", imageFallback: "macOS", level: 90, experience: { type: "years", count: 2 } },
  { title: "Apple iOS", category: "operatingSystems", badgeKeys: ["Cv.skills.badges.operatingSystem"], staticBadges: ["Apple"], image: "/pictures/lebenslauf/skills/ios.svg", darkImage: "/pictures/lebenslauf/skills/ios-dark.svg", imageAlt: "iOS Logo", imageFallback: "iOS", level: 80, experience: { type: "years", count: 3 } },
  { title: "Apple iPadOS", category: "operatingSystems", badgeKeys: ["Cv.skills.badges.operatingSystem"], staticBadges: ["Apple"], image: "/pictures/lebenslauf/skills/ios.svg", darkImage: "/pictures/lebenslauf/skills/ios-dark.svg", imageAlt: "iOS Logo", imageFallback: "iOS", level: 80, experience: { type: "years", count: 3 } },
  { title: "Apple visionOS", category: "operatingSystems", badgeKeys: ["Cv.skills.badges.operatingSystem"], staticBadges: ["Apple"], image: "/pictures/lebenslauf/skills/ios.svg", darkImage: "/pictures/lebenslauf/skills/ios-dark.svg", imageAlt: "iOS Logo", imageFallback: "iOS", level: 80, experience: { type: "year", count: 1 } },
  { title: "Linux", category: "operatingSystems", badgeKeys: ["Cv.skills.badges.operatingSystem"], staticBadges: [], image: "/pictures/lebenslauf/skills/linux.svg", imageAlt: "Linux Logo", imageFallback: "L", level: 60, experience: { type: "years", count: 5 } },
  { title: "Windows", category: "operatingSystems", badgeKeys: ["Cv.skills.badges.operatingSystem"], staticBadges: ["Microsoft"], image: "/pictures/lebenslauf/skills/windows.svg", imageAlt: "Windows Logo", imageFallback: "WIN", level: 60, experience: { type: "years", count: 3 } },
  { title: "Microsoft Teams", category: "office", badgeKeys: ["Cv.skills.badges.office"], staticBadges: ["Microsoft"], image: "/pictures/lebenslauf/skills/teams.svg", imageAlt: "Microsoft Teams Logo", imageFallback: "Teams", level: 60, experience: { type: "years", count: 4 } },
  { title: "Eclipse", category: "devEnvironments", badgeKeys: ["Cv.skills.badges.development"], staticBadges: [], image: "/pictures/lebenslauf/skills/eclipse.svg", imageAlt: "Eclipse Logo", imageFallback: "JDK", level: 60, experience: { type: "years", count: 2 } },
  { title: "MySQL", category: "databases", badgeKeys: ["Cv.skills.badges.development"], staticBadges: [], image: "/pictures/lebenslauf/skills/mysql.svg", imageAlt: "MySQL Logo", imageFallback: "SQL", level: 80, experience: { type: "year", count: 1 } },
  { title: "MySQL Community Server", category: "databases", badgeKeys: ["Cv.skills.badges.development"], staticBadges: [], image: "/pictures/lebenslauf/skills/mysql.svg", imageAlt: "MySQL Logo", imageFallback: "SQL", level: 60, experience: { type: "year", count: 1 } },
  { title: "MySQL Workbench", category: "databases", badgeKeys: ["Cv.skills.badges.development"], staticBadges: [], image: "/pictures/lebenslauf/skills/mysql.svg", imageAlt: "MySQL Logo", imageFallback: "SQL", level: 60, experience: { type: "year", count: 1 } },
  { title: "Ansible", category: "automation", badgeKeys: ["Cv.skills.badges.automation"], staticBadges: [], image: "/pictures/lebenslauf/skills/ansible.svg", darkImage: "/pictures/lebenslauf/skills/ansible-dark.svg", imageAlt: "Ansible Logo", imageFallback: "A", level: 60, experience: { type: "months", count: 2 } },
  { title: "Rust", category: "programming", badgeKeys: ["Cv.skills.badges.development"], staticBadges: [], image: "/pictures/lebenslauf/skills/rust.svg", darkImage: "/pictures/lebenslauf/skills/rust-dark.svg", imageAlt: "Rust Logo", imageFallback: "R", level: 30, experience: { type: "months", count: 2 } },
  { title: "C", category: "programming", badgeKeys: ["Cv.skills.badges.development"], staticBadges: ["C98", "C11"], image: "/pictures/lebenslauf/skills/c.svg", imageAlt: "C Logo", imageFallback: "C", level: 30, experience: { type: "year", count: 1 } },
  { title: "C++", category: "programming", badgeKeys: ["Cv.skills.badges.development"], staticBadges: ["C++23"], image: "/pictures/lebenslauf/skills/cpp.svg", imageAlt: "C++ Logo", imageFallback: "C++", level: 30, experience: { type: "month", count: 1 } },
  { title: "Emacs", category: "devEnvironments", badgeKeys: ["Cv.skills.badges.development", "Cv.skills.badges.textEditor", "Cv.skills.badges.multifunctional"], staticBadges: ["GNU"], image: "/pictures/lebenslauf/skills/emacs.svg", imageAlt: "GNU Emacs Logo", imageFallback: "Emacs", level: 30, experience: { type: "month", count: 1 } },
  // Languages - I'm reusing emacs SVG as a placeholder or we can use empty image?
  // Let's use empty string for now or maybe a generic icon.
  // Actually, I can just use "DE" initials and "EN" initials as falback and leave image empty.
  { title: "Deutsch", category: "languages", badgeKeys: ["Cv.skills.badges.language", "Cv.skills.badges.native"], staticBadges: ["C2"], image: "", imageAlt: "German Flag", imageFallback: "DE", level: 100 },
  { title: "English", category: "languages", badgeKeys: ["Cv.skills.badges.language"], staticBadges: ["B1"], image: "", imageAlt: "English Flag", imageFallback: "EN", level: 60 },
];


/**
 * Ordered list of skill categories for section headings on the CV page.
 * Determines the display order of skill groups; each category's title
 * is resolved via Intlayer at render time.
 */
export const skillCategories: SkillCategory[] = [
  {
    key: "languages",
    titleKey: "Cv.skills.categories.languages.title",
  },
  {
    key: "programming",
    titleKey: "Cv.skills.categories.programming.title",
  },
  {
    key: "databases",
    titleKey: "Cv.skills.categories.databases.title",
  },
  {
    key: "automation",
    titleKey: "Cv.skills.categories.automation.title",
  },
  {
    key: "operatingSystems",
    titleKey: "Cv.skills.categories.operatingSystems.title",
  },
  {
    key: "networking",
    titleKey: "Cv.skills.categories.networking.title",
  },
  {
    key: "devEnvironments",
    titleKey: "Cv.skills.categories.devEnvironments.title",
  },
  {
    key: "office",
    titleKey: "Cv.skills.categories.office.title",
  },
];



/**
 * Parses a German-format date string into a JavaScript `Date` object.
 *
 * Supports two formats:
 * - `"DD.MM.YYYY"` — full date with day precision
 * - `"MM.YYYY"` — month-only precision (day defaults to 1st)
 *
 * Returns `new Date(0)` (epoch) for undefined or unparseable input.
 *
 * @param s - Date string in German format, or undefined
 * @returns Parsed `Date` object
 *
 * @example
 * ```ts
 * parseDate("27.11.2023"); // Date: November 27, 2023
 * parseDate("10.2025");    // Date: October 1, 2025
 * parseDate(undefined);    // Date: January 1, 1970 (epoch)
 * ```
 */
export function parseDate(s?: string): Date {
  if (!s) return new Date(0);
  const parts = s.split(".").map((p) => Number.parseInt(p, 10));
  if (parts.length === 3) {
    const [day, month, year] = parts;
    return new Date(year, month - 1, day);
  }
  if (parts.length === 2) {
    const [month, year] = parts;
    return new Date(year, month - 1, 1);
  }
  return new Date(0);
}

/**
 * Sorts items by their end date in descending order (most recent first).
 * Falls back to start date if end date is not available.
 * Returns a new array without mutating the original.
 *
 * @template T - Any type with optional `enddate` and `startdate` string properties
 * @param items - Array of items to sort
 * @returns New array sorted by end date descending
 *
 * @example
 * ```ts
 * const sorted = sortByEndDate(educationItems);
 * // sorted[0] is the most recent education entry
 * ```
 */
export function sortByEndDate<T extends { enddate?: string; startdate?: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const da = parseDate(a.enddate ?? a.startdate);
    const db = parseDate(b.enddate ?? b.startdate);
    return db.getTime() - da.getTime();
  });
}
