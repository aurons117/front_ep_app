import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Product_image() {
    return (
        <TransformWrapper
            defaultScale={1}
            defaultPositionX={200}
            defaultPositionY={100}
        >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <React.Fragment>
                    {/* <div className="tools">
                        <button onClick={zoomIn}>+</button>
                        <button onClick={zoomOut}>-</button>
                        <button onClick={resetTransform}>x</button>
                    </div> */}
                    <span></span>
                    <TransformComponent>
                        <img src="/safety.png" alt="test" />
                        <div>Example text</div>
                    </TransformComponent>
                </React.Fragment>
            )}
        </TransformWrapper>
    );
}
