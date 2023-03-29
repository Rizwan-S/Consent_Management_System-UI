import React from 'react';
import { Container } from '@material-ui/core';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home/Home';
import DoctorRegister from './components/RegsiterDoctor/Register';

const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <BrowserRouter>
            <Container maxWidth="xl">
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/doctorregister" exact element={<DoctorRegister />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;
