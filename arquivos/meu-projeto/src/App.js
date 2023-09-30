import './App.css';
import HellWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = 'Maria'

  return (
    <div className="App">
        <SayMyName nome="Kaue"/>
        <SayMyName nome="Matheus"/>
        <SayMyName nome={nome}/>
        <Pessoa
         nome="Rodrigo" 
         idade="24" 
         profissao="progamador" 
         foto="https://via.placeholder.com/150"
        />
    </div>
  )
}

export default App
