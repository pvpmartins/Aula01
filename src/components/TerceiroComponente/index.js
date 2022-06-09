/*
    Criar um Componente Novo
    Criar 2 variáveis com números
    criar uma função para somar os 2 número e elevar ao quadrado
    Clicar no botão, disparar a função
    mostrar o resultado no console
*/


const TerceiroComponente = () => {
    const n1 = 4;
    const n2 = 9;
    const n3 = null;

    const operacao = () => {
        n3 = n2+n1
    }

    return (
        <form>
            <button type="button" onClick={{operacao}}>Fazer operacao!</button>
            <h1></h1>
        </form>
    )
    
}

export default TerceiroComponente;