import Alterar from '@/components/examples/contador/Alterar'
import Exibir from '@/components/examples/contador/Exibir'
import Pagina from '@/components/template/Pagina'

export default function PaginaContador() {

    return (
        <Pagina>
            <div className='flex flex-col items-center gap-5'>
                <Exibir />
                <Alterar />
            </div>
        </Pagina>
    )
}