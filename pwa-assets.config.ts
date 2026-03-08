import {
  createAppleSplashScreens,
  defineConfig,
  minimal2023Preset,
} from "@vite-pwa/assets-generator/config";

export default defineConfig({
  headLinkOptions: {
    preset: "2023",
  },
  preset: {
    ...minimal2023Preset,
    appleSplashScreens: createAppleSplashScreens(
      {
        padding: 0.3,
        resizeOptions: { fit: "contain", background: "#2E3440" },
        darkResizeOptions: { fit: "contain", background: "#2E3440" },
        linkMediaOptions: {
          log: true,
          addMediaScreen: true,
          xhtml: true,
        },
      },
      ["iPad Air 9.7\""],
    ),
  },
  images: "static/pictures/logo.svg",
});
