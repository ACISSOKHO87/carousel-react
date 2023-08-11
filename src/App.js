import './App.css';

import Home from './containers/home'

// toujours importer notre router
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </header> 
    </div>
  );
}

export default App;
