import React from 'react';
import {
    Grid,
    Paper,
    TextField,
    Button,
    Link,
    Typography,
} from '@material-ui/core';
import Header from './Header.js';

const DoctorRegister = () => {
    const paperStyle = {
        padding: 20,
        height: '40%',
        width: 350,
        margin: '20px auto',
        backgroundColor: '#20CD51',
    };
    const btnstyle = {
        backgroundColor: '#20CD51',
        left: '45%',
        width: '150px',
        borderRadius: 50,
    };
    return (
        <div>
            <Header />
            <Grid style={{ margin: '10% 0 5% 0' }}>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align="center">
                        <h2 style={{ color: 'white', fontWeight: 'bold' }}>
                            Register a Doctor
                        </h2>
                    </Grid>
                    <TextField
                        InputProps={{ disableUnderline: true }}
                        style={{
                            background: 'white',
                            borderRadius: 50,
                            margin: '3px',
                            height: '40px',
                        }}
                        placeholder="   Name"
                        fullWidth
                        required
                    />
                    <TextField
                        InputProps={{ disableUnderline: true }}
                        style={{
                            background: 'white',
                            borderRadius: 50,
                            margin: '4px',
                            height: '40px',
                        }}
                        placeholder="   Phone Number"
                        type="password"
                        fullWidth
                        required
                    />
                    <TextField
                        InputProps={{ disableUnderline: true }}
                        style={{
                            background: 'white',
                            borderRadius: 50,
                            margin: '4px',
                            height: '40px',
                        }}
                        placeholder="   Date Of Birth"
                        type="password"
                        fullWidth
                        required
                    />
                    <TextField
                        InputProps={{ disableUnderline: true }}
                        style={{
                            background: 'white',
                            borderRadius: 50,
                            margin: '4px',
                            height: '40px',
                        }}
                        placeholder="   Email"
                        type="password"
                        fullWidth
                        required
                    />
                    <TextField
                        InputProps={{ disableUnderline: true }}
                        style={{
                            background: 'white',
                            borderRadius: 50,
                            margin: '4px',
                            height: '40px',
                        }}
                        placeholder="   Password"
                        type="password"
                        fullWidth
                        required
                    />
                    <TextField
                        InputProps={{ disableUnderline: true }}
                        style={{
                            background: 'white',
                            borderRadius: 50,
                            margin: '4px',
                            height: '40px',
                        }}
                        placeholder="   Confirm Password"
                        type="password"
                        fullWidth
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
                Register
            </Button>
        </div>
    );
};

export default DoctorRegister;