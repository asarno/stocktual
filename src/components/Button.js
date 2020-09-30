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
`;

const Button = ({ onClick, opacity }) => {

    return (
        <Container hrefopacity={opacity} onClick={onClick}>
            Contact
        </Container>
    );

}

export default Button;