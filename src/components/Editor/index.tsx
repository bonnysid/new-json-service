import React, { FC, useEffect, useRef } from "react";
import JSONEditor, { JSONEditorOptions } from "jsoneditor";
import * as ST from './styled';
import 'jsoneditor/dist/jsoneditor.css';

export type modes = 'tree' | 'view' | 'form' | 'code' | 'text';
type TValue = object | [] | string | boolean | number;

export interface EditorProps {
    value: TValue;
    onChange: (dataObj: any, dataStr: string) => void;
    formattedValue?: string,
    onError: (error: boolean) => void,
    isError?: boolean;
}

const defaultSettings: JSONEditorOptions = {
    mode: 'code',
    navigationBar: false,
    statusBar: false,
    search: false,
};

const Editor: FC<EditorProps> = ({ value, formattedValue, onError, onChange, isError }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const editorRef = useRef<JSONEditor>();

    useEffect(() => {
        createEditor(value);

        return () => {
            editorRef.current!.destroy();
        };
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        const currentJson = editorRef.current!.get();
        if(JSON.stringify(value) !== '{}' && JSON.stringify(value) !== JSON.stringify(currentJson)) {
            editorRef.current!.update(value);
        }
    }, [value]);

    useEffect(() => {
        if(formattedValue && formattedValue !== value) {
            editorRef.current!.updateText(formattedValue);
        }
        // eslint-disable-next-line
    }, [formattedValue]);

    const handleError = () => {
        onError!(true);
    };

    const createEditor = (value: TValue) => {
        if (editorRef.current) {
            editorRef.current.destroy();
        }

        editorRef.current = new JSONEditor(containerRef.current!, {
            ...defaultSettings,
            onChange: handleChange,
            onError: handleError,
        });

        editorRef.current.set(value);
    }

    const getText = () => editorRef.current!.getText();

    const updateText = (text: string) => editorRef.current!.updateText(text);

    const handleChange = () => {
        if (onChange) {
            try {
                const text = editorRef.current!.getText();
                if (text === '') {
                    onChange(null, '');
                }
                const currentJson = editorRef.current!.get();
                onChange(currentJson, getText());
                if (JSON.stringify(value) !== JSON.stringify(currentJson)) {
                    editorRef.current!.updateText(editorRef.current!.getText());
                    onChange(currentJson, editorRef.current!.getText());
                }
                if(getText() !== JSON.stringify(currentJson)) {
                    updateText(getText());
                }
                onError(false);
            } catch (err) {
                onError(true);
            }
        }
    }

    return (
        <ST.Textarea isError={isError} ref={containerRef}/>
    );
}

export default Editor
