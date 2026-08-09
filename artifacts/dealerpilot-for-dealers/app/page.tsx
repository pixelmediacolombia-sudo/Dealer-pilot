import type { Metadata } from "next";
import GuiaDelDealer from "./GuiaDelDealer";

export const metadata: Metadata = {
  title: "DealerPilot | Se publica solo en Facebook Marketplace",
  description:
    "Usted carga el carro una vez. DealerPilot arma el anuncio, lo publica en su Facebook Marketplace, contesta los mensajes con los datos de su inventario y lo retira cuando el carro se vende. Para dealers independientes en Virginia y Maryland.",
  alternates: { canonical: "/", languages: { "es-US": "/", "en-US": "/en" } },
};

export default function Home() {
  return <GuiaDelDealer lang="es" />;
}
