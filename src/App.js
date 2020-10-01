import React from 'react';
import Title from './components/Title';

import {
  MainContainer,
  TextContainer,
  Text,
} from './components/styled';

import Button from './components/Button';

import { useWindowSize } from './hooks/useWindowSize';
import useWindowScrollPosition from "@rehooks/window-scroll-position";

function App() {
  const { y } = useWindowScrollPosition();
  const { width } = useWindowSize();
  const currentPosition = y;

  // const [isContact, setIsContact] = useState(false);

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
      
        </TextContainer>
          <img style={{ width: '10vw', position: 'absolute', bottom: '5rem', right: '5rem' }} alt="period" src={require('./assets/paint.png')} />
      {/* {isContact && <Contact />} */}

      <span style={{ position: 'absolute', bottom: '1rem', color: '#0f17475e'}}>website in progress..</span>

    </MainContainer>
  );
}

export default App;
