import styled from '@emotion/styled';

const Text = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 1rem;
    font-size: ${({ size }) => size || '1rem'};
    opacity: ${({ opacity }) => opacity || 0};
`;

export default Text;