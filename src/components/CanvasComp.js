import React from 'react'

const CanvasComp = React.forwardRef((props, ref) => {
    return (
        <canvas
            ref={ref}
            style={{
                position: "absolute",
                left: 0,
                right: 0,
                zindex: 9,
                width: 640,
                height: 480,
            }}
        />
    )
});

export default CanvasComp
