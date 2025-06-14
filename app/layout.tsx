import Header from "../componentes/header";

import "./globals.css";

export const metadata = {
  title: "App Pregunta 5",
  description: "App del examen final",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
