import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Registration from '../Pages/Register/Register';
import Login from '../Pages/Register/Register';


function Navigation() {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<Login />} />

            </Routes>
        </Router>
    )
}

export default Navigation
