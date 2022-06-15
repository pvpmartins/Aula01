import { Link } from "react-router-dom"
import Cadastro from "../../Components/Cadastro"

const Exercicios = () => {
    

    return(
        <>
        <h1>Link de exercicios</h1>
        <Link to={'/exibir'} state={"cadastro"}>Cadastro</Link>
        <br />
        <Link to={'/exibir'} state={"listas"}>Listas</Link>
        </>
    )
}

export default Exercicios