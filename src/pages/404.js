import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Ooops</h2>
          <p>You landed on the wrong page.</p><a href="/">Go back to the home page</a>
        </div>
      </header>
    </section>
  </Layout>
);

export default IndexPage;
