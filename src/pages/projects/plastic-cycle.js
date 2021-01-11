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
            to Reduce, Reuse or Recycle their plastic waste. The focus of the
            project is a carefully designed bin placed all over the island in
            the hope of collecting and recycling plastics. The bin is not only
            an icon but also an internal tool for the company to help create new
            consumer behaviour and rethink how we dispose of plastic.
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

          <img className="image main" src={viyana_research} alt="" />
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
