import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';

import icon from '../assets/images/website-icon.png';

import config from '../../config';

const noniscooks = 'https://www.instagram.com/noniscooks/';
const nn_handmadefabric = 'https://www.instagram.com/nn_handmadefabric/';

const IndexPage = props => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <img className="icon" src={icon} alt="" />
        </div>
        <h2>{config.heading}</h2>
        {/* <p>{config.subHeading}</p> */}
        <p id="fade-in-container">
          <span class="fade-in-text">Product Designer</span>
          <span class="fade-in-text">User Experience Designer</span>
          <span class="fade-in-text">Entrepreneur</span>
        </p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <Link to="/projects" className="image">
            <Img fluid={props.data.frame_2.childImageSharp.fluid} />
          </Link>
          <div className="content">
            <h2 className="major">I think</h2>
            <p>
              Design has to be honest, delightful and sustainable
            </p>
            <Link to="/projects" className="special">
              See my work
            </Link>
          </div>
        </div>
      </section>
      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <Link to="/about" className="image">
            <Img fluid={props.data.frame_1.childImageSharp.fluid} />
          </Link>
          <div className="content">
            <h2 className="major">I love to explore</h2>
            <p>Some call me ‘Pettah Ferret’.</p>
            <Link to="/about" className="special">
              Know about me
            </Link>
          </div>
        </div>
      </section>
      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <Link to="/about" className="image">
            <Img fluid={props.data.frame_3.childImageSharp.fluid} />
          </Link>
          <div className="content">
            <h2 className="major">When I don’t have my design cap on</h2>
            <p>
              I{' '}
              <a href={noniscooks} target="_blank" rel="noopener noreferrer">
                cook
              </a>{' '}
              , knit, sew, lecture and even have my own{' '}
              <a
                href={nn_handmadefabric}
                target="_blank"
                rel="noopener noreferrer"
              >
                tie and dye brand
              </a>
              .
            </p>
            <Link href="/about" className="special">
              Contact me
            </Link>
          </div>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    frame_1: file(relativePath: { eq: "frame_1.png" }) {
      ...fluidImage
    }
    frame_2: file(relativePath: { eq: "frame_2.png" }) {
      ...fluidImage
    }
    frame_3: file(relativePath: { eq: "frame_3.png" }) {
      ...fluidImage
    }
  }
`;
