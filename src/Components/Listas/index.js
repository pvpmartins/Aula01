import { useState } from "react";
import NovoComponente from "../NovoComponente";

const Listas = () => {
    const [frutas, setFrutas] = useState(["mamao","melao","abacaxi"])

    const [novaFruta, setNovaFruta] = useState("")

    const adicionarFruta = () => {
        setFrutas([...frutas, novaFruta])
        setNovaFruta("")
    }

    return (
        <>
            {/* <ul>
                {frutas.map((fruta, index) => (
                    <li key={index}>{fruta} - {index +1}</li>
                ))}
            </ul>
            <input type="text" value={novaFruta} onChange={(e)=>setNovaFruta(e.target.value)} />
            <button type="button" onClick={adicionarFruta}>Adicionar fruta!</button> */}
            <ul>
                {frutas.map((fruta, index)=>(
                    <NovoComponente key={index} nome={fruta}/>
                )) }
            </ul>
            <input type="text" value={novaFruta} onChange={(e)=>setNovaFruta(e.target.value)} />
            <button type="button" onClick={adicionarFruta}>Adicionar fruta!</button>


        </>
        
    )
}

export default Listas