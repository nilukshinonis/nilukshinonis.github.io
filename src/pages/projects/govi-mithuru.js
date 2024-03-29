import React from 'react';
import {Link} from 'gatsby';

import Layout from '../../components/Layout';
import magri_graph from '../../assets/images/project_image_govi_1.png';
import magri_frog_ecosystem from '../../assets/images/project_image_govi_frog_ecosystem_pic.png';
import magri_frog_lilian_and_me from '../../assets/images/project_image_govi_frog_lilian_and_me.png';
import magri_frog_postitwall from '../../assets/images/project_image_govi_frog_postitwall.png';
import magri_frog_table from '../../assets/images/project_image_govi_frog_table.png';
import magri_frog_wireframe from '../../assets/images/project_image_govi_frog_wireframe.png';
import magri_frog_prototype from '../../assets/images/project_image_govi_frog_prototype.png';
import magri_frog_inaswithcalander from '../../assets/images/project_image_govi_frog_inaswithcalander.png';
import magri_frog_interfaceofapp from '../../assets/images/project_image_govi_frog_interfaceofapp.png';
import magri_frog_casestudyimage from '../../assets/images/project_image_govi_casestudy_img.png';
import project_snacker_app_image from '../../assets/images/project_snacker.png';
import project_petshelter_web_image from '../../assets/images/project_petshelter.png';


