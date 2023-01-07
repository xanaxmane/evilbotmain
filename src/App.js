import React, { useState } from 'react';
import './App.css';

function App() {
const [message, setMessage] = useState('');
const [response, setResponse] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  fetch('http://localhost:3001/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({message}),
  })
  .then((res) => res.json())
  .then((data) => setResponse(data.message));
};

return (
 
  <body>
    
<div class="circ">
<h1 data-title="EVILBOT">EVILBOT</h1>
<div class="hands"></div>
<div class="body"></div>

<div class="head">
<div class="eye"> </div> 
</div>
</div>
  <div className="App">
    <form onSubmit={handleSubmit}>
      <textarea maxlength="100"  placeholder="Okay ask me something you stupid piece of #$@&%*! ..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      id="textBox"
      ></textarea>
      <center><button class="responseText" type="submit">Ask me, idiot</button></center>
      </form>
      <center><div class="responseText">{response}</div></center>
      </div>
      <div class="donate2">
      <a  class="donate" href="https://revolut.me/clonaz"><img src="https://img.buymeacoffee.com/button-api/?text=Donate on revolut&emoji=😈&slug=clonaz&button_colour=FF5F5F&font_colour=ffffff&font_family=Arial&outline_colour=000000&coffee_colour=FFDD00" /></a>
      <br/>
        The AI is still in development. Every donation goes towards its development.<br/>
      The monthly cost of maintaining and developing this EvilBot is currently more than $650.   
      
      </div>
      <div class="elerhetosegek">
      v0.01alpha
      <br/>
      For any questions, bug report<br/> or business reach me here:<br/>
      <a class="twitter" href="https://twitter.com/EvilBotAI">Twitter:  @EvilBotAI</a>
      </div>
            </body>
);



}
export default App