import React from 'react'
import PropTypes from 'prop-types';
import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom'

function Copyright(props) {
    return (
        <Typography variant="body2" color="white" align="center" >
            {'Copyright © '}
            <Link style={{ textDecoration: 'none', color: "#fff" }} to="/">
                Pose Detection
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Footer = (props) => {
    return (
        <Box style={{
            position: 'absolute',
            width: '100%',
            background: '#1565c0',
            flexGrow: 1,
            bottom: 0
        }}>
            <Grid container spacing={0} justifyContent="center">
                <Grid container item xs={12} style={{ padding: '10px 0' }}>
                    <Grid item xs={6} style={{ textAlign: 'center' }}>
                        <Typography fontFamily="Poppins" color="white" variant="h3">Pose Detection </Typography>
                    </Grid>
                    <Grid item xs={6} sm={4} style={{ textAlign: 'center' }}>
                        <Typography variant="h5" fontFamily="Open sans" color="white">
                            Project By Group #12
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} style={{ padding: '1rem 2rem', margin: 'auto' }}>
                        <Typography variant="body1" fontFamily="Open sans" color="white">
                            This Project is built using libraries such as tensorflow, posnet, react.
                            the project is just a tip of the iceberg of the huge no of possibilites we can achieve with Pose Detection
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} style={{ padding: '1rem 2rem', margin: 'auto' }}>
                        <Typography variant="h6" fontFamily="Open sans" color="white">
                            Team Members:
                        </Typography>
                        <Typography variant="h6" fontFamily="Open sans" color="white">
                            CED18I011 - Vamsi
                        </Typography>
                        <Typography variant="h6" fontFamily="Open sans" color="white">
                            CED18I032 - Akhil
                        </Typography>
                        <Typography variant="h6" fontFamily="Open sans" color="white">
                            CED18I057 - Vijay
                        </Typography>
                    </Grid>
                </Grid>
                <hr style={{ marginLeft: 'auto', marginRight: 'auto', width: '450px', border: '2px solid #4F4F7E' }} />
                <Grid item xs={12} container spacing={0} justifyContent="center">
                    <Grid item xs={12} sm={9} md={4} style={{ display: 'flex', justifyContent: 'space-evenly', padding: '1rem 0' }}>
                        <Copyright />
                        <Link to="/" style={{ textDecoration: 'none', color: "#fff" }}>
                            <Typography>Privacy</Typography>
                        </Link>
                        <Link to="/" style={{ textDecoration: 'none', color: "#fff" }}>
                            <Typography>Terms</Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer
