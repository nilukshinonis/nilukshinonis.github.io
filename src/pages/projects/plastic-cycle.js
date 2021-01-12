import React from 'react';

import Layout from '../../components/Layout';
import plasticcycle_binmaking from '../../assets/images/project_image_plasticcycle_binmaking.png';

const IndexPage = () => (
  <Layout fullMenu>
    <section className="wrapper-common" id="wrapper-plastic-cycle">
      <header>
        <div className="inner">
          <h2>Plastic- cycle</h2>
          <p>Re-thinking plastic disposal</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">The Project</h3>
          <p>
            Plastic-cycle is an ongoing plastic disposal awareness campaign in
            Sri Lanka led by John Keels group. The campaign is a system design
            to create awareness and spark a recycling culture to get more people
            to Reduce, Reuse or Recycle their plastic waste. The focal point of
            the project is a carefully designed bin placed all over the island
            in the hope of collecting and recycling plastics. The bin is not
            only an icon but also an internal tool for the company to help
            create new consumer behaviour and rethink how we dispose of plastic.
          </p>

          <h3 className="major">The Problem</h3>
          <h4>
            “How might we encourage Sri Lankans to dispose of their plastics
            responsibly?”.
          </h4>
          <p>
            Much of SriLanka’s coastline and landmass has been tarnished by the
            irresponsible disposal of plastic waste.{' '}
          </p>
          <p>
            In 2017 a garbage dump outside Sri Lanka’s capital Colombo collapsed
            and killed 30.This was an eye opener to many leading plastic
            manufacturers to create a system that collects the plastic they give
            to the consumer in order to recycle. Hence the Plastic-cycle project
            was initiated in 2018 June and we at Colombo Design studio were
            designing the Bin and its branding and identity. It’s a personal
            favorite out of all the projects I have done to source material and
            fabricate the bins at Supermarkets and highway entry/exit points.
            The project reached a milestone of collecting 50 metric tons of
            plastic by January 2019 and continues.
          </p>
          <h3 className="major">The Team</h3>
          <p>
            Lee Bazalgette ( Director, Colombo Design Studio(CDS)),Ruwini Perera
            ( Operations Manager, CDS),Leah Marikkar (Director, Dentsu Aegis
            Network)Menusha Bennett ( Industrial Designer CDS), Clemens Thieler
            ( Intern, CDS), Buddhika Muthukumarana (General Manager,Viridis
            Plastic Recycling), Nisreen Rahmanjee( Head of Social
            Entrepreneurship Project, John Keells Group),Monaka Perumal( Brand
            manager, Dentsu Aegis Network), Jayananda Kalpana( Manufacturer,
            KALPANA ADS (PVT) LTD)
          </p>
          <h3 className="major">My Role</h3>
          <p>
            As a product designer my input was mainly for the initial
            brainstorming sessions of diverging and converging ideas for the
            campaign that took a number of stages. My highest contribution to
            the project was by conceptualising, designing, detailing and
            fabricating the physical bin which was the tactile element of the
            project.
          </p>

          <img className="image main" src={plasticcycle_binmaking} alt="" />
          <h3 className="major">The Approach</h3>
          <p>
            After many design thinking sessions the team came up with a
            comprehensive campaign to create awareness, start conversations and
            collect plastic with a user friendly bin containing inviting
            semiotics for all kinds of users to walk up to the bin and insert
            their plastics.
          </p>
          <p>
            We observed the behavior of users with the initial prototypes and
            continued developing the bin design to suit the environments its
            placed as well as perceive better will less user error.{' '}
          </p>
          <h3 className="major">Reflection</h3>
          <p>
            The campaign is a success and continues making big impacts and
            lifestyle changes in Sri Lankans. 95% Sri Lankans are aware of the
            campaign and many research shows that the perceptions on individual
            disposal of waste has changed with the introduction of the bin to
            the community.
          </p>
          <div className="video-wrapper">
            <iframe
              title="Plastic Cycle Intro"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/2IvgNcDtCf0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
