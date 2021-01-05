import React from 'react';

import Layout from '../../components/Layout';
import pic4 from '../../assets/images/pic04.jpg';
import pic5 from '../../assets/images/pic05.jpg';
import magri_graph from '../../assets/images/project_image_govi_1.png';
import magri_frog_ecosystem from '../../assets/images/project_image_govi_frog_ecosystem_pic.png';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper-govi-mithuru">
      <header>
        <div className="inner">
          <h2>Govi Mithuru Service App</h2>
          <p>Empowering farmers through tech</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">The App</h3>
          <p>
            'Govi Mithuru' (in Sinhala) service app, launched in 2015 October,
            is a mobile advisory service for farmers and home growers in Sri
            Lanka. The service is designed to be used easily by anyone using
            even a very basic phone. The app provides customized and timely
            advice to farmers regarding land preparation, cultivation, crop
            protection, harvest and improved family nutrition. By December 2016,
            it has been subscribed by more than half a million registered users.
          </p>

          <h3 className="major">The Team</h3>
          <p>
            Lilian Tse ( Program Manager Frog), Alvero Marquez (Creative
            Director, Frog) , Inas Jenabdeen ( Product Engineer, Dialog),
            Sathyan Velumani (Ux Designer, Dialog), Victoria Clause (Market
            Engagement Manager, GSMA), Hiroshan Weerawardena ( Student
            Participation ) Funded by GSMA mAgri. Content by the Ministry of
            Agriculture of the Government of Sri Lanka, the Centre for
            Agriculture and Biosciences International, Ministry of Health,
            Nutrition &amp; Indigenous Medicine of the Government of Sri Lanka.
          </p>

          <h3 className="major">My Role</h3>
          <p>
            As an student UX researcher and tester I was out in the field
            spending time with farmers and other agricultural ecosystem players
            to understand their needs, placing Human Centred Design (HCD) at the
            core of the offering and later presenting the findings to come up
            with a solution to the pain points farmers faced on a daily basis.
            Later sharing our findings and iterating concepts with detailing
            wireframes and prototype making and testing was part of my
            contribution.
          </p>

          <h3 className="major">The Business Need</h3>
          <h4>
            How might we empower the livelihood of farmers through mobile
            technology?
          </h4>
          <p>
            Dialog a leading Mobile Network Operator (MNO) had been introducing
            products services for farmers of Sri Lanka since 2011. Yet
            statistics revealed only 21% farmers adopted to these services and
            continued using them. So they teamed up with GSMA and Frog to test a
            M-Agri toolkit with farmers of Sri Lanka in the hope of
            understanding the real need of farmers.
          </p>

          <img className="image main" src={magri_graph} alt="" />

          <h3 className="major">The Approach</h3>
          <p>
            The selected locations were Nuwara Eliya 175km from Colombo and
            Anuradhapura 201 km from Colombo. Here majority of farmer clusters
            can be observed. With known contacts we had a few farmers to
            interview. Later the team continued recruiting as we were in the
            field making new connections.
          </p>
          <img className="image main" src={magri_frog_ecosystem} alt="" />

          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
