import React from 'react';

import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import cv from '../../static/CV_Nilukshi_Nonis_202306.pdf';

const cvStyle = {
  color: '#f28580',
};

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>About Me</h2>
          <p>
            I Explore, Conceptualize, Experiment and Implement Physical and
            Digital Experiences
          </p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <p>
            I am a seasoned industrial designer who graduated in Product Design
            (first class with a gold medal; cough!)
          </p>

          <p>
            I have worked with multiple companies collaborating with Architects,
            Researchers, Engineers, Managers and many professionals for four
            plus years.
          </p>
          <p>
            I am called ‘Pettah Ferret’ because in my previous job at Colombo
            Design Studio I was sent on missions to a city called Pettah in Sri
            Lanka where I searched every nook and corner and found what we
            needed. I can basically get things done.
          </p>
          <p>
            Check out my{' '}
            <a href={cv} target="_blank" rel="noopener noreferrer">
              <span style={cvStyle}>CV</span>
            </a>{' '}
            to know more about me.
          </p>
        </div>
      </div>
      <ContactForm />
    </section>
  </Layout>
);

export default IndexPage;
