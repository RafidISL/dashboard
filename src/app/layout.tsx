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
                <Link href="/">HOME</Link>
                <Link href="/materie/nuova">AGGIUNGI MATERIA</Link>
                <Link href="./profile" >PROFILO</Link>
            </nav>
        </header>

        {children}

        <footer>
        </footer>
        </body>
        </html>
    );
}
