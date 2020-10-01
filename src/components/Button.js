import React from 'react';
import styled from '@emotion/styled';

const Container = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border: 1px solid;
    width: 10vw;
    opacity: ${({ opacity }) => opacity};
    margin-top: 3rem;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;

const Button = ({ onClick, opacity, style }) => {

    return (
        <Container style={style} opacity={opacity} onClick={onClick}>
            Contact
        </Container>
    );

}

export default Button;