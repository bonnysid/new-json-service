import React, { FC, useRef } from 'react';
import { useTypedSelector } from 'hooks/useTypedSelector';
import HistoryQuery from 'components/HistoryCarousel/HistoryQuery';
import { useActions } from 'hooks/useActions';
import * as ST from './styled';
import { ISendsayRequest } from 'api/console';

export interface HistoryCarouselProps {
    onExecuteQuery: (query: ISendsayRequest) => void;
}

const PADDING = 25;
const SCROLL_SPEED = 10;

const HistoryCarousel: FC<HistoryCarouselProps> = ({ onExecuteQuery }) => {
    const { clearHistory } = useActions();
    const { history } = useTypedSelector(state => state.console);

    const slider = useRef<HTMLDivElement | null>(null);
    const wrapper = useRef<HTMLDivElement | null>(null);
    const clearButton = useRef<HTMLButtonElement | null>(null);
    const prevX = useRef(0);
    const isMouseInSlider = useRef(false);
    const isDown = useRef(false);
    const translate = useRef(0);
    const offsetLeft = useRef(0);

    const onSliderMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        isDown.current = true;
        prevX.current = e.pageX - slider.current!.offsetLeft;
    };

    const checkSliderDisable= () => {
        const containerWidth = wrapper.current!.offsetWidth - clearButton.current!.offsetWidth - PADDING;
        const isFewItems = slider.current!.offsetWidth < wrapper.current!.clientWidth;
        const isLeftEnd = translate.current >= 0;
        const isRightEnd = slider.current!.offsetWidth + translate.current <= containerWidth;
        if (isLeftEnd) {
            translate.current = 0;
        }
        return {
            isNotMouseDown: !isDown.current,
            isNotMouseInSlider: !isMouseInSlider.current,
            isFewItems,
            isLeftEnd,
            isRightEnd,
        };
    };

    const onSliderMouseUp = () => {
        isDown.current = false;
    };

    const onSliderMouseLeave = () => {
        isDown.current = false;
        isMouseInSlider.current = false;
    };

    const onSliderMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { isRightEnd, isLeftEnd, isFewItems, isNotMouseDown } = checkSliderDisable();
        isMouseInSlider.current = true;

        if (isNotMouseDown || isFewItems) {
            return;
        }

        const x = e.pageX - offsetLeft.current;
        const walk = prevX.current - x;
        const direction = Math.sign(walk);

        prevX.current = x;

        if ((isRightEnd && direction === 1) || (isLeftEnd && direction === -1)) {
            return;
        }

        translate.current -= walk;
        slider.current!.style.transform = `translate(${translate.current}px)`;
    };

    const onSliderScroll = (e: React.WheelEvent<HTMLDivElement>) => {
        const { isLeftEnd, isRightEnd, isFewItems, isNotMouseInSlider } = checkSliderDisable();

        console.log();
        if (isFewItems || isNotMouseInSlider) {
            return;

        }
        const walk = Math.sign(e.deltaY) * SCROLL_SPEED;
        const direction = Math.sign(walk);
        if ((isRightEnd && direction === 1) || (isLeftEnd && direction === -1)) {
            return;
        }

        translate.current -= walk;
        slider.current!.style.transform = `translate(${translate.current}px)`;
    };

    return (
        <ST.Wrapper ref={wrapper}>
            <ST.Slider
                ref={slider}
                onMouseDown={onSliderMouseDown}
                onMouseLeave={onSliderMouseLeave}
                onMouseMove={onSliderMouseMove}
                onMouseUp={onSliderMouseUp}
                onWheel={onSliderScroll}
            >
                {history.map(query => <HistoryQuery key={query.id} query={query} onExecuteQuery={onExecuteQuery} />)}
            </ST.Slider>
            <ST.ClearButton ref={clearButton} onClick={clearHistory}>
                <ST.ClearIcon />
            </ST.ClearButton>
        </ST.Wrapper>
    );
};

export default HistoryCarousel;
