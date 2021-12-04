import React from 'react';
import * as posenet from "@tensorflow-models/posenet";
import { drawKeypoints, drawSkeleton } from "../utilities";
import WebCamComp from "../components/WebCamComp";
import CanvasComp from "../components/CanvasComp";
import { Typography } from '@mui/material'

const WebCamDetect = () => {
    const camReference = React.useRef(null);
    const canvasRef = React.useRef(null);

    //  Load posenet
    const runPosenet = async () => {
        const detectionNet = await posenet.load({
            inputResolution: { width: 640, height: 480 },
            scale: 0.5,
        });
        setInterval(() => {
            detectUsingWebcam(detectionNet);
            console.log("running");
            // clearInterval(id);
        }, 100);
    };

    const detectUsingWebcam = async (detectionNet) => {
        if (
            typeof camReference.current !== "undefined" &&
            camReference.current !== null &&
            camReference.current.video.readyState === 4
        ) {
            // Get Video Properties
            const video = camReference.current.video;
            const videoWidth = camReference.current.video.videoWidth;
            const videoHeight = camReference.current.video.videoHeight;

            // Set video width
            camReference.current.video.width = videoWidth;
            camReference.current.video.height = videoHeight;

            // Make Detections
            const pose = await detectionNet.estimateSinglePose(video);

            drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);
        }
    };

    const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
        const ctx = canvas.current.getContext("2d");
        canvas.current.width = videoWidth;
        canvas.current.height = videoHeight;

        drawKeypoints(pose["keypoints"], 0.5, ctx);
        drawSkeleton(pose["keypoints"], 0.7, ctx);
    };
    runPosenet();

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '1rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', gap: '15px', background: '#cfe2ff', border: '5px solid #b6d4fe' }}>
                <WebCamComp style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }} ref={camReference} />
                <Typography variant="h5" >Input Source</Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', gap: '15px', background: '#dfff80', border: '5px solid #bfff00' }}>
                <div style={{ display: 'flex', position: 'relative' }}>
                    <WebCamComp ref={camReference} />
                    <CanvasComp ref={canvasRef} />
                </div>
                <Typography variant="h5" >Output Screen</Typography>
            </div>
        </div>
    )
}

export default WebCamDetect
