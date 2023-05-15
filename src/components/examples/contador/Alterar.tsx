import { useContador } from "@/data/hooks/useContador"

export default function Alterar() {

    const {dec, inc} = useContador();

    return (
        <div className="flex gap-5">
            <button onClick={dec} className="botao text-2xl font-bold">-1</button>
            <button onClick={inc} className="botao text-2xl font-bold">+1</button>
        </div>
    )
}