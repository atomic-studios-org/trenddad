import { en } from "./lang/en.json";
import { nl } from "./lang/nl.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en,
    nl,
  },
}));
