import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Price from '../Pages/Price/Price';

function Navigation() {
    return (
        <Router>
            <Routes>

                <Route path="/price" element={<Price />} />

            </Routes>
        </Router>
    )
}

export default Navigation
