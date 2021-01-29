import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styles from '../styles/products.module.scss';

export default function Product_image({ url }) {

    return (
        <TransformWrapper
            defaultScale={1}
            defaultPositionX={200}
            defaultPositionY={100}
        >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <React.Fragment>
                    <div className={`tools ${styles.img_controls}`}>
                        <button onClick={zoomIn}>+</button>
                        <button onClick={zoomOut}>-</button>
                    </div>
                    <TransformComponent>
                        <img src={url} alt="Imagen de producto" />
                    </TransformComponent>
                </React.Fragment>
            )}
        </TransformWrapper>
    );
}
