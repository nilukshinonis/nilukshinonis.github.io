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
          <h2>Coverme</h2>
          <p>Umbrella when you need it</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">The App</h3>
          <p>
            CoverMe is a mobile app for Sri Lankan youth in their late 20s who
            forgets their umbrella. Since they want to get to their destination
            without interruption from rain they choose CoverMe. The app enables
            them to rent an umbrella and never worry about bad weather again.
          </p>
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
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
