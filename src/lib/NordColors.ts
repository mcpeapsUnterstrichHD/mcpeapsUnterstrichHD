/**
 * @module NordColors
 * @description Nord color palette constants for consistent theming across the application.
 * The Nord palette is an arctic, north-bluish color scheme consisting of 16 colors
 * grouped into four categories: Polar Night (dark), Snow Storm (light), Frost (blue accents),
 * and Aurora (accent colors).
 *
 * These constants are used primarily in canvas-based components (e.g. {@link Particles})
 * and dynamic style calculations where CSS custom properties aren't practical.
 *
 * Note: The application's design follows Apple Human Interface Guidelines for layout
 * and interaction patterns, but uses the Nord color scheme instead of Apple's system colors.
 * The app targets a native SwiftUI appearance on each Apple platform (macOS on desktop,
 * iPadOS on tablet, iOS on mobile) with Apple Liquid Glass material translucency
 * (via the `my-glass` CSS class) while substituting the Nord color scheme for Apple
 * system colors throughout.
 *
 * **Mapping of Nord colors to Apple semantic color roles:**
 * - nord0--nord3 (Polar Night) -> Apple background/surface hierarchy
 *   (systemBackground, secondarySystemBackground, tertiarySystemBackground, quaternary fill)
 * - nord4--nord6 (Snow Storm) -> Apple foreground/text hierarchy
 *   (primary label, secondary label, tertiary label)
 * - nord7--nord10 (Frost) -> Apple primary/accent/tint roles
 *   (tintColor, accentColor, link color, active selection)
 * - nord11--nord15 (Aurora) -> Apple semantic colors
 *   (nord11=destructive/red, nord12=warning/orange, nord13=caution/yellow,
 *    nord14=success/green, nord15=special/purple)
 *
 * @see {@link https://www.nordtheme.com/docs/colors-and-palettes} Nord Theme Documentation
 */

/** Polar Night — darkest base color, used for backgrounds and deep surfaces */
const nord0 = "#2E3440";
/** Polar Night — slightly lighter, used for elevated surfaces and status bars */
const nord1 = "#3B4252";
/** Polar Night — used for selection backgrounds and subtle highlights */
const nord2 = "#434C5E";
/** Polar Night — brightest dark shade, used for comments and inactive UI elements */
const nord3 = "#4C566A";
/** Snow Storm — darkest light shade, used for body text in dark mode */
const nord4 = "#D8DEE9";
/** Snow Storm — mid light shade, used for secondary text and subtle borders */
const nord5 = "#E5E9F0";
/** Snow Storm — brightest, used for light mode backgrounds and high-contrast surfaces */
const nord6 = "#ECEFF4";
/** Frost — teal accent, used for UI highlights and interactive elements */
const nord7 = "#8FBCBB";
/** Frost — primary cyan, used for links, focus states, and primary actions */
const nord8 = "#88C0D0";
/** Frost — muted blue, used for secondary interactive elements */
const nord9 = "#81A1C1";
/** Frost — deep blue, used for emphasized content and active states */
const nord10 = "#5E81AC";
/** Aurora — red, used for errors, destructive actions, and critical alerts */
const nord11 = "#BF616A";
/** Aurora — orange, used for warnings and attention-drawing elements */
const nord12 = "#D08770";
/** Aurora — yellow, used for caution states and highlights */
const nord13 = "#EBCB8B";
/** Aurora — green, used for success states and positive indicators */
const nord14 = "#A3BE8C";
/** Aurora — purple, used for special/unique elements and decorative accents */
const nord15 = "#B48EAD";

export {
  nord0,
  nord1,
  nord2,
  nord3,
  nord4,
  nord5,
  nord6,
  nord7,
  nord8,
  nord9,
  nord10,
  nord11,
  nord12,
  nord13,
  nord14,
  nord15,
};
