// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetWebFonts,
} from "unocss";

type WebFontsProviders = "google" | "bunny" | "fontshare" | "none";
interface WebFontMeta {
  name: string;
  weights?: (string | number)[];
  italic?: boolean;
  /**
   * Override the provider
   * @default <matches root config>
   */
  provider?: WebFontsProviders;
}

//in here we may define brand themes to scale large applications
export default defineConfig({
  presets: [
    presetAttributify(), // required when using attributify mode
    presetUno(), // required
    presetTypography(),
    presetWebFonts({
      fonts: {
        //Chose between top tier fonts. roboto, spacegrotesk, worksans, dmsons, opensans, satoshi, rupreme, inter, switzer, alpino, boska
        roboto: "Roboto",
        spacegrotesk: "Space Grotesk",
        worksans: "Work Sans",
        dmsans: "DM Sans",
        opensans: "Open Sans",
        satoshi: [
          {
            name: "Satoshi",
            weights: ["200", "500"],
            provider: "fontshare",
          },
        ],
        supreme: [
          {
            name: "Supreme",
            weights: ["200", "500"],
            provider: "fontshare",
          },
        ],

        inter: "Inter",
        switzer: [
          {
            name: "Switzer",
            weights: ["200", "500"],
            provider: "fontshare",
          },
        ],
        alpino: {
          name: "Alpino",
          weights: ["400", "700"],
          provider: "fontshare",
        },
        boska: [
          {
            name: "Boska",

            provider: "fontshare",
          },
        ],
        bespokestencil: [
          {
            name: "Bespoke Stencil",

            provider: "fontshare",
          },
        ],
        melodrama: [
          {
            name: "Melodrama",

            provider: "fontshare",
          },
        ],
        montserrat: [
          {
            name: "Montserrat",

            provider: "fontshare",
          },
        ],
        stardom: [
          {
            name: "Stardom",

            provider: "fontshare",
          },
        ],
      },
    }),
  ],
  theme: {
    colors: {
      brand: {
        "100": "#ffffff",
      },
      brandsec: {
        "100": "#000000",
      },
    },
  },
  shortcuts: {
    //buttons
    btnbrand:
      "cursor-pointer border py-2 px-6  rounded-full hover:border-blue transition delay-50 duration-700 focus:scale-95 focus:border-black  focus:shadow-none",
    btnsec:
      "cursor-pointer border py-2 px-6 rounded-full hover:border-blue transition delay-50 duration-700 focus:scale-95 focus:border-black  focus:shadow-none",
  },
});
