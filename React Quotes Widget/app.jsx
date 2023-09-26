import React from "react";
import QuoteDisplay from "./quotedisplay";

function App() {
  return (
    <div className="App">
      <h1>Random Quotes</h1>
      <QuoteDisplay />
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));
