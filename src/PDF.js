import React from 'react';
import resume from './resume';
import './PDF.css';

function PDF() {
  return (
    <div className="PDF">
      <div className="PDF__Header">
        <div className="PDF__HeaderName">{resume.fullname}</div>
        <div className="PDF__HeaderTitle">{resume.title}</div>
        <div className="PDF__HeaderInfo">
          <div className="PDF__Text">Website: {resume.website}</div>
          <div className="PDF_Text">Phone: {resume.phone}</div>
          <div className="PDF__Text">Email: {resume.email}</div>
        </div>
      </div>
      <div className="PDF__Section">
        <div className="PDF__SectionHeader">Employment</div>
        {resume.employments.map(employment => {
          return (
            <div className="PDF__Content">
              <div className="PDF__Title">{employment.employer}</div>
              <div className="PDF__Subtitle">{employment.position}</div>
              <div className="PDF__Period">{`${employment.start} - ${
                employment.end
              }`}</div>
              <ul className="PDF__List">
                {employment.highlights.map(highlight => (
                  <li className="PDF__Text">{highlight}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="PDF__Section">
        <div className="PDF__SectionHeader">Project</div>
        {resume.projects.map(project => {
          return (
            <div className="PDF__Content">
              <div className="PDF__Title">{project.title}</div>
              <div className="PDF__Text">{project.description}</div>
              <div className="PDF__Text">{project.url}</div>
            </div>
          );
        })}
      </div>
      <div className="PDF__Section">
        <div className="PDF__SectionHeader">Education</div>
        {resume.educations.map(education => {
          return (
            <div className="PDF__Content">
              <div className="PDF__Title">{education.institution}</div>
              <div className="PDF__Subtitle">{education.title}</div>
              <div className="PDF__Period">{`${education.start} - ${
                education.end
              }`}</div>
            </div>
          );
        })}
      </div>
      <div className="PDF__Section">
        <div className="PDF__SectionHeader">Skill</div>
        <div className="PDF__Content">
          {resume.skills.map(skill => {
            return <div className="PDF__Chip">{skill}</div>;
          })}
        </div>
      </div>
      <div className="PDF__Section">
        <div className="PDF__SectionHeader">Language</div>
        <div className="PDF__Content">
          {resume.languages.map(language => {
            return <div className="PDF__Chip">{language.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default PDF;
