export const hostURL = "https://ytlive.vercel.app";
export const appTitleSmall = "YT Live";
export const appTitle = "YT Live | Live Youtube Channels from around the world";
export const description =
  "News, Music and other live tv stations and channels from youtube";

export const headConfig = {
  title: appTitle,
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { hid: "description", name: "description", content: description }
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  script: [
    {
      "data-name": "BMC-Widget",
      "data-cfasync": "false",
      src: "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js",
      "data-id": "fayazahmed",
      "data-description": "Support me on Buy me a coffee!",
      "data-message": "Support my work by buying some coffee",
      "data-color": "#FFDD00",
      "data-position": "Right",
      "data-x_margin": "18",
      "data-y_margin": "18"
    }
  ]
};

export const pwaConfig = {
  meta: {
    name: appTitleSmall,
    description,
    ogHost: hostURL,
    ogImage: "/social.png",
    twitterCard: "summary_large_image",
    twitterSite: "@fayazara",
    twitterCreator: "@fayazara"
  },
  manifest: {
    lang: "en",
    name: appTitle,
    short_name: appTitleSmall
  }
};

export const firebaseConfig = {
  config: {
    apiKey: "AIzaSyASRUiFjuuSZNjvC70KoH4LIWAQJAdj63c",
    authDomain: "ytlive-e5ba6.firebaseapp.com",
    projectId: "ytlive-e5ba6",
    storageBucket: "ytlive-e5ba6.appspot.com",
    messagingSenderId: "372999643440",
    appId: ":372999643440:web:4939ef5830d55e111768f5"
  },
  services: {
    auth: {
      initialize: {
        onAuthStateChangedAction: "onAuthStateChanged"
      }
    },
    firestore: {
      enablePersistence: true
    }
  }
};
