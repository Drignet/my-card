import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import drig from './images/drig.jpeg';
import twitter from './images/twitter.svg';
import linkedin from './images/linkedin.svg';
import github from './images/github.svg';
import youtube from './images/youtube.svg';

const Photo = (props) => {
  return (
    <figure className='photo'>
      <img src={props.drig} width='300' height='300' alt='drignet' />
      <figcaption></figcaption>
    </figure>
  )
}

const Header = (props) => {
  return (
    <header className='header'>
      <h1>{props.fullName}</h1>
      <h3>{props.whoAm}</h3>
      <small>{props.website}</small>
    </header>
  )
}

const Contacts = (props) => {
  return(
    <div className='buttons'>
      <button className='email'><span>{props.emailIcon}</span>Email</button>
      <button className='linkedin'><span>{props.linkedinIcon}</span>Linkedin</button>
    </div>
  )
}

const Main = (props) => {
  return (
    <div className='main'>
      <div className='about'>
        <h4>{props.aboutHeading}</h4>
        <p>{props.aboutText}</p>
      </div>

  <div className='interests'>
  <h4>{props.interestsHeading}</h4>
  <p>{props.interestsText}</p>
  </div>
</div>
  )
}

const Footer = (props) => {
  return (
    <footer className='footer'>
      <div className='footIcons'>{props.img}</div>
      
    </footer>
  )
}

const App = () => {
  const fullName = 'Odibe Drignet'
  const whoAm = 'Developer'
  const website = 'drignet.blockchain'

  const aboutHeading = 'About'
  const aboutText = `I am outgoing, dedicated, and open-minded. I get across to people and adjust to changes with ease. I believe that a person should work on developing their professional skills and learning new things all the time. 
  `
  const interestsHeading = 'Interests'
  const interestsText = `Let's be honest, if you boil down your passions into a single word, they become a yawn fest.
  `
  const img = [twitter , linkedin , github , youtube].map((img) => <img src={img} alt='social icon' width='40' height='40' key={img} />)

  return (
    <div className='wrapper'>
      <Photo 
        drig = {drig}
      />

      <Header 
        fullName = {fullName}
        whoAm = {whoAm}
        website = {website}
      />

      <Contacts 
      
      />

<Main
  aboutHeading = {aboutHeading}
  aboutText = {aboutText}
  interestsHeading = {interestsHeading}
  interestsText = {interestsText}
/>

<Footer 
  img = {img}
/>
    </div>

  )
}

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);