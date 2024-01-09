import { useContador } from "@/data/hooks/useContador"

export default function Basico() {
    const {numero} = useContador();

    return (
        <div className={`text-7xl`}>
            <h1>Componente Básico {numero}</h1>
        </div>
    )
}