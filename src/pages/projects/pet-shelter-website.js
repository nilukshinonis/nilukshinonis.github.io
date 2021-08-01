import React from 'react';
import {Link} from 'gatsby';

import Layout from '../../components/Layout';

import petadoption_design_process from '../../assets/images/project_image_petadoption_design_process.png';
import petadoption_emapthy_map_gif from '../../assets/images/petshelter_web_emapthy_maps.gif';
import petadoption_user_personas_gif from '../../assets/images/petadoption_user_personas.gif';
import petadoption_userstory_problemstatement from '../../assets/images/project_image_petadoption_user_story_problem_statement.png';
import petadoption_user_painpoints from '../../assets/images/project_image_petadoption_user_pain_points.png';
import petadoption_site_map from '../../assets/images/project_image_petadoption_site_map.png';
import petadoption_paper_wireframes from '../../assets/images/project_image_petadoption_paper_wireframes.png';
import petadoption_digital_wireframes from '../../assets/images/project_image_petadoption_digital_wireframes.png';
import petadoption_affinity_diagram from '../../assets/images/project_image_petadoption_affinity_diagram.png';
import petadoption_lofi_prototype from '../../assets/images/project_image_petadoption_lofi_prototype.png';
import petadoption_after_changes from '../../assets/images/project_image_petadoption_after_changes.png';
import petadoption_ab_testing from '../../assets/images/project_image_petadoption_ab_testing.png';
import petadoption_responsive_mockup from '../../assets/images/project_image_petadoption_responsive_mockup.png';
import petadoption_scaling_wireframes from '../../assets/images/project_image_petadoption_scaling_wireframes.png';
import petadoption_all_digital_responsive_screens from '../../assets/images/project_image_petadoption_all_digital_responsive_screens.png';
import project_financeapp from '../../assets/images/project_financeapp.png';
import project_viyana_image from '../../assets/images/project_viyana.png';

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

          <h3 className="major">Ideate</h3>

          <h3>Sketches and wireframes</h3>
          <p>
            Quick hand drawn paper wireframes helped the creative juices flow in
            the process and build many possible ways of designing.
          </p>

          <img
            className="image main"
            src={petadoption_paper_wireframes}
            alt=""
          />
          <h3>Digital Wireframes and Lo-fi Prototypes</h3>
          <p>
            The next task was to do digital wireframes. This helped visualize
            how the design will look and show areas to improve. The user was
            always placed as priority and every element was improved according
            to feedback from users.
          </p>
          <img
            className="image main"
            src={petadoption_digital_wireframes}
            alt=""
          />
          <h3 className="major">Testing</h3>
          <p>
            Then an unmoderated usability study on 5 participants; 2 Males 2
            Females and 1 non binary individual helped test Initial wireframes
            and hi-fi prototypes. Grouping all the insights collected in
            affinity diagrams directed to the changes that should be made in the
            design to better improve the user experience.
          </p>
          <img
            className="image main"
            src={petadoption_affinity_diagram}
            alt=""
          />
          <h3>User testing results</h3>
          <p>
            The low fidelity prototype connected the primary user flow of
            finding pets and sending an application for adoption or request to
            fix an appointment with the pet shelter. This prototype was used in
            a usability study. Again with the feedback changes were made to the
            design.
          </p>
          <p>View the prototype on link</p>
          <img className="image main" src={petadoption_lofi_prototype} alt="" />

          <h3>Usability study findings</h3>
          <p>
            The insights collected after the user test were;
            <ul>
              <li>Users found it hard to filter using the drop down</li>
              <li>
                Users can’t easily find the progress of their adoption
                applications
              </li>
              <li>
                During the adoption process Users have to fill the information
                which is time consuming
              </li>
              <li>
                There was no area to access templates in the next stage of
                adopting a pet{' '}
              </li>
              <li>There was no way of sharing the animal with a friend</li>
            </ul>
          </p>
          <p>
            I then prioritized the insights and listed the next action steps
          </p>
          <p>
            Priority zero cases
            <ul>
              <li>
                Replace drop down and add filter list with all the options
              </li>
              <li>
                Pre-fill application form according to user account information
              </li>
            </ul>
          </p>
          <p>
            Priority one cases
            <ul>
              <li>include a progress bar at home screen</li>
            </ul>
          </p>
          <p>
            Priority two cases
            <ul>
              <li>include area to access prefabricated templates</li>
              <li>include a share in the pet card</li>
            </ul>
          </p>
          <img className="image main" src={petadoption_after_changes} alt="" />
          <p>View the prototype after the changes from user testing on link</p>
          <h3>Mockups and high-fidelity prototype</h3>
          <p>
            A few A/B tests were conducted to understand if users will prefer
            real life images or illustrations in the home screen and if they
            prefer a slider view or collage view of seeing the images of a
            selected pet. Participants were given both options and asked to talk
            through and explain the screen they selected.{' '}
          </p>
          <img className="image main" src={petadoption_ab_testing} alt="" />

          <p>View the prototype on link</p>
          
          <h3>Responsive screen design</h3>
          <p>
            Next the screens had to adapt to the device that the user is on. So
            the process to design how the website will appear on smaller screens
            was initiated. The aim of this task was to have a uniform design so
            that users feel familiar across devices and provide a smooth
            uninterrupted experience. First up I drew all the frames on grid
            paper.
          </p>
          <img className="image main" src={petadoption_scaling_wireframes} alt="" />
          <p>
            Later digital screens helped test the website on different screen
            sizes before completion of the project.
          </p>
          <img className="image main" src={petadoption_all_digital_responsive_screens} alt="" />
          <h3>Accessibility considerations</h3>
          <p>
            The website was designed keeping in mind the Web Content
            Accessibility Guidelines (WCAG).Accessible color and contrast was
            used. Several ways to mark up the design to make it accessible for
            users which was thought of were;
            <ul>
              <li>Navigation order annotations</li>
              <li>Hierarchical headings</li>
              <li>Accessibility labels for screen readers</li>
            </ul>
          </p>
          <img className="image main" src={petadoption_responsive_mockup} alt="" />
          <h3 className="major">Reflection</h3>
          <p>
            This project introduced me to Adobe XD. It is very similar to Figma
            yet there are many advantages to designing user experiences in this
            platform. I also understood extremely well on how responsive sites
            and each screen was individually designed and the importance of
            designing to web accessibility standards.
          </p>
          <div className="video-wrapper">
            <iframe
              title="Petadoption website flow video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Zp9K9qr7jPk"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <h3 className="major">More Projects</h3>
          <section className="features">
            <article>
              <a
                href="/projects/teenage-finance-app-and-website/"
                target="_blank"
                className="image"
              >
                <img src={project_financeapp} alt="" />
              </a>
              <Link to="/projects/snacker-app" className="special">
              Finance App for Teens
              </Link>
            </article>
            <article>
              <a
                href="/projects/viyana-quick-shade/"
                target="_blank"
                className="image"
              >
                <img src={project_viyana_image} alt="" />
              </a>
              <Link to="/projects/snacker-app" className="special">
                Viyana Quick Shade
              </Link>
            </article>
          </section>
        
          </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
