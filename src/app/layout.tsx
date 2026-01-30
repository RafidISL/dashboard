import Link from "next/link";

export default function Layout({
                                   children,
                               }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="it">
        <body>
        <header>
            <nav>
                <Link href="/">Home</Link> |{" "}
                <Link href="/materie/new">AGGIUNGI MATERIA ➕</Link> |{" "}
                <Link href="/profilo">PROFILO</Link>
            </nav>
        </header>

        {children}

        <footer>
        </footer>
        </body>
        </html>
    );
}
