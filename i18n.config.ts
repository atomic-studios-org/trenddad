import { en } from "./lang/en.json";
import { nl } from "./lang/nl.json";

export default defineI18nConfig(() => ({
  
  legacy: false,
  locale: "en",
  messages: {
    en: {
      "popularity": "popularity",
        "name": "name",
        "welcome": "Kippie Storefront Session Information",
        "currency": "Currency",
        "default_payment_method": "Default Payment Method",
        "Is klant ingelogd": "Is customer Logged In",
        "English": "English",
        "Nederlands": "Dutch",
        "Verander taal naar": "Switch Language to",
        "Wachtwoord Vergeten?": "Forgot your Password?",
        "Inloggen": "Login",
        "Registreren": "Register",
        "Inloggen met jouw account": "Login with your account",
        "E-mailadres": "Email Address",
        "Wachtwoord": "Password",
        "Invalid username and/or password.": "Invalid username and/or password.",
        "pages": {
          "title": {
            "index": "Welcome in our Ecommerce store"
          },
          "description": {
            "index": "Welcome in our webshop"
          }
        },
        "layouts": {
          "title": "Kippie - {title}"
        
      }
    },
    nl: {
      "popularity": "populariteit",
      "name": "naam",
      "welcome": "Kippie Webwinkel Sessie informatie",
      "currency": "Valuta",
      "default_payment_method": "Standaard betaalmethode",
      "Is klant ingelogd": "Is Klant Ingelogd",
      "English": "Engels",
      "Nederlands": "Nederlands",
      "Verander taal naar": "Verander taal naar",
      "Wachtwoord Vergeten?": "Wachtwoord Vergeten?",
      "Inloggen": "Inloggen",
      "Registreren": "Registreren",
      "Inloggen met jouw account": "Inloggen met jouw account",
      "E-mailadres": "E-mailadres",
      "Wachtwoord": "Wachtwoord",
      "Invalid username and/or password.": "Ongeldige gebruikersnaam en/of wachtwoord.",
      "pages": {
        "title": {
          "index": "Welkom bij onze webshop"
        },
        "description": {
          "index": "Welkom bij onze webshop"
        }
      },
      "layouts": {
        "title": "Kippie - {title}"
      }
    },
  },
}));
