import React from 'react';

import Layout from '../../components/Layout';
import atlas_waterbottlesketch from '../../assets/images/project_image_atlas_waterbottle_sketch.png';
import magri_frog_casestudyimage from '../../assets/images/project_image_govi_casestudy_img.png';
import magri_frog_articleimage from '../../assets/images/project_image_govi_article_img.png';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper-viyana-quickshade">
      <header>
        <div className="inner">
          <h2>Atlas Water Bottles</h2>
          <p>Quenching thirst with play</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">The Project</h3>
          <p>
            Atlas is a leading stationery provider in Sri Lanka. They Provide
            quality products at a reasonable cost to the local stationary
            market. The brief was simple. They needed us to design a water
            bottle for school children that was reusable and able to be
            manufactured locally.
          </p>
          <p>
            We embarked on our design journey with the question{' '}
            <strong>
              “ How might we design a better water bottle for kids in Sri
              Lanka?”.
            </strong>{' '}
            Our research and observations of the user gave us the right insights
            to not just design one bottle but a range of bottles with an
            identity to each design.
          </p>
          <p>
            Apart From the usual consumption of water, kids used their bottle as
            a toy to play with peers. So we gave each bottle a character and
            made it more playful. This resulted in “Splash”, “Eco Fit”, “Hydro”,
            “Refresh”, “Super-Fit” concepts. The ultimate product designs not
            only encouraged kids to drink more water but also added the playful
            sportiness kids longed for at a reasonable cost.
          </p>
          <h3 className="major">The Team</h3>
          <p>
            Lee Bazalgette ( Director, Colombo Design Studio(CDS)),Ruwini Perera
            ( Operations Manager, CDS),Menusha Bennett ( Industrial Designer
            CDS), Nipuni Siyabalpitiya ( Industrial Designer, CDS), Dinuka
            Amarakoon( Intern, CDS), Senthilnathan Sobisan (Engineer, Atlas),
            Sumudu Peiris( Brand Manager, Atlas) Ramani Samarasundera (
            Marketing Director, Atlas)
          </p>
          <h3 className="major">My Role</h3>
          <p>
            As one of the key industrial designers my input came in the form of
            sketches, extra ideas to add emotional value to the product,and
            directly keeping up communications with the engineering and
            marketing departments at Atlas presenting our thinking and
            rationals. My highest contribution came at conceptualising,
            designing, detailing, Prototyping and making production drawings
            with simulation testing together with the engineers.
          </p>
          <h3 className="major">The Problem</h3>
          <h4>Why don’t males respond to weather protection devices?</h4>

          <img className="image main" src={atlas_waterbottlesketch} alt="" />
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
