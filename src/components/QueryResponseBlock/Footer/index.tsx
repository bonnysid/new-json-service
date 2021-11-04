import React, { FC } from 'react';
import Button from 'components/Button';
import * as ST from './styled';

interface IProps {
    handleSendClick: () => void;
    handleFormatClick: () => void;
    isLoading?: boolean;
}

const Footer: FC<IProps> = ({ isLoading, handleFormatClick, handleSendClick }) => {
    return (
        <ST.Wrapper>
            <Button text='Отправить' isLoading={isLoading} onClick={handleSendClick} />
            <ST.GithubLink>@bonnysid</ST.GithubLink>
            <ST.FormatButton onClick={handleFormatClick}>
                <ST.FormatIcon />
                Форматировать
            </ST.FormatButton>
        </ST.Wrapper>
    );
};

export default Footer;
