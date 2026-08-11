import { useState } from 'react'
import MutifacetedMe from './assets/MutifacetedMe.png'
import MeLogo from './assets/MeLogo.png'
import Multifaceted from './assets/Multifaceted.png'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [countdown, setCountdown] = useState(null)

  const ClosePage = () => { 
    let seconds = 5 
    setCountdown(seconds) 
    const timer = setInterval(() => { seconds-- 
      setCountdown(seconds) 
      if (seconds <= 0) { 
        clearInterval(timer) 
        window.close() 
      } }, 1000) }

     

  return (
    <>
      <section id="center">
        <div className="hero">
          {/* <img src={heroImg} className="base" width="170" height="179" alt="" /> */}
          <img src={MutifacetedMe} className="mutifaceted" alt="Mutifaceted Me" width="700"  height="400" />
         
        </div>
        <div>
          <h1>Multifaceted Me</h1>
          <p>
           Meet me <code>Versatility</code> <code>Potential</code> <code>Identity</code> <code>Becoming</code> <code>Ambition</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          // onClick={() => setCount((ClosePage) => ClosePage + 1)}]
          onClick={ClosePage}>
            Don't Click Me! {countdown !== null ? `Closing in ${countdown} seconds...` : ''}
        </button>
        
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>My Journey Documented</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://portfolio-website-kdv3rl9lh-hakeemtbs-projects.vercel.app/" target="_blank">
                <img className="logo" src={MeLogo} alt="" />
                Explore My Work
              </a>
            </li>
            <li>
              <a href="https://github.com/HakeemTB" target="_blank">
                <img className="button-icon" src={Multifaceted} alt="" />
                See more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            
          </svg>
          <h2>Don't Talk to Me</h2>
          <p>But if you insist...🤦‍♂️</p>
          <ul>
            <li>
              <a href="https://github.com/hakeemTB" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                My GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/hakeem-tony-ben-916061355/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#linkedin-icon"></use>
                </svg>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

// function ClosePage() {
//   window.close();
// }
// function CountDown() {
//   if (addEventListener.onClick) {
//     setCount(count - 1);
//   } else {
//     window.close();
//   }

// }

export default App
