import React from 'react';

import Layout from '../../components/Layout';
import viyana_research from '../../assets/images/project_image_viyana_research.png';
import viyana_sketch from '../../assets/images/project_image_viyana_sketch.png';
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
          <p>
            When analyzing the user a significant finding was that this group of
            people had lots of energy. They are always in the look for
            adventure. This is when the question arose; Can‘t the weather
            protection designed give the adventure fact while protecting from
            rain? Can there be a device to give the basic shade needed without
            the complicated structures? Can I get inspiration from history to
            solve this problem? Luckily for me in 1981 Sinhalese had used a
            Talipot leaf folded as a fan for cover. So I decided to develop that
            idea and ended up designing a product like a shield or an armor to
            gain protection.
          </p>
          <p>
            The armor had to be easy to open, use and fold. It had to be easy to
            store and make the males feel comfortable when using it. Adding the
            masculine qualities to the product could add the emotional value to
            the product making it part of the male self-identity so that the
            product wouldn‘t be forgotten. Another reason for weather gear to be
            forgotten is once after use all weather gear requires an additional
            effort to dry them and use back again. This process too had to be
            looked into through the new concept.
          </p>
          <img className="image main" src={viyana_sketch} alt="" />
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
