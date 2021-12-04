import React from 'react'
import Webcam from 'react-webcam'

const WebCamComp = React.forwardRef((props, ref) => {
    const videoConstraints = {
        width: 640,
        height: 480,
        facingMode: "user"
    };
    return (
        <Webcam
            ref={ref}
            style={{
                position: "relative",
                left: 0,
                right: 0,
                zindex: 9,
                width: 640,
                height: 480,
            }}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
        />
    )
});

export default WebCamComp
