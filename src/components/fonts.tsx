import localFont from "next/font/local";

export const displayFont = localFont({
  src: "../../public/fonts/conthrax-display/Conthrax-SemiBold.otf",
  variable: "--font-display",
});


export const serifFont = localFont({
  src: "../../public/fonts/imperator-serif/Imperator.ttf",
  variable: "--font-serif",
});



export const sansFont = localFont({
  src: [
    {
      path: "../../public/fonts/lakes-sans/TT Lakes Neue Trial Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/lakes-sans/TT Lakes Neue Trial Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/lakes-sans/TT Lakes Neue Trial DemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/lakes-sans/TT Lakes Neue Trial Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/lakes-sans/TT Lakes Neue Trial Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-tt-lakes",
});
