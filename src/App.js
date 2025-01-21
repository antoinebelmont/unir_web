import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import Detail from './pages/Detail'
import LoginForm from './pages/Login'
import { AuthProvider } from "./hooks/useAuth";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
        <Routes>
            <Route path='/producto/:id' element={<ProtectedRoute><Detail /></ProtectedRoute>} />
            <Route path='/' element={<Home />}></Route>
            {/*<Route path='/producto/:id' element={<Detail />}></Route>*/}
            <Route exact path='/login' element={<LoginForm />} />
        </Routes>
    </AuthProvider>
  );
}

export default App;
