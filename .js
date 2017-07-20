import React from 'react'
import ReactDOM from 'react-dom'

class Application extends React.Component {
  render() {
    return <div>
      <h1>Orcanus Dark</h1>
      <p>
        "In days to come, the darkness will begin to consume the light. 
During these days many small candles will burn together, brighter than
the sun and push the shadows back." - Elder Master Lucian Ethalas
      </p>
      <div>
       <p>Welcome warrior. By what name shall you be known by?</p>
       </div>
    </div>;
  }
}

//user name input



React.render(<Application />, document.getElementById('app'));
