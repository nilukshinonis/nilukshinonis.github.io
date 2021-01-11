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
            My mantra in design is to always get the research on point. I have
            switched between the roles of Industrial, Interior, UX and UI
            designer and can seamlessly navigate between design tools, teams,
            and disciplines.
          </p>
          <p>
            Design to me is a never ending process that can be addictive.
            Happiness to me comes when I see my designs being used by others
            with a smile on their face.
          </p>
          <p>
            I take pride in all the projects I have done and consider them to be
            a mural of the power of collaboration between different disciplines
            coming together in design.
          </p>
          <section className="features">
            <article>
              <a href="/projects/govi-mithuru" className="image">
                <img src={project_govi_mithuru_image} alt="Govi Mithuru App" />
              </a>
              <a href="/projects/govi-mithuru">
                <h3 className="major">Govi Mithuru Service App</h3>
              </a>
              <p>
                'Govi Mithuru' (ගොවි මිතුරු) service app, is a mobile advisory
                service for farmers and home growers in Sri Lanka. The app
                provides customized and timely advice to farmers regarding land
                preparation, cultivation, crop protection, harvest and improved
                family nutrition.
              </p>
              <a href="/projects/govi-mithuru" className="special">
                See more about Govi Mithuru
              </a>
            </article>
            <article>
              <a href="/projects/viyana-quick-shade" className="image">
                <img src={project_viyana_image} alt="Viyana Quick Shade" />
              </a>
              <a href="/projects/viyana-quick-shade">
                <h3 className="major">Viyana Quick Shade</h3>
              </a>
              <p>
                ‘Viyana’ (වියන) quick shade is a weather protection device for
                males in Sri Lanka that feels masculine, is easy to use and
                provides quick cover and immediately dries after use.
              </p>
              <a href="/projects/viyana-quick-shade" className="special">
                See more about Viyana Quickshade
              </a>
            </article>
            <article>
              <a href="/projects/cover-me" className="image">
                <img src={project_cover_me_image} alt="Cover Me App" />
              </a>
              <h3 className="major">Cover Me App</h3>
              <p>
                ‘CoverMe’ is a mobile app for a Sri Lankan youth who forgets
                their umbrella. The app enables them to rent an umbrella and
                never worry about bad weather again.
              </p>
              <a href="/projects/cover-me" className="special">
                See more about the Cover Me App
              </a>
            </article>
            <article>
              <a href="/projects/mommy-halo" className="image">
                <img src={project_halo_image} alt="Mommy Halo" />
              </a>
              <h3 className="major">Mommy Halo </h3>
              <p>
                Mommy Halo is a donut shaped iPad holder for pregnant mothers to
                safely and comfortably rest a tablet, on their pregnant belly.
              </p>
              <a href="/projects/mommy-halo" className="special">
                See more about Mommy Halo
              </a>
            </article>
            <article>
              <a href="/projects/plastic-cycle" className="image">
                <img src={project_plasticcycle_image} alt="Plastic-cycle" />
              </a>
              <h3 className="major">Plastic-cycle</h3>
              <p>
                Plastic-cyle bin is a plastic collector that is placed all over
                Sri Lanka in the hope of collecting and recycling plastics. The
                bin not only has been an icon and internal tool for the John
                Keells group plastic reduction and recycling initiative,but
                helps create new consumer behaviour.
              </p>
              <a href="/projects/plastic-cycle" className="special">
                See more about Plastic-cycle
              </a>
            </article>
            <article>
              <a href="/projects/atlas-waterbottle" className="image">
                <img
                  src={project_atlas_bottle_image}
                  alt="Atlas Water Bottles"
                />
              </a>
              <h3 className="major">Atlas Water Bottles</h3>
              <p>
                Atlas water bottles are the first mass scale locally designed
                and manufactured bottles in Srilanka that's fun and sporty,
                encouraging kids to drink more water.
              </p>
              <a href="/projects/atlas-waterbottle" className="special">
                See more about Atlas Water Bottles
              </a>
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
