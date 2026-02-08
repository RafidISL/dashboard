// /app/materie/nuova/page.tsx

import MateriaForm from "@/app/components/materiaform";
import { creaMateria} from "@/app/materie/action";

export default function NuovaMateriaPage() {
    return (
        <div style={{ maxWidth: "500px", margin: "0 auto", padding: "2rem" }}>
            <h1>Nuova Materia</h1>
            <MateriaForm action={creaMateria} />
        </div>
    );
}
