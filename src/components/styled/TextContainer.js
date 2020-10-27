import styled from '@emotion/styled';

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    padding: 1rem;
    top: 10vh;
    width: ${({ width }) => width > 450 ? '70vw' : '90vw'};
`;

export default TextContainer;