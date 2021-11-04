import React, { FC, useEffect, useRef } from "react";
import JSONEditor, { JSONEditorOptions } from "jsoneditor";
import * as ST from './styled';
import 'jsoneditor/dist/jsoneditor.css';

export type modes = 'tree' | 'view' | 'form' | 'code' | 'text';

export interface CustomEditorProps {
    value: object | [] | string | boolean | number;
    onChange: (dataObj: any, dataStr: string) => void;
}

export interface EditorProps extends CustomEditorProps {
    formattedValue?: string,
    name?: string,
    schema?: object,
    schemaRefs?: object,
    sortObjectKeys?: boolean,
    onFormat?: () => string,
    onError?: (error: boolean) => void,
    onModeChange?: (props?: any) => void,
    theme?: string,
    history?: boolean,
    isError?: boolean;
}

const defaultSettings: JSONEditorOptions = {
    mode: 'code',
    navigationBar: false,
    statusBar: false,
    search: false,
};

const Editor: FC<EditorProps> = (props) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const editorRef = useRef<JSONEditor>()

    useEffect(() => {
        createEditor(props);

        return () => {
            editorRef.current!.destroy()
        }
    }, [])

    useEffect(() => {
        const currentJson = editorRef.current!.get()
        if(JSON.stringify(props.value) !== '{}' && JSON.stringify(props.value) !== JSON.stringify(currentJson)) {
            editorRef.current!.update(props.value)
        }
    }, [props.value])

    useEffect(() => {
        console.log(props.formattedValue, props.value);
        if(props.formattedValue && props.formattedValue !== props.value) {
            editorRef.current!.updateText(props.formattedValue);
        }
    }, [props.formattedValue])

    const handleError = (error: Error) => {
        props.onError!(true);
    };

    // eslint-disable-next-line react/sort-comp

    const createEditor = ({value, onChange, ...rest}: EditorProps) => {
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

    const getText = () => editorRef.current!.getText()

    const updateText = (text: string) => editorRef.current!.updateText(text)

    const handleChange = () => {
        if (props.onChange) {
            try {
                const text = editorRef.current!.getText();
                if (text === '') {
                    props.onChange(null, '');
                }
                const currentJson = editorRef.current!.get();
                props.onChange(currentJson, getText())
                if (JSON.stringify(props.value) !== JSON.stringify(currentJson)) {
                    editorRef.current!.updateText(editorRef.current!.getText())
                    props.onChange(currentJson, editorRef.current!.getText());
                }
                if(getText() !== JSON.stringify(currentJson)) {
                    updateText(getText())
                }
                props.onError!(false);
            } catch (err) {
                // @ts-ignore
                props.onError!(true);
            }
        }
    }

    return (
        <ST.Textarea isError={props.isError} ref={containerRef}/>
    );
}

export default Editor
