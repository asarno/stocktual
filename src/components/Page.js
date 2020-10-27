import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: ${({ position }) => position === 'left' ? 'flex-start' : position === 'right' ? 'flex-end' : 'center'};
    flex-direction: column;
    padding: 1rem;
    cursor: pointer;
    width: 80vw;
    height: 1000px;
`;

const Title = styled.span`
    font-size: 4rem;
    margin-bottom: 2rem;
    font-weight: 600;
`;

const Paragraph = styled.span`
    margin-bottom: 2rem;
    font-size: 1.5rem;

`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
`;

const Image = styled.img`
    margin: 0.5rem;
    width: 50vh;

`;

const Page = ({ 
    position,
    images, 
    title, 
    paragraphs,
}) => {
    return (
        <Container 
            id={title}
            position={position}
        >
            <Title>{title}</Title>
            
            {images.length > 0 &&
                <ImageContainer>
                    {images.map((src, i) => <Image key={i}  src={src} />)}
                </ImageContainer>
            }

            {paragraphs.map((text, i) => <Paragraph key={i} >{text}</Paragraph>)}

        </Container>
    );
}

export default Page;