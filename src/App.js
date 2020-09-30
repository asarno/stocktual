import React, { useState } from 'react';
import Title from './components/Title';

import {
  MainContainer,
  TextContainer,
  Text,
} from './components/styled';

import Button from './components/Button';
import Contact from './Contact';

import { useWindowSize } from './hooks/useWindowSize';
import useWindowScrollPosition from "@rehooks/window-scroll-position";

function App() {
  const { y } = useWindowScrollPosition();
  const { width } = useWindowSize();
  const currentPosition = y;

  const [isContact, setIsContact] = useState(false);

  return (
    <MainContainer>
      {!isContact &&
        <TextContainer width={width}>

          <Title currentPosition={currentPosition} />

          <Text
            opacity={currentPosition / 232}
            style={{
              maxWidth: '30vw',
            }}
          >
            (adjective): a word used to describe a commercial that pairs premium, high quality, existing stock footage with clever, biting, comedic writing, voice acting, and editing.
          </Text>

          <Text
            opacity={currentPosition / 348}
          >
            (noun): ...us.
          </Text>

          <Button opacity={currentPosition / 464} onClick={() => setIsContact(true)} />
        </TextContainer>
      }
      
      {isContact && <Contact />}

    </MainContainer>
  );
}

export default App;
