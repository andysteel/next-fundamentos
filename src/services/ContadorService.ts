import { BehaviorSubject } from "rxjs";

const numero = new BehaviorSubject<number>(0);

export const contadorService = {
    atualizarNumero: (num: number) => numero.next(num),
    numero$: numero
}

