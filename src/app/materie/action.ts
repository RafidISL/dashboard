"use server"
import{Materie} from "@/app/models/materie";
import { redirect } from "next/navigation";

export async  function  creaMateria(formData: FormData) {
    const argomenti=formData.get("argomenti") as string;
    const argomentiarray=argomenti
        .split(",")
        .map((elemento) => elemento.trim())
        .filter(elemento=>elemento!=="");

    const nuovaMateria = {
        id: Materie.length + 1,
        nome: formData.get("nome") as string,
        ore: Number(formData.get("ore")),
        insegnante: formData.get("insegnante") as string,
        immagine: "/images/DEFAULT.jpg",
        Libro:formData.get("libro") as string,
        Argomenti:argomentiarray,

    };
    Materie.push(nuovaMateria);
    redirect("/");
}