"use client";
import { useFormStatus } from "react-dom";
import styles from "./materiacard.module.css";

interface MateriaFormProps {
    action: (formData: FormData) => Promise<void>;
}

export default function MateriaForm({ action }: MateriaFormProps) {
    const { pending } = useFormStatus();

    return (
        <form action={action} className={styles.form}>
            <div className={styles.input}>
                <label htmlFor="nome">Materia</label>
                <input type="text" id="nome" name="nome" required placeholder="Materia..." />
            </div>

            <div className={styles.input}>
                <label htmlFor="ore">Ore</label>
                <input type="number" id="ore" name="ore" required placeholder="Ore..." />
            </div>

            <div className={styles.input}>
                <label htmlFor="insegnante">Insegnante</label>
                <input type="text" id="insegnante" name="insegnante" required placeholder="Insegnante..." />
            </div>

            <div className={styles.input}>
                <label htmlFor="libro">Libro</label>
                <input type="text" id="libro" name="libro" required placeholder="Libro..." />
            </div>

            <div className={styles.input}>
                <label htmlFor="argomenti">Argomenti</label>
                <input type="text" id="argomenti" name="argomenti" required placeholder="Argomenti..." />
            </div>

            <button type="submit" disabled={pending} className={styles.bottone}>
                {pending ? "Salvataggio..." : "Salva materia"}
            </button>
        </form>
    );
}
