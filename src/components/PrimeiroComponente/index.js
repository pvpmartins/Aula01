const PrimeiroComponente = () => {
    const n1 = 4;
    const n2 = 9;
    let n3 = null;

    const operacao = () => {
        n3 = n2+n1
        console.log(n3)
    }

    return (
        <form>
            <button type="button" onClick={operacao}>Fazer operacao!</button>
            <h1></h1>
        </form>
    )
}

export default PrimeiroComponente;