export const metadata = {
  title: "Liste de tâches | Next.js App",
  description: "Application Next.js affichant des tâches",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <header>
          <nav>
            <a href="/">Accueil</a>
            <br></br>
            <a href="/tasks">Toutes les tâches</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
