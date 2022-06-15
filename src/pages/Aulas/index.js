import { Link, useNavigate, useLocation } from "react-router-dom"
const Aulas = () => {
    const location = useLocation()

    return (
        <>
        <h1>Voce veio de {location.state}</h1>
        <h1>Aulas</h1>
        <Link to="/home"></Link>
        </>
    )
}
export default Aulas;