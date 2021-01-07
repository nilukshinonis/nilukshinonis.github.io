import React from 'react';

import Layout from '../../components/Layout';
import magri_graph from '../../assets/images/project_image_govi_1.png';
import magri_frog_casestudyimage from '../../assets/images/project_image_govi_casestudy_img.png';
import magri_frog_articleimage from '../../assets/images/project_image_govi_article_img.png';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper-govi-mithuru">
      <header>
        <div className="inner">
          <h2>Viyana Quick Shade</h2>
          <p>Immediate cover in style</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">The Project</h3>
          <p>
          A weather protection device for males in Sri Lanka
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
          <section className="features">
            <article>
              <a
                href="https://www.gsma.com/mobilefordevelopment/wp-content/uploads/2017/06/govi-mithuru-mobile-agriculture-service-dialog-sri-lanka.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="image"
              >
                <img src={magri_frog_casestudyimage} alt="" />
              </a>
              <a
                href="https://www.gsma.com/mobilefordevelopment/wp-content/uploads/2017/06/govi-mithuru-mobile-agriculture-service-dialog-sri-lanka.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="special"
              >
                See the case study
              </a>
            </article>
            <article>
              <a
                href="https://www.dialog.lk/govi-mithuru/"
                target="_blank"
                rel="noopener noreferrer"
                className="image"
              >
                <img src={magri_frog_articleimage} alt="" />
              </a>
              <a
                href="https://www.dialog.lk/govi-mithuru/"
                target="_blank"
                rel="noopener noreferrer"
                className="special"
              >
                Read article
              </a>
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
