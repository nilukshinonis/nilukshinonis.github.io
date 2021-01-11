import React from 'react';

import Layout from '../../components/Layout';
import viyana_research from '../../assets/images/project_image_viyana_research.png';
import magri_frog_casestudyimage from '../../assets/images/project_image_govi_casestudy_img.png';
import magri_frog_articleimage from '../../assets/images/project_image_govi_article_img.png';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper-viyana-quickshade">
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
            We began developing a product with a question <strong>“ How might we protect
            an unborn baby the best way we can from EMF?”</strong>
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

          <img className="image main" src={viyana_research} alt="" />
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
