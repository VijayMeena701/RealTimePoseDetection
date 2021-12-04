import React from 'react';
import WebCamComp from "../components/WebCamComp";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material';

const Home = () => {
    const webcamRef = React.useRef(null);
    const [turnOn, setTurnOn] = React.useState(false);
    return (
        <div style={{ width: '100vw', marginTop: '1.5rem', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: "center", gap: '5rem' }}>
            <div style={{ border: `5px solid ${turnOn ? "#aaff00" : "#ff751a"} `, background: `${turnOn ? "#e6ffb3" : "#ffc299"}`, padding: '10px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: "center", gap: '5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', margin: 'auto', padding: '0 0 0 1rem' }}>
                    <Button onClick={() => setTurnOn(!turnOn)} variant="contained">Toggle Camera</Button>
                    <Link to="/webcam-detection" style={{ textDecoration: 'none' }}>
                        <Button variant="contained">Live Pose Detection</Button>
                    </Link>
                    <Link to="/video-detection" style={{ textDecoration: 'none' }}>
                        <Button variant="contained">Pose Detection on Video</Button>
                    </Link>
                </div>
                {turnOn ? (<WebCamComp style={{ width: 640, height: 480, background: "#000", border: '10px solid #1565c0' }} ref={webcamRef} />) : (
                    <div style={{ width: 640, height: 480, background: "#000", display: 'flex', border: '10px solid #1565c0' }} >
                        <Typography variant="h4" style={{ display: 'flex', color: '#fff', margin: 'auto' }}>Camera is Turned off</Typography>
                    </div>
                )}
            </div>
        </div >
    )
}

export default Home
