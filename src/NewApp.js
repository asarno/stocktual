import lerp from "lerp"
import React, { Suspense, useRef, useEffect } from "react"
import { Canvas, Dom, useFrame, useLoader } from "react-three-fiber"
import { TextureLoader, LinearFilter } from "three"
import { Block, useBlock } from "./blocks"
import state from "./state"
import "./CustomMaterial"
import { Text } from './components/Text';

function Plane({ color = "white", map, ...props }) {
  const { viewportHeight, offsetFactor } = useBlock()
  const material = useRef()
  let last = state.top.current
  useFrame(() => {
    const { pages, top } = state
    material.current.scale = lerp(material.current.scale, offsetFactor - top.current / ((pages - 1) * viewportHeight), 0.1)
    material.current.shift = lerp(material.current.shift, (top.current - last) / 150, 0.1)
    last = top.current
  })
  return (
    <mesh {...props}>
      <planeBufferGeometry attach="geometry" args={[1, 1, 32, 32]} />
      <customMaterial ref={material} attach="material" color={color} map={map} />
    </mesh>
  )
}

function Content({ left, children, map }) {
  const { contentMaxWidth, canvasWidth, margin } = useBlock()
  const aspect = 1.75
  const alignRight = (canvasWidth - contentMaxWidth - margin) / 2
  return (
    <group position={[alignRight * (left ? -1 : 1), 0, 0]}>
      <Plane scale={[contentMaxWidth, contentMaxWidth / aspect, 1]} color="#bfe2ca" map={map} />
      {children}
    </group>
  )
}

function Stripe() {
  const { contentMaxWidth } = useBlock()
  return <Plane scale={[100, contentMaxWidth, 1]} rotation={[0, 0, Math.PI / 4]} position={[0, 0, -1]} color="#e2dddd" />
}

function Pages() {
  const textures = useLoader(TextureLoader, state.images)
  // eslint-disable-next-line
  const [img1, img2, img3] = textures.map(texture => ((texture.minFilter = LinearFilter), texture))
  const { contentMaxWidth, mobile } = useBlock()
  const aspect = 1.75
  const pixelWidth = contentMaxWidth * state.zoom
  return (
    <>
      <Block factor={1} offset={0}>
        <Block factor={1.2}>
          <Text left size={contentMaxWidth * 0.08} position={[-contentMaxWidth / 1.5, 0.5, -1]} color="#44496C">
            Stocktual.
          </Text>
        </Block>
        <Block factor={1.0}>
          <Dom position={[-contentMaxWidth / 1.5, -0.5, -1]}>/Staak-CHo͞oəl/</Dom>
        </Block>
        <Block factor={1.0}>
          <Dom position={[-contentMaxWidth / 1.5, -1, -1]}>(adjective): a phrase used to describe a commercial that compares {mobile ? <br /> : " "}premium stock footage,<br /> width clever writing, voice acting, and editing.</Dom>
        </Block>
        <Block factor={1.0}>
          <Dom position={[-contentMaxWidth / 1.5, -2, -1]}>(noun): ...us.</Dom>
        </Block>
      </Block>

      {/* First section */}
      <Block factor={1.5} offset={1}>
        <Dom position={[-contentMaxWidth / 1.33, contentMaxWidth / 1.3 / aspect, 1]}>
          <h1>The Formula</h1>
        </Dom>
        <Content left map={img1}>
          <Dom style={{ width: pixelWidth / (mobile ? 1 : 2), textAlign: "left" }} position={[-contentMaxWidth / 2, -contentMaxWidth / 2 / aspect - 0.4, 1]}>
            <span>Brands need clever and engaging ads in order to get their message out to the world. Unfortunately, current events make it difficult, expensive, and often impossible to generate new video content. The solution? Generate beautiful,smart, and engaging commercials with the highest quality stock footage, voiceover, and pre-mixed soundtracks available.</span>
          </Dom>
        </Content>
      </Block>

      {/* Second section */}
      <Block factor={2.0} offset={2}>
      <Dom position={[contentMaxWidth / 6, contentMaxWidth / 1.3 / aspect, 1]}>
          <h1>Their Stock vs. our Stock</h1>
        </Dom>
        <Content map={img2}>
          <Dom style={{ width: pixelWidth / (mobile ? 1 : 2), textAlign: "right" }} position={[mobile ? -contentMaxWidth / 2 : 0, -contentMaxWidth / 2 / aspect - 0.4, 1]}>
            We’ve spent the last year cultivating a massive library of high-quality, RAW 4K footage. This is not that silly low-effort stock footage you’re used to seeing. Say goodbye to those dorky clips of overenthusiastic families dancing in front of white backdrops. We have access to footage that looks like it was shot with intention (because it was). Our footage is cohesive, powerful, and cinematic.
          <br />
            <br />
          When you combine this with our incredible voiceover talent, experienced editorial and finishing staff, and accomplished comedy writers, you will not be able to tell that your ad uses stock footage at all.
          </Dom>
        </Content>
      </Block>

      {/* Stripe */}
      <Block factor={-1.0} offset={1}>
        <Stripe />
      </Block>
      {/* Last section */}
      <Block factor={1.5} offset={3}>
        <Content left map={img3}>
          <Block factor={-0.5}>
            {/* <Cross /> */}
          </Block>
          <Dom prepend style={{ width: pixelWidth / (mobile ? 1 : 2), textAlign: "left" }} position={[-contentMaxWidth / 2, -contentMaxWidth / 2 / aspect - 0.4, 1]}>
            Education and enlightenment.
          </Dom>
        </Content>
      </Block>
    </>
  )
}

function Startup() {
  const ref = useRef()
  useFrame(() => (ref.current.material.opacity = lerp(ref.current.material.opacity, 0, 0.025)))
  return (
    <mesh ref={ref} position={[0, 0, 200]} scale={[100, 100, 1]}>
      <planeBufferGeometry attach="geometry" />
      <meshBasicMaterial attach="material" color="#dfdfdf" transparent />
    </mesh>
  )
}

function NewApp() {
  const scrollArea = useRef()
  const onScroll = e => (state.top.current = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])
  return (
    <>
      <Canvas className="canvas" orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
        <Suspense fallback={<Dom center className="loading" children="Loading..." />}>
          <Pages />
          <Startup />
        </Suspense>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${state.pages * 100}vh` }} />
      </div>
    </>
  )
}

export default NewApp;