import React from 'react';
import styled from '@emotion/styled';
import { useWindowSize } from '../hooks/useWindowSize';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

const Main = styled.span`
    overflow: hidden;
    padding: 1rem;
    padding-bottom: 0px;
    font-size: ${({ width }) => width > 750 ? '5rem' : '3rem'};
    cursor: pointer;
    transition: all .2s ease-in-out;
    font-weight: 400;

    &:hover {
        transform: scale(1.1);
    }
`;

const Secondary = styled.span`
    overflow: hidden;
    padding: 1rem;
    padding-top: 0px;
    font-size: 2rem;
    cursor: pointer;
    opacity: ${({ opacity }) => opacity};
`;

const Title = ({ currentPosition }) => {
    const { width } = useWindowSize();
    const opacity = currentPosition / 116;

    return (
        <Container width={width}>
            <Main width={width}>STOCKTUAL</Main>
            <Secondary opacity={opacity}>/Staak-CHo͞oəl/</Secondary>
        </Container>
    )
}


export default Title;