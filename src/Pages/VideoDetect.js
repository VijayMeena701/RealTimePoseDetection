import React from 'react';
import * as posenet from "@tensorflow-models/posenet";
import { drawKeypoints, drawSkeleton } from "../utilities";
import CanvasComp from "../components/CanvasComp";
import test from '../test.mp4';

const VideoElemet = React.forwardRef((props, ref) => {
    return (<video src={test} autoPlay muted loop controls ref={ref} type="video/mp4" />)
})

const VideoDetect = () => {
    const videoRef = React.useRef(null);
    const canvasRef = React.useRef(null);

    //  Load posenet
    const runPosenet = async () => {
        const net = await posenet.load({
            inputResolution: { width: 640, height: 480 },
            scale: 0.8,
        });
        setInterval(() => {
            detectUsingVideo(net);
            console.log("running");
            // clearInterval(id);
        }, 100);

    };

    const detectUsingVideo = async (net) => {
        console.log(videoRef)
        if (videoRef.current === "video") {
            // Get Video Properties
            const video = videoRef.current.video;
            const videoWidth = videoRef.current !== null ? videoRef.current.video.videoWidth : 1280;
            const videoHeight = videoRef.current !== null ? videoRef.current.video.videoHeight : 720;

            // Set video width
            videoRef.current.video.width = videoWidth;
            videoRef.current.video.height = videoHeight;

            // Make Detections
            const pose = await net.estimateSinglePose(video);

            drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);
        }
    };

    const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
        const ctx = canvas.current.getContext("2d");
        canvas.current.width = videoWidth;
        canvas.current.height = videoHeight;

        drawKeypoints(pose["keypoints"], 0.5, ctx);
        drawSkeleton(pose["keypoints"], 0.5, ctx);
    };
    runPosenet();
    return (
        <div className="App">
            <header className="App-header">
                <VideoElemet style={{ display: 'hidden', position: 'absolute', zIndex: '-9', left: 0, top: 0, opacity: 0 }} ref={videoRef} />
                <CanvasComp style={{ border: "1px solid #000", position: 'absolute', zIndex: '9', left: "50vw", top: 0 }} ref={canvasRef} />
            </header>
        </div>
    )
};

export default VideoDetect