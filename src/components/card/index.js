/*Criando o setState que nos permite criar elementos dinâmicos. Neste caso 
um contador Incrementar/ Decrementar*/


import { useState } from 'react';
import Button from '../button';


const Card = () => {
    
    const [valor, setValor] = useState(0)

    function Incrementar () {
        setValor(valor + 1)
    }

    function Decrementar () {
        setValor(valor - 1)
    }

    return(
        <div className="card">
            <div className="card-header">
                Titulo    
            </div>
            <div className="card-body">
                <Button
                    className="btn btn-success"
                    onClick={Incrementar}
            >
                Incrementar
            </Button>
            <button

                className="btn btn-danger"
                onClick={Decrementar}
                
            >
                Decrementar
            </button>
                <p>{valor}</p>
            </div>
        </div>
    )
}

export default Card;