import React from 'react';
import cn from 'classnames';
import Card from './components/Card';
import Button from './components/Button';
import Email from './components/Icons/Email';
import Github from './components/Icons/Github';
import StackOverflow from './components/Icons/StackOverflow';
import pdf from './assets/resume.pdf';
import './Hero.css';

function Hero({ name, title, email, profiles, className }) {
  const cls = cn('Hero', className);
  return (
    <Card className={cls}>
      <div className="Hero__Name">{name}</div>
      <div className="Hero__Title">{title}</div>
      <div className="Hero__Profiles">
        {email && (
          <a href={`mailto:${email}`}>
            <Email />
          </a>
        )}
        {profiles.github && (
          <a target="_blank" href={profiles.github} rel="noopener noreferrer">
            <Github />
          </a>
        )}
        {profiles.stackOverflow && (
          <a
            target="_blank"
            href={profiles.stackOverflow}
            rel="noopener noreferrer"
          >
            <StackOverflow />
          </a>
        )}
      </div>
      <div className="Hero__Action">
        <a href={pdf} download="morty-resume.pdf">
          <Button>Download CV</Button>
        </a>
      </div>
    </Card>
  );
}

export default Hero;
