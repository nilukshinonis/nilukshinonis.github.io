import React from 'react';

import Layout from '../components/Layout';
import project_govi_mithuru_image from '../assets/images/project_govi_mithuru.png';
import project_viyana_image from '../assets/images/project_viyana.png';
import project_cover_me_image from '../assets/images/project_cover_me.png';
import project_halo_image from '../assets/images/project_halo.png';
import project_plasticcycle_image from '../assets/images/project_plasticycle.png';
import project_atlas_bottle_image from '../assets/images/project_atlas_bottle.png';


const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Projects</h2>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <p>
            My mantra in design is to always get the research on point.
            I have switched between the roles of Industrial, Interior,
            UX and UI designer and can seamlessly navigate between design tools, teams,
            and disciplines.
          </p>
          <p>
          Design to me is a never ending process that can be addictive.
          Happiness to me comes when I see my designs being used by others with a smile on their face.
          </p>
          <p>
            I take pride in all the projects 
            I have done and consider them to be a mural of the power of collaboration between different disciplines coming together in design.
          </p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={project_govi_mithuru_image} alt="" />
              </a>
              <h3 className="major">Govi Mithuru Service App</h3>
              <p>
                'Govi Mithuru' (ගොවි මිතුරු) service app, is a mobile advisory service for farmers and home growers in Sri Lanka.
                The app provides customized and timely advice to farmers regarding land preparation, cultivation, crop protection, harvest
                and improved family nutrition.
              </p>
              <a href="/#" className="special">
                See more about Govi Mithuru
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={project_viyana_image} alt="" />
              </a>
              <h3 className="major">Viyana Quick Shade</h3>
              <p>
                ‘Viyana’ (වියන) quick shade is a weather protection device for males in Sri Lanka that feels masculine,
                is easy to use and provides quick cover and immediately dries after use.
              </p>
              <a href="/#" className="special">
                See more about Viyana Quickshade
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={project_cover_me_image} alt="" />
              </a>
              <h3 className="major">Cover Me App</h3>
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
                <img src={project_halo_image} alt="" />
              </a>
              <h3 className="major">Mommy Halo </h3>
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
                <img src={project_plasticcycle_image} alt="" />
              </a>
              <h3 className="major">Plasticcycle</h3>
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
                <img src={project_atlas_bottle_image} alt="" />
              </a>
              <h3 className="major">Atlas Water Bottles</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
