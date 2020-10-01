import styled from '@emotion/styled';

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem;
    position: absolute;
    top: 10vh;
    width: ${({ width }) => width > 450 ? '70vw' : '90vw'};;
`;

export default TextContainer;