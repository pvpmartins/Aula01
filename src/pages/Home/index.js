import { Link, useNavigate } from "react-router-dom"

const Home = () => {
    const navigate  = useNavigate()
    
    return (
        <>
        <h1>Home</h1>
        {/* <button onClick={()=> navigate('/aulas')}>Aulas!</button> */}
        <Link to={'aulas'} state="HOME">ir para Aulas</Link>
        <br />
        <Link to={'exercicios'}>Ir para exercicios</Link>
        </>
    )
}

export default Home