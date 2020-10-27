import React from 'react';
import styled from '@emotion/styled';
import ReactPlayer from 'react-player';
import { videos } from '../data';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    cursor: pointer;
    width: 80vw;
    height: 1000px;
    margin-top: 400px
`;

const Title = styled.span`
    font-size: 4rem;
    margin-bottom: 2rem;
    font-weight: 600;
`;

const VideoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
`;

const Videos = () => {
    return (
        <Container 
            id="our-work"
        >
            <Title>Our·Work</Title>
            
                <VideoContainer>
                    {videos.map((url, i) => 
                            <ReactPlayer 
                                url={url}
                                key={i}
                                vimeoConfig={{ iframeParams: { fullscreen: 0 } }}
                                style={{ width: '10vw' }}
                                config={{
                                    vimeo: {
                                        playsInLine: false,
                                    }
                                }}
                                width={400}
                            />
                    )}
                </VideoContainer>
        </Container>
    );
}

export default Videos;