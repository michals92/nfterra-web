import * as React from "react"
import './index.css';

function openLightpaper() {
  const url = './lightpaper.pdf';
  window.open(url);
}

function openDiscord() {
  const url = 'https://discord.gg/PaF6wqVv76';
  window.open(url);
}

function openTelegram() {
  const url = 'https://t.me/+FF8S6LWeJNI3Mzg0';
  window.open(url);
}

function sendEmail() {
  var mail = 'mailto:info@codeers.cz';
  var a = document.createElement('a');
  a.href = mail;
  a.click();
};

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
            <button id="getintouch" onClick={sendEmail}>Contact us</button>
            
            <div id="socials">
              <button id="discord" onClick={openDiscord}/>
              <button id="telegram" onClick={openTelegram}/>
            </div>
          </div>
          <div id="right-side">
             
          </div>
        </div>
        <div id="footer">
          <a href="https://www.codeers.cz">© 2022 codeers</a>
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