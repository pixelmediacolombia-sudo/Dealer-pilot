import type { Metadata } from "next";
import { headers } from "next/headers";
import { Courier_Prime, Libre_Franklin, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

/**
 * Las tres familias se exponen como variables CSS y globals.css las consume.
 * (Antes se cargaba Geist y el CSS pedía Arial: la página se veía en Arial.)
 */
const display = Schibsted_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["800", "900"],
  display: "swap",
});

const text = Libre_Franklin({
  variable: "--font-text",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  display: "swap",
});

const data = Courier_Prime({
  variable: "--font-data",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const description =
    "El inventario de su lote se publica solo en Facebook Marketplace, contesta con sus datos y sale del aire cuando el carro se vende.";

  return {
    metadataBase: new URL(origin),
    title: "DealerPilot | Se publica solo",
    description,
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "DealerPilot | Se publica solo en Facebook Marketplace",
      description,
      type: "website",
      images: [
        {
          url: new URL("/og.png", origin).toString(),
          width: 1536,
          height: 1024,
          alt: "DealerPilot para dealers",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "DealerPilot | Se publica solo en Facebook Marketplace",
      description,
      images: [new URL("/og.png", origin).toString()],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // El <html> queda en español porque la raíz del sitio es la versión en
  // español; /en marca lang="en" en su propio contenedor (GuiaDelDealer),
  // que es lo que leen los lectores de pantalla.
  return (
    <html lang="es">
      <body className={`${display.variable} ${text.variable} ${data.variable}`}>{children}</body>
    </html>
  );
}
