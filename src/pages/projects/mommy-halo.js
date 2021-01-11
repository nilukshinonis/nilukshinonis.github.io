import React from 'react';

import Layout from '../../components/Layout';
import mommyhalo_roleplay from '../../assets/images/project_image_mommyhalo_roleplay.png';

const IndexPage = () => (
  <Layout fullMenu>
    <section className="wrapper-common" id="wrapper-mommy-halo">
      <header>
        <div className="inner">
          <h2>Mommy Halo</h2>
          <p>Protection from radiation with comfort</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">The Project</h3>
          <p>
            Mommy Halo is a donut shaped iPad holder for pregnant mothers to
            safely and comfortably rest a tablet, on their pregnant belly
          </p>

          <h3 className="major">The Problem</h3>
          <p>
            We began developing a product with a question{' '}
            <strong>
              “ How might we protect an unborn baby the best way we can from
              EMF?”
            </strong>
          </p>
          <p>
            Electromagnetic Field or simply EMF is nothing new. We have been
            exposed to EMF from many different sources, such as earth's magnetic
            field and the sun. Ever Since the discovery of electricity humans
            have developed more and more devices that produce EMF( televisions,
            microwaves, and radios to name a few. Recently cell phones and
            tablets ). These small devices bring EMF closer and in more
            concentrated doses to everyone.
          </p>
          <p>
            Mommy Halo was created to shield EMF radiation from potentially
            chronic occupational exposure caused by the use of phones and
            tablets.
          </p>

          <h3 className="major">The Team</h3>
          <p>
            Lee Bazalgette ( Director, Colombo Design Studio(CDS)),Ruwini Perera
            ( Operations Manager, CDS) Menusha Bennett ( Industrial Designer
            CDS), Shafeek Akil ( Student Engineer, CDS), Anthony Ayers( Owner,
            Baby Assured), Robin Ayers ( Co-Owner, Baby Assured), Buddhi
            Paranamana(Project Manager, Hela Innovation)Malveena Jayawardena
            (Executive, Hela Innovation), Michelle Balapitya ( Executive, Hela
            Innovation)
          </p>
          <h3 className="major">My Role</h3>
          <p>
            As an Industrial designer I contributed in research , role play,
            ideation,concept generation,presentations in pitching to client and
            stakeholders, rapid prototyping, sketching and refining concepts,
            solidworks modelling and detailing, rendering, making of the
            production drawings and monitoring the production process. I value
            this project the most since it gave me the first experience on
            creating design and utility patent documents.
          </p>

          <img className="image main" src={mommyhalo_roleplay} alt="" />
          <h3 className="major">The Approach</h3>
          <p>
            The journey started with a bit of role play to understand the pain
            points. Next quick sketch and blue foam models helped us understand
            the practical and functional issues with ideas developed at
            brainstorming sessions. We managed to get our prototypes tested by
            real world expecting mothers and pitched the most viable designs.{' '}
          </p>
          <p>
            The final design is a wireless,portable, incredibly comfortable
            protector , you can take anywhere. We worked extensively for 14
            months to deliver a working prototype, including extensive testing
            and quality assurance. We started with a little bit of role playing
            in the studio and later gathered insights from concerned mothers.
            Our design splints of creating quick and rudimentary ideas
            ultimately ended up in the final design of the donut shaped
            ergonomic design that adjusts with growing bellies.
          </p>
          <h3 className="major">Reflection</h3>
          <p>
            Mommy Halo is created with a global product certification EMC-EMF
            safety approval.Its innovative and practical while keeping the user
            connected to watch work or relax feeling protected.It began with 2
            concerned parents questioning how to protect their unborn from
            radiation and ended up as a kickstarter project that became a
            success.
          </p>
          <p>
            The project was an exercise of working closely with many
            disciplines. I was very much involved from the beginning till the
            end adding value with the technical and design input to the project.
            Collaboration allowed us to make very quick changes and improve
            problem solving accuracy and get the product to market.
          </p>
          <div className="video-wrapper">
            <iframe
              title="Mommy Halo Intro"
              src="//player.vimeo.com/video/302935624?byline=0&amp;portrait=0"
              width="500"
              height="400"
              frameborder="0"
              allow="autoplay; fullscreen"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
