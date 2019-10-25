import React, { useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function App(){

  const [state,seState] = useState("teste");

    return (
      <div>
      <label from="key">key</label>
      <input id="key" key="changer-key" onBlur={(e)=>seState(e.target.value)}/>
      

      <label from="value">value</label>
      <input id="value" key={state} />
        <Hello name={state} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );

}

render(<App />, document.getElementById('root'));