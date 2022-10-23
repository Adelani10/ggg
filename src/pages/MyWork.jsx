import React from 'react'
import speedgame from './img/speedgame.png'
import meme from './img/meme.png'
import portifolio from './img/portifolio.png'

export default function MyWork(props) {
  return (
    
        <div className="my-work">
          <div className='speed-typing'>
            <h1 className="work-title">Selection of some of my projects</h1>

          <div>
            <h3 className="subtitle-work">1/3: My Portifolio(Summary)</h3>
              <p>This Project is built on JS Library: React</p>

              <p className='overview'>General Overview</p>
              <p>The built of this project was an on-going project implementing what l learnt from the tutorial and able to use them in my own project. 
                Encampase most of the lessons covered in the <span className='span'>Front End Developer Course</span> from Scrimba. <br/>Built on JS Library <span className='span'>React</span>, some sections covered in 
                this project are but not limited to; Responsive Design, CSS Fundamentals, Javascript Fundermentals, FlexBox, APIs, UI Designs, React Basics, 
                React Hooks, React Router, React Context, React Reusability.   </p>
            
                <ul>
                  <li>Consists of multiple pages bundled in Pages folder named according to functionality in the project </li>
                  <li>Function components used to built project </li>
                  <li>useEffect() Hook to set display of motivational quotes on the page (<span className='span'>to fetch data from an open API outside the boundaries of React</span>)</li>
                  <li>useContext Hook to hold state of all pages that if toggled to switch theme to light or dark mode, should be able to pass the updated State </li>
                  <li>Function to display current updated clock, installed dependencies for live update clock. </li>
                  <li>All Pages linked using <span className='span'>React Router</span> </li>
                  <li>Responsive design - use of Media Queries to enable users to interact withproject on mobile, tablet and computer screen.</li>
                  <li>All social medial components are linked to personal details</li>
                </ul>

              <p className='overview'>Challenges faced during build up;</p>
                  <ul>
                    <li>Understanding hooks, after learning from tutorials it was a bit challenging to implement them in my project, I couldnt master the use of 
                      <span className='span'>dependencies</span> when and which one to be effected</li>
                      <li>Media Queries - took an amount of time to see what l wanted against what the code rendered on page</li>
                      <li>Linking the pages, from the tutorial I used <span className='span'>Router as BrowserRouter</span>, but  the updated version of
                         React Routing had already changed, so it was more of re-doing afresh the whole routing functionality, which also helped me in understanding 
                         them anyway though it was tiring.  </li>
                  </ul>
                
                <p className='overview'>Future Developments:</p>
                  <ul>
                    <li>To improve UX on navbar, need to respond to <span className='span'>mouse movements</span>, l think it will be a great UX.</li>
                    <li>Create some animation or bit of movements on the page its too static and need trigger more attractive interaction - l would think 
                      of a quick quiz interaction or flash puzzle</li>
                    <li>Keep improving the UX</li>
                  </ul>
             <img src={portifolio} alt="" className='my-image'/>
            <a href="https://github.com/Abiton198/my-portifolio" className="work">Github Repo</a>
          </div>


            <h3 className="subtitle-work">2/3: Speed Typing Game (Summary)</h3>
            <p>This Project is built on JS Library: React</p>

            <ul>
              <li>State and the updating of State when typing words</li>
              <li>Function that count words <span className='span'>.trim() </span>= does'nt count spaces when counting words; 
                <span className='span'>.split()</span> = removes spaces in the words; <span className='span'>.filter() </span>= looks only at words not empty strings
              </li>
              <li>useEffect() Hook to set conditional time (start & end) in the game (to fetch data outside the boundaries of React)</li>
              <li>Functions to <span className='span'>Reset Game()</span> = startClock(), setTimeRunning(true), setText(''); </li>
              <li>EndGame() = setTimeRunning(false), SetWortdCount(calculateWord())</li>
              <li>Set up a disabled <span className='span'>Game Button</span> = which only activate when time is running and simultaneously disable with typing screen pad</li>
            </ul>
             <img src={speedgame} alt="" className='my-image'/>
            <a href="https://github.com/Abiton198/speed-typing-game" className="work">Github Repo</a>
          </div>

              <div className='meme'>
                <h3 className="work-title">3/3: Memes Generator (Summary)</h3>
                <p>This Project is built on JS Library: React</p>
              
                <ul>
                    <li>Use of <span className='span'>State</span> to hold a current meme from an API.</li>
                    <li>UseEffect hook with a dependency array[preventing the function to render] to surround an asynchronized function that call memes from an API, and  </li>
                    <li>Used a <span className='span'>Form</span> designed to input text and the Text-area to display the meme from API</li>
                    <li>A Function to <span className='span'>Handle Change </span>so that whe a button is clicked we get a new meme from API and everytime a new input is done a new meme is matched to the input</li>
                    <li>Display random-image function, used <span className='span'>Math.Random(), wrapped in Math.Floor()</span>  to get memes at random from API</li>
      
                </ul>
                <img src={meme} alt="" className='my-image'/>
                <a href="https://github.com/Abiton198/meme-generator" className="work">Github Repo </a>
              </div>
          
        </div>

  )
}
