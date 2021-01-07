import React from 'react';

import Layout from '../../components/Layout';
import viyana_research from '../../assets/images/project_image_viyana_research.png';
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
          <p>A weather protection device for males in Sri Lanka</p>
          <p>
            Rain and shine are two things Srilankans evolved with and respond
            to, on a daily basis. Even though Sri Lanka experiences sun and
            rain, the available weather protective products are limited. Locally
            available products to get cover are umbrellas, rain jackets and
            caps. Among these products umbrellas report 90% sales annually
            (Rainco annual report, 2015).{' '}
          </p>
          <p>
            Rainco Pvt Ltd is a leading umbrella manufacturer in Sri Lanka. 75%
            annual sales of the company come from ladies compactable umbrellas.
            Only 15% sales come from the gents‘ non compactable umbrellas. The
            company wanted to understand why males didn’t buy umbrellas and see
            if a product can be designed according to their need.
          </p>

          <h3 className="major">The Problem</h3>
          <h4>Why don’t males respond to weather protection devices?</h4>

          <img className="image main" src={viyana_research} alt="" />
          <h3 className="major">The Approach</h3>
          <p>
            To understand the pulse of the user I conducted a survey. This
            helped me realize the pain points related to the situation. A
            questionnaire prepared on Google forms was sent out to 150 randomly
            selected males who were active on social media platforms. With 123
            responses I created an eco system map, user journey map and had
            plenty of insights to work on.
          </p>
          <p>
            It was clear that umbrellas didn’t delight males. So my task was to
            design a weather protection device that felt masculine. A solution
            easy to use which provide quick cover and had immediate drying
            properties.
          </p>
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
