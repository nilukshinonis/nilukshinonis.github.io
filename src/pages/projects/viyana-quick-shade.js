import React from 'react';

import Layout from '../../components/Layout';
import viyana_research from '../../assets/images/project_image_viyana_research.png';
import viyana_sketch from '../../assets/images/project_image_viyana_sketch.png';
import viyana_joinspic from '../../assets/images/project_image_viyana_joinspic.png';
import viyana_charithpic from '../../assets/images/project_image_viyana_charithpic.png';
import viyana_shenalpic from '../../assets/images/project_image_viyana_shenalpic.png';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper-viyana-quickshade">
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
          <p>
            My ideas came to life as sketches on paper. Back in the field I
            pitched the idea of a shield and guys showed interest. So I worked
            on rapid prototyping. The hand of the user was what gave strength to
            the product. It had no handle or complicated ribs. Initially users
            wanted to fold the shield and fit into the pocket but with
            limitations that was made to be flat packed.
          </p>
          <p>
            Experiments helped me understand how the material combinations work
            and react. The use of steel tension wire on the armor so an instant
            pop-up could be achieved was my eureka moment to get quick cover.
            Experimentation began with various thicknesses of steel wire, fabric
            and joinery. Next I was on the look for water repellent material. A
            material commonly known as ‘ponjee’ in the canopy industry had a
            heavy water repellency coating. So that became the material for the
            final product helping it dry in seconds.
          </p>
          <p>
            One of the main frustrations of weather gear is that once its wet
            the product becomes difficult to handle. So a solution for this pain
            point got me thinking of a cover. Many experiments with the cover
            attached and detached were carried out.
          </p>
          <img className="image main" src={viyana_joinspic} alt="" />
          <p>
            A developed prototype made as an actual working model helped me get
            users to test the product and give feedback and redesign. So I was
            spending time with the manufacturers 108 km away from Colombo in the
            Rainco factory in Kadugannawa. I built a few of them in different
            colour variations and got my users to take it with them and give me
            feedback.{' '}
          </p>
          <img className="image main" src={viyana_charithpic} alt="" />
          <p>
            The design has no handle and users asked for more grip. This
            resulted in various textures and layers of padding . Heavy padding
            meant more weight on the structure. Later feedback said they needed
            it to be light, so I was peeling layer by layer until the user was
            happy with the final outcome. The quick dry property was appreciated
            in testing. Users opted to test more of my products which gave me
            positive feedback to manufacture the final product model.
          </p>
          <img className="image main" src={viyana_shenalpic} alt="" />
          <h3 className="major">Reflection</h3>
          <p>
            No design has been able to fulfill the requirement in locals to gain
            immediate cover which could eliminate the agonizing process of using
            existing weather gear. I made an attempt to propose an innovative
            product to gain immediate cover at a reasonable cost. An umbrella
            manufacturing process takes roughly 25 minutes for one product to be
            produced. My solution takes roughly 15 minutes to be manufactured in
            that same facility. The beauty of this design is that it suites the
            user perfectly with the instant cover and the masculine semiotics in
            the product and simultaneously serves the clients objective of
            catering to the local need utilizing the available resources of the
            company. My project was highly commended by the board of examiners.
            For 10 years the project is the intellectual property of the
            University of Moratuwa. There is a possibility that Rainco will
            produce this later on.
          </p>
          <div className="video-wrapper vimeo">
            <iframe
              title="Viyana Quick Shade intro"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/HzoyYiMdcUs"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
