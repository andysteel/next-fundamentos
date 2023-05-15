import { useContador } from "@/data/hooks/useContador"
import { useEffect } from "react";

export default function Exibir() {

    const { numero, numeroSubscription } = useContador();

    useEffect(() => {
        const sub = numeroSubscription();

        //execução para quando o componente for destruido 
        return () => {
            sub.unsubscribe();
        }
    },[])

    return (
        <div>
            <span className="text-5xl font-black">{numero}</span>
        </div>
    )
}