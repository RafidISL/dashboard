import Link from "next/link";
import styles from "./components/materiacard.module.css";
import Image from "next/image";

export default function Layout({
                                   children,
                               }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="it">
        <body>
        <header>
            <nav className={styles.navbar}>
                <Link href="/">Home</Link> |{" "}
                <Link href="/materie/new">AGGIUNGI MATERIA ➕</Link> |{" "}
                <Link href="/profilo" className={styles.iconaprofilo}>PROFILO</Link>
            </nav>
        </header>

        {children}

        <footer>
        </footer>
        </body>
        </html>
    );
}
