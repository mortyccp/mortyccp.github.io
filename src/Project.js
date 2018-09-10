import React from 'react';
import Section from './components/Section';
import Gallery from './components/Gallery';

function Project({ projects }) {
  return (
    <Section title="Project">
      <Gallery items={projects} />
    </Section>
  );
}

export default Project;
