import { contadorService } from "@/services/ContadorService";
import { useState } from "react";

export function useContador() {

    const [numero, setNumero] = useState<number>(contadorService.numero$.value);
    

    const numeroSubscription = () => contadorService.numero$.subscribe(value => {
        setNumero(value);
    });

    const dec = () => {
        const novoValor = contadorService.numero$.value - 1
        contadorService.atualizarNumero(novoValor);
    }

    const inc = () => {
        const novoValor = contadorService.numero$.value + 1
        contadorService.atualizarNumero(novoValor);
    }

    const clear = () => {
        contadorService.atualizarNumero(0);
    }

    return {
        inc,
        dec,
        numero,
        numeroSubscription,
        clear
    }
}