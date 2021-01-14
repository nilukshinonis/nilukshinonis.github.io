import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/Layout';

import icon from '../assets/images/website-icon.png';
import frame_1 from '../assets/images/frame_1.png';
import frame_2 from '../assets/images/frame_2.png';
import frame_3 from '../assets/images/frame_3.png';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <img className="icon" src={icon} alt="" />
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <Link to="/about" className="image">
            <img src={frame_1} alt="" />
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

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <Link to="/projects" className="image">
            <img src={frame_2} alt="" />
          </Link>
          <div className="content">
            <h2 className="major">I think</h2>
            <p>
              Design has to be honest, delightful and less impactful to the
              environment.
            </p>
            <Link to="/projects" className="special">
              See my work
            </Link>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <Link to="/about" className="image">
            <img src={frame_3} alt="" />
          </Link>
          <div className="content">
            <h2 className="major">When I don’t have my design cap on</h2>
            <p>
              I cook, knit, sew, lecture and even have my own tie and dye brand.
            </p>
            <Link href="/about" className="special">
              Contact me
            </Link>
          </div>
        </div>
      </section>

      {/* <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Vitae phasellus</h2>
          <p>
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
            Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
            egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
            in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
          </p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Sed feugiat lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Nisl placerat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Ante fermentum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">Fusce consequat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </div>
      </section> */}
    </section>
  </Layout>
);

export default IndexPage;
