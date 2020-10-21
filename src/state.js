import { createRef } from "react"

const state = {
  sections: 3,
  pages: 3,
  zoom: 75,
  images: ["/logo.png", "/logo.png", "/logo.png"],
  top: createRef()
}

export default state
