import React from 'react';
import Card from './Card';
import './Section.css';

const Section = ({ title, children }) => (
  <Card className="Section">
    <header className="Section__Header">{title}</header>
    <div className="Section__Content">{children}</div>
  </Card>
);

export default Section;
