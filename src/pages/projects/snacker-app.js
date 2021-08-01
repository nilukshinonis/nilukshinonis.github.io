import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import magri_frog_wireframe from '../../assets/images/project_image_govi_frog_wireframe.png';
import magri_frog_prototype from '../../assets/images/project_image_govi_frog_prototype.png';
import magri_frog_inaswithcalander from '../../assets/images/project_image_govi_frog_inaswithcalander.png';
import magri_frog_interfaceofapp from '../../assets/images/project_image_govi_frog_interfaceofapp.png';
import magri_frog_casestudyimage from '../../assets/images/project_image_govi_casestudy_img.png';
import magri_frog_articleimage from '../../assets/images/project_image_govi_article_img.png';
import snacker_design_process_image from '../../assets/images/project_image_snacker_design_process.png';
import snacker_pain_point_image from '../../assets/images/project_image_snacker_pain_points.png';
import snacker_user_persona_image from '../../assets/images/project_image_snacker_user_persona.png';
import snacker_user_flow from '../../assets/images/project_image_snacker_user_flow.png';
import snacker_user_journey_map from '../../assets/images/project_image_snacker_user_journey_map.png';
import snacker_paper_wireframes from '../../assets/images/project_image_snacker_paper_wireframes.png';
import snacker_digital_wireframes from '../../assets/images/project_image_snacker_digital_wireframes.png';
import snacker_lo_fi_prototype from '../../assets/images/project_image_snacker_lo_fi_prototype.png';
import snacker_affinity_diagram from '../../assets/images/project_image_snacker_affinity_diagram.png';
import snacker_usertest_changes from '../../assets/images/project_image_snacker_changes_after_user_testing.png';
import snacker_ui_elements from '../../assets/images/project_image_snacker_ui_elements.png';
import snacker_mockup_gif from '../../assets/images/snacker_app_mockup_.gif';
import project_financeapp from '../../assets/images/project_financeapp.png';
import project_petshelter_web_image from '../../assets/images/project_petshelter.png';

