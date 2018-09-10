import React from 'react';
import Section from './components/Section';
import './Education.css';

function Education({ educations }) {
  const listItems =
    educations &&
    educations.map(education => (
      <div className="Education__Item">
        <div className="Education__Institution">{education.institution}</div>
        <div className="Education__Title">{education.title}</div>
        <div className="Education__Period">{`${education.start} - ${
          education.end
        }`}</div>
      </div>
    ));
  return <Section title="Education">{listItems}</Section>;
}

export default Education;