const IndexPage = () => (
  <Layout fullMenu>
    <section className="wrapper-common" id="wrapper-govi-mithuru">
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
            <li>Lilian Tse ( Program Manager, Frog)</li>
             <li>Alvero Marquez (Creative
            Director, Frog) </li>
            <li>Inas Jenabdeen ( Product Engineer, Dialog)</li>
            <li>Sathyan Velumani (Ux Designer, Dialog)</li>
            <li> Victoria Clause (Market
            Engagement Manager, GSMA)</li>
            <li> Hiroshan Weerawardena ( Student
            Participation )</li>
            <li> Funded by GSMA mAgri</li>
            <li> Content by the Ministry of
            Agriculture of the Government of Sri Lanka</li>
            <li>the Centre for
            Agriculture and Biosciences International</li> 
            <li>Ministry of Health,
            Nutrition &amp; Indigenous Medicine of the Government of Sri Lanka.</li> 
          </p>

          <h3 className="major">My Role</h3>
          <p>
            As a student UX researcher and tester I was out in the field
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
          <p>
            The project team interviewed 80 farmers at their homes and work
            fields to test hypothesis already built. Before getting on the field
            we needed to identify all the actors who have an influence on the
            farmer. So we mapped the eco system. In the planning stage we
            thought;
            <ul>
              <li>Farmers didn’t have access to information</li>
              <li>
                So Farmers didn’t know most product offered for them by MNOs
              </li>
              <li>So they used excessive pesticides on harvest</li>
              <li>
                Didn’t get good prices due to middle men who exploit them and
                their financial situation
              </li>

              <li>
                Farmers wholly trusted their family, friends and fellow farmers.
                They trusted government bodies MNO’s , banks and microfinance
                institutes more than middlemen (Since their hard-earned crops
                were always devalued by middlemen).
              </li>
            </ul>
          </p>
          <img className="image main" src={magri_frog_lilian_and_me} alt="" />
          <p>
            How we tested these Hypothesis’s were;
            <ul>
              <li>
                In-depth interviews with farmers to extract the why to most
                frustrations they have
              </li>
              <li>
                Intercept interviews to understand the whole farming ecosystem
              </li>
              <li>
                Farming life cycle exercise to understand a farmer's journey
              </li>
              <li>Trust maps to understand trust and decision making</li>
              <li>
                House- farm tour to understand farmers stand on technology and
                connectivity
              </li>
            </ul>
          </p>
          <img className="image main" src={magri_frog_postitwall} alt="" />
          <p>
            Our findings were surprising;
            <ul>
              <li>
                Farmers had access to information but it was deficient. Most
                farmers we visited had under developed roads. It was a struggle
                to get to experts for necessary advice
              </li>
              <li>
                Farmers were aware of the services offered to them by MNOs but
                chose not to use them. In simple terms they didn’t trust MNO’s
                for advice.
              </li>
              <li>
                Farmers were aware of the amounts of pesticides prescribed. They
                chose to use their own discretion since they do not want to risk
                losing a crop and income{' '}
              </li>
              <li>
                Farmers had access to a phone. Self-owned or owned by a family
                member
              </li>
              <li>
                Farmers did not want their young to pursue Agriculture as it was
                tedious work and a huge gamble
              </li>
              <li>
                Life is a daily struggle pawing valuables or borrowing money
                from micro finance creditors. Crop security was very low due to
                unpredictable weather conditions.
              </li>
              <li>
                Since farming is seasonal most farmers grow the same variations
                of Vegetables. Surplus crops brought down incomes expected or
                ended up going to waste due to being unable to sell.
              </li>
              <li>
                Farmers want timely information that follows the crop calendar
              </li>
              <li>
                Farmers considered other farmers as competitors. They trust
                middlemen and government bodies more than banks, MNOs’ and
                financial institutes
              </li>
              <li>
                Government information was only available to them during
                weekdays. Which meant leaving all the work behind to go speak to
                an expert for advice (So they rarely went for advice)
              </li>
            </ul>
            It was clear that all farmers are not the same. So next we segmented
            farmers into archetypes. This helped us decide who we are designing
            for and who will be early adopters. Within each group, we looked for
            patterns across farmers who have similar attitudes, aspirations,
            community engagement, access to information, financial access, and
            technical literacy.
          </p>
          <img className="image main" src={magri_frog_table} alt="" />
          <p>
            ‘Optimistic’ and ‘stuck’ farmers were target early adopters for this
            service. Next we mapped the information collected in the field,
            considering each touch point. Then we highlighted the pain points
            and opportunities. We could see that every step of the journey a gap
            existed in getting advice.
          </p>
          <p>
            Framing all the insights we embarked on brainstorming ideas to solve
            problems in general. The problem was reframed to;{' '}
            <strong>
              “How might we provide timely information to farmers?”.{' '}
            </strong>{' '}
            Common patterns emerging through the 80 farmers made it clear that
            the information gap neede. The information had to come from the
            source they trust; the Government. So we were collaborating with
            various government bodies from then on.
          </p>
          <img className="image main" src={magri_frog_wireframe} alt="" />
          <p>
            Next the team went back to the insight board from the research and
            iterated a key product feature for each insight. Out of a pool of
            value propositions we identified that the product should bring the
            right information to a farmer on request. It had to be giving
            instructions in their native language.
          </p>
          <p>
            Then we created a service blueprint. Later we decided on a feasible
            product to launch quickly and planned for it. The minimum viable
            product was for basic feature phones. Based on service blueprint we
            listed the features. Quick pen and paper sketches iterated ways to
            get the basic user interface in shape. We were back on the field
            with card sorting to see if farmers appreciated the value added by
            us to the product.
          </p>
          <img className="image main" src={magri_frog_prototype} alt="" />
          <p>
            We looked at other key findings from our field work. 89% Farmers had
            access to one very budget feature phone but also had secondary
            access to a smart phone within their family. Hence we embarked on
            rapid prototyping a basic low fidelity mock up of the product and
            visited the farmers to test how they respond to it. Even though
            farmers are highly intelligent people a simple ‘dial 1 for carrot, 2
            for leek, and 3 for gherkin ‘created a lot of confusion in them. So
            we were back on our insight board re-iterating a simple system that
            is easy to understand by our core user. Farmers had only used a
            mobile phone to make calls. So we started training agents to help
            them learn how to respond to a voice message.
          </p>
          <p>
            One of the ideas I generated at these brainstorming was to print a
            physical calendar. This will hang on the wall of a farmer that
            helped him document and keep account of the dates through a set of
            stickers which seemed easy and practical. Yet it was just another
            post-it under idea generation until we pull it up refined and merged
            it with an insight from the field. Farmers were a part of a “give me
            a missed call” culture which made them respond to most calls while
            on the field. This resulted in a printed calendar with the service
            and provided reminders of all the ‘missed call’ numbers Dialog
            offered. This ‘missed call’ feature was simple and so we went back
            to our farmers positive of the outcome.
          </p>
          <img
            className="image main"
            src={magri_frog_inaswithcalander}
            alt=""
          />
          <p>
            Farmers had to give a missed call to 6166 when they started
            preparing their land. The next missed call to 6167 will denote that
            they had now moved to the next stage in the farming cycle, seeding,
            and so on. Results showed that this was way too complicated. The
            many numbers were hard to remember. The messages on the calendar
            were not fully understood. Farmers clearly indicated their desire
            for timely crop information and always expected a person to be on
            the other end of the line.
          </p>
          <p>
            This resulted in developing the final product to contain advice
            through both automated outbound dialling (OBD) and interactive voice
            response (IVR). The trained agents of the service went door to door
            and taught the farmer how to get the service. The solution was a
            simple automated voice service that sent farmers information on best
            practices, seasonal advice and general guidance. A farmer has to
            dial 616 and follow instructions. One number was easy to remember
            and it also helped promote the service to another farmer by world of
            mouth. The service charges one rupee per day and was easy to
            understand.
          </p>
          <p>
            Further feedback from call centers and our basic research insights
            helped us design the final UI and cater to not only the rural farmer
            but the home grow enthusiast back in Colombo.
          </p>
          <img className="image main" src={magri_frog_interfaceofapp} alt="" />
          <h3 className="major">Reflection</h3>
          <p>
            35% of the target audience registered. 87% registered users’
            accessed content. 86% of content accessing users became repeat
            users. 75% of active users paid for the service. (According to
            independent study by GSMA in 2016). Paddy (rice) and home gardening
            are the most popular topics. Young farmers preferred the smart phone
            app. Research to add daily weather alerts and market price update
            features are on the way. Team felt within the time frame this area
            has room for improvement. Majority still get the service on their
            feature phone to this date. Feature phone or smartphone the service
            had value getting the information hard to possess for a farmer. Back
            in urban areas where information was easy to access users felt the
            service was very basic.
          </p>
          <h3 className="major">Read More</h3>

          <section className="features">
            <article>
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
                className="special"
              >
                Read article
              </a>
            </article>
            
          </section>
          <h3 className="major">More Projects</h3>
          <section className="features">
            <article>
              <a
                href="/projects/snacker-app"
                target="_blank"
                className="image"
              >
                <img src={project_snacker_app_image} alt="" />
              </a>
              <Link to="/projects/snacker-app" className="special">
                Snacker App
              </Link>
            </article>
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
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
