import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Spring } from 'react-spring/renderprops';
import { useSpring, animated } from 'react-spring';

import splash from './assets/img/splash.png';
import homeHidden from './assets/img/home-hidden.png';
import homeShow from './assets/img/home-show.png';
import slate from './assets/img/slate.png';

function Wimble() {
  return (
    <svg className="Wimble" width="45" height="45" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0)">
        <path d="M83.1389 61.0606C79.1326 52.067 75.398 34.2983 65.126 30.3471C51.8995 25.2614 43.7233 58.5571 41.7753 66.9697H39.8056C36.4709 52.5555 31.9957 32.1258 16.1692 27.5758C8.84195 58.3503 23.8235 91.5496 37.8359 118.182C52.7977 111.032 60.0876 88.6403 61.4723 72.8788H63.4419L79.1995 120.152C91.8765 116.508 96.2866 103.963 100.864 92.5758C110.691 68.1358 118.936 38.0782 112.682 11.8182C93.7654 17.1758 88.01 44.2295 83.1369 61.0606H83.1389ZM-105.954 124.091C-89.0224 116.007 -80.9664 90.4209 -78.3782 72.8788H-76.4085C-74.4033 81.3347 -69.0477 103.149 -58.4843 104.55C-45.0214 106.33 -37.964 76.4617 -37.0146 66.9697H-35.0449C-30.7509 81.7996 -26.2285 101.085 -11.4085 108.333C-5.93865 85.3667 -12.4859 60.8735 -20.8847 39.3939C-23.0435 33.8709 -27.4773 18.98 -35.0921 18.98C-47.5682 18.98 -54.5823 51.8661 -56.7096 61.0606H-58.6793L-74.4368 13.7879C-102.154 27.0242 -117.211 97.4074 -105.952 124.091H-105.954ZM-135.497 147.727C-114.928 237.449 -20.0496 288.312 65.4116 250.423C96.5132 236.634 121.188 212.064 135.413 181.212C139.088 173.241 146.305 158.813 142.098 148.354C137.906 137.936 97.2538 154.958 87.096 159.404C86.394 159.715 85.7819 160.199 85.3156 160.81C84.8496 161.42 84.5447 162.138 84.4291 162.898C84.2638 163.979 84.3235 165.083 84.6044 166.14C84.8855 167.197 85.3818 168.185 86.0623 169.041C86.7427 169.897 87.5928 170.604 88.5589 171.116C89.5253 171.629 90.5869 171.936 91.6776 172.02L108.745 173.333C77.8463 233.143 -5.69638 259.588 -64.5883 211.805C-77.7696 201.112 -89.5287 188.405 -97.4429 173.333C-101.27 166.045 -104.819 156.725 -111.325 151.724C-117.575 146.918 -127.057 145.271 -135.497 147.727Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="130" height="130" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

function App() {
  const [hidden, setHidden] = useState(true);
  const fadeIn = useSpring({
    from: {
      opacity: 0,
      position: 'absolute',
      left: 0,
    },
    to: {
      opacity: !hidden ? 1 : 0,
    },
  });
  return (
    <div className="App">
      <Wimble />
      <section className="App_section-1">
      <img className="application" src={splash} />
        <div className="App_text">
          <h2>Wimble</h2>
          <span className="subheading">Wallet reinvented for Grin.</span>
          <p>
            Grin does not have addresses built-in which makes transacting
            more convoluted. Thus, Wimble takes a new approach by only
            supporting file- and text (base64) based transactions coupled
            together with an intuitive interface.
          </p>
          <p>
            Send- and receive Grin by simply copy-pasting strings through your favourite messaging app.
          </p>
        </div>
        {/*<div className="App_content" style={{ display: 'flex' }}></div>*/}
      </section>
      <section className="App_section-2">
        <div
          style={{ position: 'relative' }}
          onMouseEnter={() => setHidden(false)}
          onMouseLeave={() => setHidden(true)}
        >
          <animated.img className="application" src={homeHidden} />
          <animated.img  style={fadeIn} className="application" src={homeShow} />
        </div>
        <div className="App_text">
          <h2>Hide your values</h2>
          <span className="subheading">Blur and unblur by hovering/clicking.</span>
          <p>
            Wimble aims to be a rendition of how a Grin wallet should be.
            Careful about privacy and transparent about what it's doing.
          </p>
          <p>
            Similar to the Grin TUI, Wimble shows stats about the node that's running
            inside the wallet.
          </p>
        </div>
        {/*<div className="App_content" style={{ display: 'flex' }}></div>*/}
      </section>
      <section className="App_section-3">
        <img className="application" src={slate} />
        <div className="App_text">
          <h2>Transactions</h2>
          <span className="subheading">Every transaction is represented as a card.</span>
          <p>
            Wimble's core design is based on the idea that every transcation is a card.
            As every transaction have their own respective transaction slate, it makes sense
            to show it as a module inside the card rather than decoupling them.
          </p>
          <p>
            Detailed information about a transaction can be seen by pressing the three dots.
          </p>
        </div>
        {/*<div className="App_content" style={{ display: 'flex' }}></div>*/}
      </section>
    </div>
  );
}
ReactDOM.render(<App/>, document.getElementById('root'));
