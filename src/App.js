import './App.css';
import React from 'react';
import conceptualIdea_light from './assets/undraw_conceptual_idea_light.svg';
import conceptualIdea_dark from './assets/undraw_conceptual_idea_dark.svg';
import feelingProud_light from './assets/undraw_feeling_proud_light.svg';
import feelingProud_dark from './assets/undraw_feeling_proud_dark.svg';
import onlineResume_light from './assets/undraw_online_resume_light.svg';
import onlineResume_dark from './assets/undraw_online_resume_dark.svg';
import {FaGithub, FaCodepen, FaLinkedin, FaInstagram, FaYoutube, FaMedium, FaSun, FaMoon} from 'react-icons/fa';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      checked: false
    }
  }
  switchTheme = (e) => {
    if(e.target.checked){
      this.setState({checked: true});
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      this.setState({checked: false});
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }
  render(){
    const {checked} = this.state;
    return (
      <div className="App">
      <div className='theme-switch-wrapper'>
        <span id='toggle-icon'>
            <span  className='toggle-text'>{checked ? 'Dark Mode' : 'Light Mode'}</span>
            {
             checked ? <FaMoon className='fas fa-moon'/> : <FaSun className='fas fa-sun'/>
             
            }
          </span>
          <label className='theme-switch'>
            <input onClick={this.switchTheme} type='checkbox'/>
            <div className='slider round'></div>
          </label>
  
      </div>
      <nav className='nav' style={{backgroundColor: checked ?  'rgb(0 0 0 / 50%)' : ''}}>
        <a href='#home'>HOME</a>
        <a href='#about'>ABOUT</a>
        <a href='#projects'>PROJECTS</a>
        <a href='#contact'>CONTACT</a>
      </nav>
        <section className='home' id='home'>
          <div className='title-group'>
            <h1>Light / Dark Mode Theme</h1>
            <h2>Welcome to the Website</h2>
          </div>
        </section>
        <section className='about' id='about'>
            <h1>Undraw Illustrations</h1>
            <div className='about-container'>
              <div className='image-container'>
                <h2>High Concept</h2>
                {
                  checked 
                  ?<img src={conceptualIdea_dark} alt='Conceptual Idea' img='image1' />
                  :<img src={conceptualIdea_light} alt='Conceptual Idea' img='image1' />

                }
                
              </div>
              <div className='image-container'>
                <h2>Problem Solving</h2>
                {
                  checked 
                  ?<img src={feelingProud_dark} alt='Feeling Proud' img='image2' />
                  :<img src={feelingProud_light} alt='Feeling Proud' img='image2' />
                }
              </div>
              <div className='image-container'>
                <h2>Web Innovation</h2>
                {
                  checked 
                  ?<img src={onlineResume_dark} alt='Online Resume' img='image3' />
                  :<img src={onlineResume_light} alt='Online Resume' img='image3' />
                }
                
              </div>
            </div>
        </section>
        <section className='projects' id='projects'>
            <h1>Buttons</h1>
            <div className='buttons'>
              <button className='primary'>Primary</button>
              <button className='secondary'>Secondary</button>
              <button className='primary' disabled>Disabled</button>
              <button className='outline'>Outline</button>
              <button className='secondary outline'>Alt Outline</button>
              <button className='outline' disabled>Disabled</button>
            </div>
            <div className='text-box'>
              <p style={{color: checked ?  'white' : ''}}>Nisi ipsum amet magna nisi sint dolor elit in Lorem. Do irure deserunt Lorem pariatur anim. Officia reprehenderit consectetur laboris occaecat cupidatat occaecat irure occaecat ea aute sit.</p>
            </div>
        </section>
        <section className='contact' id='contact'>
            <h1>Contact</h1>
            <div className='social-icons'>
               <FaGithub className='icons github'  style={{color: checked ?  'white' : ''}}/>
               <FaCodepen className='icons codepen' style={{color: checked ?  'white' : ''}}/>
               <FaLinkedin className='icons linkedin'/>
               <FaInstagram className='icons instagram'/>
               <FaYoutube className='icons youtube' style={{color: checked ?  'rgb(255, 92, 92)' : ''}}/>
               <FaMedium className='icons medium'/>
            </div>
        </section>
      </div>
    );
  }
}

export default App;
