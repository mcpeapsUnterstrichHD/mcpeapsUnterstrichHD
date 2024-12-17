/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#D8DEE9';
const tintColorDark = '#D8DEE9';

const Nord_Colors = {
  black: '#30343F',
  red: '#CF2A31',
  green: '#7BBAA8',
  yellow: '#EFBF6A',
  blue: '#63A2CA',
  magenta: '#C1AC9E',
  cyan: '#F0C9D0',
  white: '#EBEFF1',

  bright_black: '#4D4E59',
  bright_red: '#CF2A31',
  bright_green: '#7BBAA8',
  bright_yellow: '#EFBF6A',
  bright_blue: '#63A2CA',
  bright_magenta: '#BD8A9B',
  bright_cyan: '#F0C9D0',
  bright_white: '#EBEFF1',

  get light_black() { return this.bright_black; },
  get light_red() { return this.bright_red; },
  get light_green() { return this.bright_green; },
  get light_yellow() { return this.bright_yellow; },
  get light_blue() { return this.bright_blue; },
  get light_magenta() { return this.bright_magenta; },
  get light_cyan() { return this.bright_cyan; },
  get light_white() { return this.bright_white; },

  get gray() { return this.bright_black; },
  get bright_gray() { return this.bright_white; },
  get light_gray() { return this.bright_white; },

  foreground: '#D8DEE9',
  background: '#2E3440',
  selected_foreground: '#000000',
  selected_background: '#FFFACD',
  url: '#0087BD',
  cursor: '#81A1C1',

  get link() { return this.url; },
}

export const Colors = {
  styles: {
    text: Nord_Colors.foreground,
    background: Nord_Colors.background,
    tint: Nord_Colors.green,
    icon: Nord_Colors.red,
    tabIconDefault: Nord_Colors.foreground,
    tabIconSelected: Nord_Colors.selected_foreground,
    tabBar: Nord_Colors.background,
    tabBarActive: Nord_Colors.selected_background,
    searchBar: Nord_Colors.foreground,
    searchBarBackground: Nord_Colors.background,
    searchBarPlaceholder: Nord_Colors.foreground,
    searchBarClearButton: Nord_Colors.foreground,
    searchBarCancelButton: Nord_Colors.foreground,
    searchBarSearchIcon: Nord_Colors.foreground,
    searchBarCloseIcon: Nord_Colors.foreground,
    searchBarInput: Nord_Colors.foreground,
    link: Nord_Colors.link,

  },
    primary: Nord_Colors.green,
    secondary: Nord_Colors.red,
    black: Nord_Colors.black,
    red: Nord_Colors.red,
    blue: Nord_Colors.blue,
    yellow: Nord_Colors.yellow,
    cyan: Nord_Colors.cyan,
    magenta: Nord_Colors.magenta,
    white: Nord_Colors.white,
    gray: Nord_Colors.gray,
    light_black: Nord_Colors.light_black,
    light_red: Nord_Colors.light_red,
    light_green: Nord_Colors.light_green,
    light_yellow: Nord_Colors.light_yellow,
    light_blue: Nord_Colors.light_blue,
    light_magenta: Nord_Colors.light_magenta,
    light_cyan: Nord_Colors.light_cyan,
    light_white: Nord_Colors.light_white,
    light_gray: Nord_Colors.light_gray,

    error: Nord_Colors.red,
    warning: Nord_Colors.yellow,
    info: Nord_Colors.blue,
    success: Nord_Colors.green,
    attention: Nord_Colors.magenta,
    question: Nord_Colors.cyan,
    link: Nord_Colors.link,

};
