import React from 'react';

import Layout from '../../components/Layout';

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
import petadoption_design_process from '../../assets/images/project_image_petadoption_design_process.png';
import petadoption_emapthy_map_gif from '../../assets/images/petshelter_web_emapthy_maps.gif';
import petadoption_user_personas_gif from '../../assets/images/petadoption_user_personas.gif';
import petadoption_userstory_problemstatement from '../../assets/images/project_image_petadoption_user_story_problem_statement.png';
import petadoption_user_painpoints from '../../assets/images/project_image_petadoption_user_pain_points.png';
import petadoption_site_map from '../../assets/images/project_image_petadoption_site_map.png';

const IndexPage = () => (
  <Layout fullMenu>
    <section className="wrapper-common" id="wrapper-pet-shelter-web">
      <header>
        <div className="inner">
          <h2>Pet Shelter Website</h2>
          <p>A home for every soul</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">The Website</h3>
          <p>
            The second project in the UX certification program by Google was to
            design a pet adoption flow for a pet shelter in Berlin.
          </p>

          <h3 className="major">My Role</h3>
          <p>
            Researcher,UX designer, UX writer, UX tester from concept to
            delivery
          </p>

          <h3 className="major">Project goal</h3>

          <p>
            Create a responsive website that will let users find and read about
            the pets they would like to adopt at their convenience.
          </p>
          <h3 className="major">Design Process</h3>
          <img className="image main" src={petadoption_design_process} alt="" />
          <h3 className="major">Target audience</h3>

          <p>Animal loving individuals who would like to adopt a pet</p>
          <h3 className="major">Key challenges</h3>

          <p>
            Empathising researching and user testing in Berlin during post covid
            times.
          </p>
          <h3 className="major">Empathize</h3>
          <h3>Research study</h3>

          <p>
            I conducted interviews and created empathy maps to understand the
            users and their needs. After discussions about past experiences and
            expectations the project focus was;
          </p>
          <ul>
            <li>See and know information about the pets for adoption</li>
            <li>Choose between animal type, sex, age and breed</li>
            <li>Assistance in the adoption process</li>
            <li>Appointment scheduling online to meet animal</li>
            <li>Save a list of animals a user likes</li>
            <li>Request for adoption</li>
            <li>Create a community around the shelter for support</li>
          </ul>
          <h3>Initial design concepts</h3>

          <p>
            The numbers of Berliners adopting pets has increased with covid
            restrictions and staying at home. Yet adopting a pet from a shelter
            or ‘Tierheim’ is unnecessarily stressful. Initial discussions with
            pet lovers who wish to adopt pets revealed that they have to visit
            the shelter multiple times and complete a lot of paperwork before
            adoption. This rose to question if the adoption process can be made
            easy and contactless online through a web site. Empathy maps helped
            better frame the user's problem.
          </p>
          <img
            className="image main"
            src={petadoption_emapthy_map_gif}
            alt=""
          />
          <p>
            User personas helped understand various use cases the website will
            have to consider.
          </p>

          <img
            className="image main"
            src={petadoption_user_personas_gif}
            alt=""
          />
          <h3 className="major">Define</h3>
          <p>
            Problem statements and user stories each persona helped define the
            problem better.
          </p>
          <img
            className="image main"
            src={petadoption_userstory_problemstatement}
            alt=""
          />
          <h3>User research pain points</h3>
          <img
            className="image main"
            src={petadoption_user_painpoints}
            alt=""
          />
          <h3>Site map</h3>
          <p>
            A hierarchical model in information architecture helped organize the
            content in the website and allow users to understand where they are
            and where the information they want is in the website.
          </p>
          <img className="image main" src={petadoption_site_map} alt="" />
          <p>
            User journey maps helped understand how to build the user flow and
            ideate to make the ordering of snacks seamless and fun.
          </p>
          <img className="image main" src={snacker_user_journey_map} alt="" />
          <p>
            User journey maps helped understand how to build the user flow and
            ideate to make the ordering of snacks seamless and fun.
          </p>
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
          <p>View the prototype on link</p>
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
          <p>View the prototype on link</p>
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
