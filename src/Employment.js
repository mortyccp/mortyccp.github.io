import React from 'react';
import Section from './components/Section';
import Gallery from './components/Gallery';
import './Employment.css';

function Employment({ employments }) {
  const listItems =
    employments &&
    employments.map(employment => {
      return (
        <div>
          <div className="Employment__Item">
            <a
              className="Employment__Employer"
              target="_blank"
              rel="noopener noreferrer"
              href={employment.url}
            >
              <div>{employment.employer}</div>
            </a>
            <div className="Employment__Position">{employment.position}</div>
            <div className="Employment__Period">{`${employment.start} - ${
              employment.end
            }`}</div>
          </div>
          <Gallery items={employment.projects} />
        </div>
      );
    });

  return <Section title="Employment">{listItems}</Section>;
}

export default Employment;
