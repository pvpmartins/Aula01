import "./styles.css"
const SegundoComponente = () => {
    const handleLogin = (e) => {
        e.preventDefault()
        console.log("login")
    }
    return (
        <div>
       <form>
           User ID : <input type = "text" name = "user_id" placeholder="insert username"/>
         <br/>
         Password: <input type = "password" name = "password" />
       </form>     
         <button type="submit" value="Entrar" onClick={handleLogin}>LOGIN</button>
        </div>
    )
}

export default SegundoComponente