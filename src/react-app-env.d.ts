/// <reference types="react-scripts" />
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        body: string;
        text: string;
        border: string;
        gradient: string;
        consolePageBG: string;
        headerBG: string;
        svgStroke: string;
        textarea: string;
        activeLine: string;
        blockBg: string;
        inputOptional: string;
        fillSvg: string;
    }
}
