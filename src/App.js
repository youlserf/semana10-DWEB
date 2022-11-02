import { useState, useEffect } from 'react';

import Header from'./components/Header'
import Goku from'./components/goku/Goku'
import Footer from'./components/Footer'
import './App.css';
function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="App">
     <Header />
     <section>
      <div className="row fluid">
        <div className="col-lg-6 col12">
        <div className="card" styles={{}}>
        <div className="card-body">
          <h5 className="card-title fs-1">{number}</h5>
          <p className="card-text">valor de number</p>
        </div>
        <div className="mt-4 bg-warning">
        <button onClick={() => setNumber(number + 1)} className="btn btn-success m-4">Incrementar</button>
        <button onClick={() => setNumber(number - 1)} className="btn btn-success">Decrementar</button>
        </div>
      </div>
        </div>
        <div className="col-lg-6 col12">
        <Goku/>
        </div>
      </div>
     </section>
     
     <Footer />
   </div>

  );
}

export default App;
