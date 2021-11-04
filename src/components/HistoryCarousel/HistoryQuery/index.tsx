import React, { FC, useRef, useState } from 'react';
import { DropdownButtonType } from './styled';
import { useOutsideHandler } from 'hooks/useOutsideHandler';
import ModalPortal from 'components/ModalPortal';
import { useActions } from 'hooks/useActions';
import { IQueryHistoryItem } from 'store/reducers/console';
import { ISendsayRequest } from 'api/console';
import * as ST from './styled';

interface IProps {
    query: IQueryHistoryItem,
    onExecuteQuery?: (query: ISendsayRequest) => void;
    className?: string;
}

export interface IDropdownSettings {
    left: number,
    top: number,
    width: number,
}

const HistoryQuery: FC<IProps> = ({ query, onExecuteQuery, className }) => {
    const { deleteFromHistory } = useActions();
    const [open, setOpen] = useState(false);
    const dotsRef = useRef<SVGSVGElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const wrapper = useRef<HTMLDivElement>(null);
    const dropdownStylesRef = useRef<IDropdownSettings>({
        left: 0,
        top: 0,
        width: 0,
    });

    const closeDropdown = () => {
        setOpen(false);
    };

    const toggleModal = () => {
        setOpen(prevState => !prevState);
    };

    const onCopy = () => {
        navigator.clipboard.writeText(JSON.stringify(query.content));
        closeDropdown();
    };

    const openDropdownMenu = () => {
        const rect = wrapper.current?.getBoundingClientRect();
        if (rect) {
            dropdownStylesRef.current = {
                left: rect.x,
                top: rect.y + window.scrollY + rect.height,
                width: wrapper.current!.offsetWidth,
            };
        }
        toggleModal();
    }

    useOutsideHandler(dropdownRef, closeDropdown, dotsRef);

    return (
        <>
            <ST.Wrapper ref={wrapper} className={className}>
                <ST.Status isSuccess={query.isSuccess} />
                <ST.Action>{query.content.action}</ST.Action>
                <ST.Dots ref={dotsRef} onClick={openDropdownMenu} />
            </ST.Wrapper>
            {open && <ModalPortal>
                <ST.Dropdown settings={dropdownStylesRef.current} ref={dropdownRef}>
                    {onExecuteQuery && <ST.DropdownButton onClick={() => onExecuteQuery(query.content)}>Выполнить</ST.DropdownButton>}
                    <ST.DropdownButton onClick={onCopy} typeButton={DropdownButtonType.copy}>Скопировать</ST.DropdownButton>
                    <ST.DropdownLine />
                    <ST.DropdownButton onClick={() => deleteFromHistory(query)} typeButton={DropdownButtonType.remove}>Удалить</ST.DropdownButton>
                </ST.Dropdown>
            </ModalPortal>}
        </>
    );
};

export default HistoryQuery;
