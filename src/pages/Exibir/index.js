import { useLocation } from "react-router-dom"
import Listas from "../../Components/Listas"
import Cadastro from "../../Components/Cadastro"
const Exibir = () => {
    const selectComponent = () => {
        if(location.state === "cadastro") {
            return <Cadastro/>
        } else if(location.state ==="listas"){
            return <Listas/>
        }
    }

    const location = useLocation()
    return (
        <>
        <h1>Exibir</h1>
        {selectComponent()}
        </>
    )
}

export default Exibir