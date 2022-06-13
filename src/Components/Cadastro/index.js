import {useState} from 'react'

const Cadastro = () => {
    const [nome,setNome] = useState ("")
    const [idade,setIdade] = useState ("")
    const [sexo,setSexo] = useState ("")
    const [cidade,setCidade] = useState ("")

    // const [data, setData] = useState({
    //     nome: "",
    //     idade: "",
    //     sexo: "",
    //     cidade: ""
    // })

    const handleCadastro = (e) => {
        e.preventDefault()
        const dados = `nome: ${nome}. Idade: ${idade}. Sexo: ${sexo}. Cidade: ${cidade}`
        console.log(dados)
    }
    
    return(
        <form action="">
            <label htmlFor="">
                Nome:
                <input type="text" value={nome} onChange={(info) => {setNome(info.target.value)}}/>
            </label>
            <br />
            <label htmlFor="">
                Idade:
                <input type="text"  value={idade} onChange={(e)=> {setIdade(e.target.value)}}/>
            </label>
            <br />
            <label htmlFor="">
                Sexo:
                <input type="text" value={sexo} onChange={(e)=> {setSexo(e.target.value)}}/>
            </label>
            <br />
            <label htmlFor="">
                <input type="text" value={cidade} onChange={(e)=> {setCidade(e.target.value)}}/>
            </label>
            <br />
            <input type="submit" value="cadastrar" onClick={handleCadastro}/>
        </form>
    )
}

export default Cadastro;