import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import Detail from './pages/Detail'

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/producto/:id' element={<Detail />}></Route>
        </Routes>
    </div>
  );
}

export default App;
