import * as React from "react"
import './index.css';

function openLightpaper() {
  const url = './lightpaper.pdf';
  window.open(url);
}
// markup
const IndexPage = () => {
  return (
    <main>
      <title>NFTerra</title>
      <div id="main">
        <div id="header"/>
        <div id="home-page">
          <div id="left-side">
            <h1>NFTerra</h1>
            <p>An NFT-based game that connects digital art<br />with real places and allows players to explore it.</p>
            <button id="lightpaper" onClick={openLightpaper}>Lightpaper</button>
            <button id="getintouch">Contact us</button>
            
            <div id="socials">
              <button id="discord"/>
              <button id="telegram"/>
            </div>
          </div>
          <div id="right-side">
             
          </div>
        </div>
        <div id="footer">
          © 2021 codeers
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}