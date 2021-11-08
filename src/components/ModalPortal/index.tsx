import { FC, useEffect } from "react";
import ReactDOM from "react-dom";

export interface ModalPortalProps {
    el?: string;
}

const ModalPortal: FC<ModalPortalProps> = ({
    children,
    el = 'div',
}) => {
    const root = document.createElement(el);

    useEffect(() => {
        document.body.appendChild(root);
        return () => {
            document.body.removeChild(root)
        };
        // eslint-disable-next-line
    }, []);

    return ReactDOM.createPortal(children, root);
};

export default ModalPortal;
