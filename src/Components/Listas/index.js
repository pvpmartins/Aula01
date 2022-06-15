import { useState } from "react";
import NovoComponente from "../NovoComponente";

const Listas = () => {
    const [frutas, setFrutas] = useState(["mamao","melao","abacaxi"])

    const [novaFruta, setNovaFruta] = useState("")

    const adicionarFruta = () => {
        setFrutas([...frutas, novaFruta])
    }

    const [index, setIndex] = useState()

    const removerFruta = (index) => {
        const newArr = frutas.slice((index-1),1)
        setFrutas(newArr)
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
            <input type="text" name="" id="" onChange={(e) => setIndex(e.target.value)}/>
            <button type="button" onClick={()=> removerFruta(index)}>Remover Fruta</button>

        </>
        
    )
}

export default Listas