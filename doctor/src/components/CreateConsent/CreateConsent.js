import { Grid, Button, Toolbar, TextField, Paper } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Header from './navbar.js';
import { useNavigate, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createConsent } from '../../actions/consent.js';
import decode from 'jwt-decode';

const initialState = {
    doctorId: '',
    patientId: '',
    requestingHospitalId: '',
    sendingHospitalId: '',
    reqStartDate: '',
    reqEndDate: '',
    reqValidity: '',
    status: '',
    consentValidity: '',
    record_type: '',
};

const ConsentCreate = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            // console.log(decodedToken);
            setFormData({
                ...formData,
                doctorId: `${decodedToken.id}`,
                requestingHospitalId: decodedToken.hospital_name,
            });
            // console.log(formData);
        }
    }, []);

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('doctor'))
    );

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createConsent(formData, navigate));
    };

    const paperStyle = {
        padding: 40,
        height: '45%',
        width: 400,
        margin: '50px auto',
        backgroundColor: '#20CD51',
    };
    const btnstyle = {
        backgroundColor: '#20CD51',
        left: '45%',
        width: '200px',
        borderRadius: 50,
    };

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Header />
            <Toolbar />
            <div style={{}}>
                <Grid
                    style={{ margin: '80px 0 20px  0' }}
                    alignContent="center"
                >
                    <div>
                        <Header />
                        <form onSubmit={handleSubmit}>
                            <Grid style={{ margin: '70px 0 50px  0' }}>
                                <Paper elevation={10} style={paperStyle}>
                                    <Grid align="center">
                                        <h2
                                            style={{
                                                color: 'white',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Create Consent
                                        </h2>
                                    </Grid>

                                    <TextField
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            borderRadius: 50,
                                            margin: '4px',
                                            height: '40px',
                                            marginBottom: '30px',
                                        }}
                                        name="patientId"
                                        label="   Patient ID"
                                        type="text"
                                        fullWidth
                                        onChange={handleChange}
                                        required
                                    />

                                    <TextField
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            borderRadius: 50,
                                            margin: '4px',
                                            height: '40px',
                                            marginBottom: '30px',
                                        }}
                                        name="sendingHospitalId"
                                        label="   Sending Hospital ID"
                                        type="text"
                                        fullWidth
                                        onChange={handleChange}
                                        required
                                    />
                                    <TextField
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            borderRadius: 50,
                                            margin: '4px',
                                            height: '40px',
                                            marginBottom: '30px',
                                        }}
                                        name="reqStartDate"
                                        label="   Request Start Date"
                                        type="text"
                                        fullWidth
                                        onChange={handleChange}
                                        required
                                    />
                                    <TextField
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            borderRadius: 50,
                                            margin: '4px',
                                            height: '40px',
                                            marginBottom: '30px',
                                        }}
                                        name="reqEndDate"
                                        label="  Request End Date"
                                        type="text"
                                        fullWidth
                                        onChange={handleChange}
                                        required
                                    />
                                    <TextField
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            borderRadius: 50,
                                            margin: '4px',
                                            height: '40px',
                                            marginBottom: '30px',
                                        }}
                                        name="reqValidity"
                                        label="   Request Validity"
                                        type="text"
                                        fullWidth
                                        onChange={handleChange}
                                        required
                                    />
                                    <TextField
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            borderRadius: 50,
                                            margin: '4px',
                                            height: '40px',
                                            marginBottom: '30px',
                                        }}
                                        name="status"
                                        label="   Status"
                                        type="text"
                                        fullWidth
                                        onChange={handleChange}
                                        required
                                    />
                                    <TextField
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            borderRadius: 50,
                                            margin: '4px',
                                            height: '40px',
                                            marginBottom: '30px',
                                        }}
                                        name="consentValidity"
                                        label="   Consent Validity"
                                        type="text"
                                        fullWidth
                                        onChange={handleChange}
                                        required
                                    />
                                    <TextField
                                        InputProps={{ disableUnderline: true }}
                                        style={{
                                            background: 'white',
                                            borderRadius: 50,
                                            margin: '4px',
                                            height: '40px',
                                            marginBottom: '30px',
                                        }}
                                        name="record_type"
                                        label="   Record Type"
                                        type="text"
                                        fullWidth
                                        onChange={handleChange}
                                        required
                                    />
                                </Paper>
                            </Grid>
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                style={btnstyle}
                            >
                                Create Consent
                            </Button>
                        </form>
                    </div>
                </Grid>
            </div>
        </div>
    );
};

export default ConsentCreate;
