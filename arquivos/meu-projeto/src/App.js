import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'kaue'

  const newName = name.toUpperCase()

  function sum(a,b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
        <h1>Ola react</h1>
        <p>ola meu nome é {newName}</p>
        <p>soma: {sum(1,2)}</p>
        <img src={url} alt="minha imagem" />
        
    </div>
  );
}

export default App;