const IndexPage = () => (
  <Layout fullMenu>
    <section className="wrapper-common" id="wrapper-snacker-app">
      <header>
        <div className="inner">
          <h2>Snacker App</h2>
          <p>Your favourite snacks just a click away</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">The App</h3>
          <p>
            I recently completed a UX certification program by Google and the
            first task was to design a snack ordering mobile app for a movie
            theater in NYC.
          </p>

          <h3 className="major">My Role</h3>
          <p>
            Researcher,UX designer, UX writer, UX tester from concept to
            delivery
          </p>

          <h3 className="major">Project goal</h3>

          <p>
            A snack ordering app that will let users find and pre order or
            customize snacks to their liking by helping them skip long lines and
            pick up their snacks at their convenience.
          </p>
          <h3 className="major">Design Process</h3>
          <img
            className="image main"
            src={snacker_design_process_image}
            alt=""
          />
          <h3 className="major">Target audience</h3>

          <p>Movie goers who order snacks at the movies</p>
          <h3 className="major">Key challenges</h3>

          <p>
            empathising researching and user testing on users in NYC while
            remotely working in Berlin
          </p>
          <h3 className="major">Empathize</h3>
          <h3>Research study</h3>

          <p>
            I conducted interviews remotely with several participants who enjoy
            going to a movie theater and usually order snacks. After talking to
            them about their experiences and expectations of a snack ordering
            app I found some focus points to develop the app design.
          </p>
          <ul>
            <li>Order food and drinks from an extensive menu</li>
            <li>See what is available and not</li>
            <li>Choose between pick up or deliver to your seat</li>
            <li>Real-time order tracking</li>
            <li>Multiple payment options</li>
            <li>Save frequently used cards and payment methods</li>
            <li>Split bill among a group</li>
            <li>Rate and feedback system</li>
          </ul>
          <p>
            Then an unmoderated usability study on 5 participants; all movie
            goers which consisted of 2 elders (30-65) 2 young dependents (18-29)
            and one assistive technological user helped me test Initial
            wireframes and hi-fi prototypes.{' '}
          </p>

          <h3>Initial design concepts</h3>

          <p>
            Snack ordering is unnecessarily stressful. You have to get them
            early before your favorites sell out and you always end up in a long
            line missing parts of the movie. To better understand the problem I
            spoke to multiple individuals and worked on empathy maps. With the
            insights collected I created a user persona to work on.{' '}
          </p>
          <img className="image main" src={snacker_user_persona_image} alt="" />
          <h3 className="major">Define</h3>
          <p>
            User story and user journey of Akil helped define the problem
            better.
          </p>
          <h4>Problem statement</h4>
          <p>
            “Akil is a dependent teenager who needs to save money but at the
            same time enjoy movies and snacks with his friends because everytime
            he goes to a movie he buys snacks for his friends and never gets
            refunded.”
          </p>
          <h4>User story</h4>
          <p>
            “As a University student I want to meet friends and share costs of
            snacks we buy at a movie so that it's fair and I will save money.”
          </p>
          <h3>User research pain points</h3>
          <img className="image main" src={snacker_pain_point_image} alt="" />
          <h3>User flow</h3>
          <p>
            Next I conducted a competitive audit on apps that offer similar
            services and started brainstorming ideas on how to help Akil have a
            better user experience the next time he goes to a movie. Then the
            next step was to create the user flow of the app.
          </p>
          <img className="image main" src={snacker_user_flow} alt="" />
          <p>
            User journey maps helped understand how to build the user flow and
            ideate to make the ordering of snacks seamless and fun.
          </p>
          <img className="image main" src={snacker_user_journey_map} alt="" />

          <h3 className="major">Ideate</h3>

          <h3>Sketches and wireframes</h3>
          <p>
            Next I was focused on coming up with many possible ideas to
            incorporate into the app design. Taking time to draft iterations of
            each screen of the app on paper ensured that elements that made it
            to digital wireframes would be well-suited to address user pain
            points. For the Home screen I prioritized a quick and easy ordering
            process with a chatbot to help users save time and order their
            snacks. Stars were used to mark the elements of each sketch that
            would be used in the wireframes.
          </p>

          <img className="image main" src={snacker_paper_wireframes} alt="" />
          <h3>Digital Wireframes and Lo-fi Prototypes</h3>
          <p>
            The next task was to do digital wireframes. This helped visualize
            how the design will look as I create the user interface and show
            areas to improve. I made sure to base screen designs on feedback and
            findings from the initial user research. Quick and easy access were
            key user needs to address in the design followed by the app
            supporting assistive technologies.
          </p>
          <img className="image main" src={snacker_digital_wireframes} alt="" />
          <h3 className="major">Testing</h3>
          <h3>User testing results</h3>
          <p>
            The low fidelity prototype connected the primary user flow of
            selecting and ordering snacks so the prototype could be used in a
            usability study with the users in the next step.
          </p>
          <p>
            View the prototype on{' '}
            <a 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://www.figma.com/proto/hAvslXNd66HOpAYXyir6AM/google-ux?node-id=17%3A1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=17%3A1&show-proto-sidebar=1">
              link
            </a>{' '}
          </p>
          <img className="image main" src={snacker_lo_fi_prototype} alt="" />
          <p>
            I conducted two rounds of usability studies. Findings from the first
            study helped guide the design from wireframes to mockups. Initial
            unmoderated study online requested users to complete a few tasks on
            the lo-fi prototype and talk through their thoughts in a recording.
            These recordings were all analysed and I created a note taking
            spreadsheet which helped build affinity diagrams.
          </p>
          <img className="image main" src={snacker_affinity_diagram} alt="" />
          <h3>Usability study findings</h3>
          <p>
            <ul>
              <li>The buttons seem too small to click for most participants</li>
              <li>
                The bag at the bottom and checkout cart need to be the same
              </li>
              <li>Split button needs to be placed in a more visual area</li>
              <li>Simplify split features to make it easy to use</li>
            </ul>
          </p>
          <img className="image main" src={snacker_usertest_changes} alt="" />
          <h3>Design Systems</h3>
          <p>
            Building a sticker sheet of the Ui elements I need in Figma was
            helpful in creating the mock ups for the app. I used red as a
            primary colour since it is stimulating and energizing creating the
            urge to buy snacks.{' '}
          </p>
          <img className="image main" src={snacker_ui_elements} alt="" />
          <h3>Mockups and high-fidelity prototype</h3>
          <p>
            The final high-fidelity prototype presented cleaner user flows for
            ordering snacks and easy checkout. It also met user needs for a
            pickup or delivery option as well as more customization according to
            their need.{' '}
          </p>
          <p>View the prototype on <a 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://www.figma.com/proto/hAvslXNd66HOpAYXyir6AM/google-ux?node-id=252%3A684&scaling=scale-down&page-id=252%3A46&starting-point-node-id=252%3A684">
              link
            </a></p>
          <img className="image main" src={snacker_mockup_gif} alt="" />
          <h3>Accessibility considerations</h3>
          <p>
            To ensure the app was accessible I included users of assistive
            technologies such as keyboards and screen readers throughout all
            stages of the design cycle including in interviews and usability
            testing. I took their needs and feedback and incorporated what I
            learned into the designs in order to provide an inclusive and
            accessible experience for all.
            <ul>
              <li>
                I tried to provide access to users who are vision impaired
                through adding alt text to images for screen readers.
              </li>
              <li>
                I used detailed imagery of snacks to help all users better
                understand the designs.
              </li>
              <li>
                Accessibility placeholder text in every button and icon was also
                used to increase accessibility in the app
              </li>
            </ul>
          </p>
          <h3 className="major">Reflection</h3>
          <p>
            One of the biggest learnings of this project was that wireframes
            have to be completely basic. Since I made my wireframes detailed
            with buttons and text sizes the feedback I received was more into
            the UI development. I wish I had a better prototype to test the
            features and improve the user experience.
          </p>
          <h3 className="major">More Projects</h3>
          <section className="features">
            <article>
              <a
                href="/projects/pet-shelter-website/"
                target="_blank"
                className="image"
              >
                <img src={project_petshelter_web_image} alt="" />
              </a>
              <Link to="/projects/pet-shelter-website/" className="special">
                Pet Shelter Website
              </Link>
            </article>
            <article>
              <a
                href="/projects/teenage-finance-app-and-website/"
                target="_blank"
                className="image"
              >
                <img src={project_financeapp} alt="" />
              </a>
              <Link
                to="/projects/teenage-finance-app-and-website/"
                className="special"
              >
                Finance App for Teens
              </Link>
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
