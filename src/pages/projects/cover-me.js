import React from 'react';

import Layout from '../../components/Layout';
import coverme_usergroups from '../../assets/images/project_image_coverme_usergroups.png';
import coverme_userflow from '../../assets/images/project_image_coverme_userflow.png';
import coverme_storyboard from '../../assets/images/project_image_coverme_storyboard.png';
import coverme_onboarding from '../../assets/images/project_image_coverme_onboarding.gif';
import coverme_popupalerts from '../../assets/images/project_image_coverme_popupalerts.png';
import coverme_graphicelements from '../../assets/images/project_image_coverme_graphicelements.png';
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
          <p>
            Working through storyboards very quickly helps visualize solutions.
            This helped understand the journey better and put my self in the
            user’s shoes. It was also helpful when pitching the idea to the
            client and figure out my core features and secondary features in the
            app when designing.
          </p>
          <img className="image main" src={coverme_storyboard} alt="" />
          <p>
            <strong>Onboarding</strong>
          </p>
          <p>
            The onboarding begins with the option to sign up or skip sign up and
            experience the app. Experiencing the app will increase the
            probability of purchasing the product. Once the user is in the map
            showing closest coverme station eventually scanning the QR code will
            redirect the user to register. Registration is a simple four step
            process after experience from user feedback. Next comes up a quick
            start pictorial guide easy to understand. Then comes a cashless
            payment method selection based on most common practices in Sri
            Lanka.
          </p>
          <img className="image main" src={coverme_onboarding} alt="" />
          <p>
            <strong>Pop-up Alerts</strong>
          </p>
          <p>
            This interaction channels simplicity and requires the user to act or
            ignore. A click on it will open the app map and show the closest
            coverme station. Returning will also come with pop up notifications
            reminding the user at intervals.
          </p>
          <img className="image main" src={coverme_popupalerts} alt="" />
          <p>
            <strong>Userflow</strong>
          </p>
          <p>
            The structure of the app is based on rent and return fast. With a
            touch of a button the QR code will scan the QR code in vending
            machine and release a locked umbrella. It will be able to be used
            for a time frame of 4 Hours. When the time is running up more
            notifications will remind the user to return umbrella. A typical
            user behavior of returning the umbrella within the allocated time
            frame will reward the user with points.
          </p>
          <p>
            Usually a wet umbrella is left to dry after use. This makes it easy
            to forget. Coverme will send reminders when the user is 20m away
            from the umbrella eliminating loss of product.{' '}
          </p>
          <p>
            <strong>Style Guide</strong>
          </p>
          <p>
            This is the first digital product under the Rainco Brand. To avoid
            common misconceptions with brand coverme will act independently as a
            fresh intervention. Keeping the rainco style guide in mind I created
            a UX kit to work on. This helped maintain consistency in the design
            process.
          </p>
          <img className="image main" src={coverme_graphicelements} alt="" />
          <h3 className="major">Reflection</h3>
          <p>
            Overall, this product development cycle was a success. More
            interactions with Engineering and Product development teams will
            bring this to every train station, bus stop in and around Colombo at
            the kick off stage. To enjoy the benefit of the design Rainco will
            have to make sure it markets to the target segment appropriately.
            Since it was a proof of concent project many changes are expected to
            take place.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
