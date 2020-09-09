import React, { Fragment, useState } from "react";
import Seed from './seed';

function App() {
  const [state] = useState(Seed);
  
  return (
    <div className="App">
     <h1>Taskflow</h1>
    </div>
  );
}

export default App;
