import { Metadata } from "next";

const TITLE =
  "Meril.ink - Your personal page to show everything you are and create.";
const DESCRIPTION =
  "A Link in bio, but rich and beautiful, share your links globally with everyone, no need to have a portfolio website, you have Meril.ink";

const PREVIEW_IMAGE_URL = "https://www.meril.ink/opengraph-image.png";
const ALT_TITLE = "Your personal page to show everything you are and create.";
const BASE_URL = "https://www.meril.ink";

export const siteConfig: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: "/favicon.ico",
  },
  applicationName: "Meril.ink",
  creator: "Kartikey",
  twitter: {
    creator: "@KartikeyStack",
    title: TITLE,
    description: DESCRIPTION,
    card: "summary_large_image",
    images: [
      {
        url: PREVIEW_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: ALT_TITLE,
      },
    ],
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Meril.ink",
    url: BASE_URL,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: PREVIEW_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: ALT_TITLE,
      },
    ],
  },
  category: "Technology",
  alternates: {
    canonical: BASE_URL,
  },
  keywords: [
    "Linktree",
    "Meril.ink",
    "Bento",
    "Your personal page to show everything you are and create.",
    "Link in bio",
    "Merilink",
    "Link free",
    "free portfolio",
  ],
  metadataBase: new URL(BASE_URL),
};
