import { BrowserRouter } from 'react-router-dom';
import Router from './Router/Router'
import './App.css';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
