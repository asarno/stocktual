import React from 'react';
import Title from './components/Title';

import {
  MainContainer,
  TextContainer,
  Text,
  FlexColumn,
} from './components/styled';

import Button from './components/Button';
import Page from './components/Page';
import { pages } from './data';
import Videos from './components/Videos';

import { useWindowSize } from './hooks/useWindowSize';
import useWindowScrollPosition from "@rehooks/window-scroll-position";

function App() {
  const { y } = useWindowScrollPosition();
  const { width } = useWindowSize();
  const currentPosition = y;

  return (
    <MainContainer>
      <TextContainer width={width}>
        <Title currentPosition={currentPosition} />
        <Text
          opacity={1}
          style={{
            maxWidth: '30vw',
          }}
        >
          (adjective): a word used to describe a commercial that pairs premium, high quality, existing stock footage with clever, biting, comedic writing, voice acting, and editing.
          </Text>
        <Text
          opacity={1}
        >
          (noun): ...us.
          </Text>
        <Button style={{ position: 'relative', left: '1rem' }} opacity={1} onClick={() => window.location.replace("mailto:austin.kolodney@gmail.com?subject=Stocktual%20Inquiry")} />
        <img style={{ width: '10vw', position: 'absolute', bottom: '5rem', right: '5rem' }} alt="period" src={require('./assets/paint.png')} />
      </TextContainer>

        <FlexColumn style={{ marginTop: 400 }}>
          {pages.map((page, i) => <Page key={i} {...page} />)}
          <Videos />
        </FlexColumn>

    </MainContainer>
  );
}

export default App;
