import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from '../components/Layout';
import project_govi_mithuru_image from '../assets/images/project_govi_mithuru.png';
import project_viyana_image from '../assets/images/project_viyana.png';
import project_cover_me_image from '../assets/images/project_cover_me.png';
import project_halo_image from '../assets/images/project_halo.png';
import project_plasticcycle_image from '../assets/images/project_plasticycle.png';
import project_atlas_bottle_image from '../assets/images/project_atlas_bottle.png';
import project_snacker_app_image from '../assets/images/project_snacker.png';
import project_pet_shelter_website_image from '../assets/images/project_petshelter.png';
import project_teenage_finance_app_image from '../assets/images/project_financeapp.png';


const ProjectsPage = props => (
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
              <Link to="/projects/govi-mithuru" className="image">
                <img src={project_govi_mithuru_image} alt="Govi Mithuru App" />
              </Link>
              <Link to="/projects/govi-mithuru">
                <h3 className="major">Govi Mithuru Service App</h3>
              </Link>
              <p>
                'Govi Mithuru' (ගොවි මිතුරු) service app, is a mobile advisory
                service for farmers and home growers in Sri Lanka. The app
                provides customized and timely advice to farmers regarding land
                preparation, cultivation, crop protection, harvest and improved
                family nutrition.
              </p>
              <Link to="/projects/govi-mithuru" className="special">
                See more about Govi Mithuru
              </Link>
            </article>
            <article>
              <Link to="/projects/snacker-app" className="image">
                <img src={project_snacker_app_image} alt="Snacker App" />
              </Link>
              <Link to="/projects/snacker-app">
                <h3 className="major">Snacker App</h3>
              </Link>
              <p>
                ‘Snacker’ is a snack ordering app for movie goers to pre order
                snacks and not wait in ques anymore! It's quick, fun, convenient
                and has the ability to even split the bill among a group.
              </p>
              <Link to="/projects/snacker-app" className="special">
                See more about Snacker app
              </Link>
            </article>
            <article>
              <Link to="/projects/pet-shelter-website" className="image">
                <img
                  src={project_pet_shelter_website_image}
                  alt="Snacker App"
                />
              </Link>
              <Link to="/projects/pet-shelter-website">
                <h3 className="major">Pet Shelter Website</h3>
              </Link>
              <p>
                'Bloop' is a responsive website design for a pet shelter in
                Berlin. The website not only provides information about the
                available animals for adoption but also provides the service to
                fix appointments and fill paperwork at the user's
                convenience.
              </p>
              <Link to="/projects/pet-shelter-website" className="special">
                See more about Pet shelter website
              </Link>
            </article>
            <article>
              <Link
                to="/projects/teenage-finance-app-and-website/"
                className="image"
              >
                <img
                  src={project_teenage_finance_app_image}
                  alt="Finance App for teens"
                />
              </Link>
              <Link to="/projects/teenage-finance-app-and-website/">
                <h3 className="major">Finance App for teens</h3>
              </Link>
              <p>‘Learn Finance’ is an interactive learning platform
                in the form of an app and website for teenagers who need to
                educate themselves and improve their knowledge on finance
                learning free, so that they may become better financial adults
                of tomorrow.</p>
              <Link
                to="/projects/teenage-finance-app-and-website/"
                className="special"
              >
                See more about Finance App for teens
              </Link>
            </article>
            <article>
              <Link to="/projects/viyana-quick-shade" className="image">
                <img src={project_viyana_image} alt="Viyana Quick Shade" />
              </Link>
              <Link to="/projects/viyana-quick-shade">
                <h3 className="major">Viyana Quick Shade</h3>
              </Link>
              <p>
                ‘Viyana’ (වියන) quick shade is a weather protection device for
                males in Sri Lanka that feels masculine, is easy to use and
                provides quick cover and immediately dries after use.
              </p>
              <Link to="/projects/viyana-quick-shade" className="special">
                See more about Viyana Quickshade
              </Link>
            </article>

            <article>
              <Link to="/projects/cover-me" className="image">
                <img src={project_cover_me_image} alt="Cover Me App" />
              </Link>
              <Link to="/projects/cover-me">
                <h3 className="major">Cover Me App</h3>
              </Link>
              <p>
                ‘CoverMe’ is a mobile app for a Sri Lankan youth who forgets
                their umbrella. The app enables them to rent an umbrella and
                never worry about bad weather again.
              </p>
              <Link to="/projects/cover-me" className="special">
                See more about the Cover Me App
              </Link>
            </article>
            <article>
              <Link to="/projects/mommy-halo" className="image">
                <img src={project_halo_image} alt="Mommy Halo" />
              </Link>
              <Link to="/projects/mommy-halo">
                <h3 className="major">Mommy Halo </h3>
              </Link>
              <p>
                Mommy Halo is a donut shaped iPad holder for pregnant mothers to
                safely and comfortably rest a tablet, on their pregnant belly.
              </p>
              <Link to="/projects/mommy-halo" className="special">
                See more about Mommy Halo
              </Link>
            </article>
            <article>
              <Link to="/projects/plastic-cycle" className="image">
                <img src={project_plasticcycle_image} alt="Plastic-cycle" />
              </Link>
              <Link to="/projects/plastic-cycle">
                <h3 className="major">Plastic-cycle</h3>
              </Link>
              <p>
                Plastic-cyle bin is a plastic collector that is placed all over
                Sri Lanka in the hope of collecting and recycling plastics. The
                bin not only has been an icon and internal tool for the John
                Keells group plastic reduction and recycling initiative,but
                helps create new consumer behaviour.
              </p>
              <Link to="/projects/plastic-cycle" className="special">
                See more about Plastic-cycle
              </Link>
            </article>
            {/* <article>
              <Link to="/projects/atlas-waterbottle" className="image">
                <img
                  src={project_atlas_bottle_image}
                  alt="Atlas Water Bottles"
                />
              </Link>
              <Link to="/projects/atlas-waterbottle">
                <h3 className="major">Atlas Water Bottles</h3>
              </Link>
              <p>
                Atlas water bottles are the first mass scale locally designed
                and manufactured bottles in Srilanka that's fun and sporty,
                encouraging kids to drink more water.
              </p>
              <Link to="/projects/atlas-waterbottle" className="special">
                See more about Atlas Water Bottles
              </Link>
            </article> */}
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default ProjectsPage;
