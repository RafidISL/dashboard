import MostraMateria from "@/app/components/materiacard";
import {Materie} from "@/app/models/materie";

export default function HomePage() {
    return (
        <main
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
                padding: "20px",
            }}
        >


            <h1 style={{ width: "100%", textAlign: "center", marginBottom: "30px" }}>DASHBOARD MATERIE</h1>

                {Materie.map((m)=>(
                    <MostraMateria key={m.id} materia={m} />
                ))}


        </main>
    )
}