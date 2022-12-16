import "../styles/App/App.css";
import Home from '../components/Home';
import AddNewBook from '../components/AddNewBook';
import EditBook from '../components/EditBook';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { GlobalProvider } from "../components/context/GlobalState";

function App() {
    return (
        <div className="wrapper">
            <GlobalProvider>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home/>}  />
                        <Route path="/add" element={<AddNewBook/>}  />
                        <Route path="/edit/:id" element={<EditBook/>}  />
                    </Routes>
                </Router>
            </GlobalProvider>
        </div>
    );
}

export default App;