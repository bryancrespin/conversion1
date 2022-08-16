import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [unidad, setUnidad] = useState(0);
  const [decena, setDecena] = useState(0);
  const [centena, setCentena] = useState(0);
  

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);
  
  

  useEffect(() => {
    setUnidad((total * tipo));
    setDecena((total * tipo)*274.15 );
    setCentena((total * tipo)*33.8 );

    
    
   
    
  }, [total, tipo]);
  


  


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
  
    }
  };


  return (
    <div className="App">
      <h1>Convertidor de unidades</h1>

      <p>Celsius: {unidad}</p>
      <p>kelvin: {decena}</p>
      <p>Fahrenheit: {centena}</p>

      
    

      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo} >
        <option value={1}>Celsius</option>
        <option value={1}>kelvin</option>
        <option value={1}>Fahrenheit</option>
        
     
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
