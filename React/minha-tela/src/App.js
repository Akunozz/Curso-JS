import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <textarea className="text-area" placeholder="Area de texto" />
        <div className="image-area">IMAGEM</div>
        <div className="options">
          <div className="option">
            <input type="checkbox" id="option1" name="option1" />
            <label htmlFor="option1">Opção 1</label>
          </div>
          <div className="option">
            <input type="checkbox" id="option2" name="option2" />
            <label htmlFor="option2">Opção 2</label>
          </div>
          <div className="option">
            <input type="checkbox" id="option3" name="option3" />
            <label htmlFor="option3">Opção 3</label>
          </div>
          <div className="option">
            <input type="checkbox" id="option4" name="option4" />
            <label htmlFor="option4">Opção 4</label>
          </div>
        </div>
        <button className="submit-button">Botão submit</button>
      </header>
    </div>
  );
}

export default App;
