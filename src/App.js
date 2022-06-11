import logo from './logo.svg';
import './App.css';
import Listas from './Components/Listas';
import Cadastro from './Components/Cadastro';

function App() {
  return (
    <div className="App">
      <Cadastro/>
      <Listas/>
    </div>
  );
}

export default App;
