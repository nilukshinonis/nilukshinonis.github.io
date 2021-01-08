import React from 'react';

import Layout from '../../components/Layout';
import coverme_usergroups from '../../assets/images/project_image_coverme_usergroups.png';
import coverme_userflow from '../../assets/images/project_image_coverme_userflow.png';
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

          <h3 className="major">The Problem</h3>
          <p>How might we get an umbrella when we need it?</p>
          <p>
            An umbrella is a might need product that’s needed in rain and
            forgotten about otherwise. I have worked with a leading umbrella
            manufacturer in Sri Lanka and pitched this app. I hope it will
            benefit many who feel helpless at bad weather situations. A young
            male is the primary target group for this app anyone who forgets
            their umbrella will also benefit from this app.
          </p>
          <h3>The Approach</h3>
          <p>
            I started off storyboarding my problem. Later discussions with my
            user groups gave me plenty of insights to work on. Grouping the user
            personas makes life easy. Then I embarked on creating the journey
            map to see how the app will function. More refinements got me to
            sketching and wireframing which ended up in a high fidelity
            prototype done on figma.
          </p>
          <p>
            During the initial concept stages I did a survey to develop a better
            understanding of the user group. The documented data helped in
            creating user groups.
          </p>

          <img className="image main" src={coverme_usergroups} alt="" />
          <p>
            ‘Light’ and ‘Heavy Rainers’ will be target early adopters for this
            app. After some concepts were formed and the competitive landscape
            was examined, rough user flows were created that were expanded upon
            to build the first screens.{' '}
          </p>
          <img className="image main" src={coverme_userflow} alt="" />
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
