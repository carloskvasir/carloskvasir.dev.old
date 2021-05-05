import React from 'react';

import Layout from '../components/Layout';

const Projects = () => (
  <Layout>
    <h1>Projects</h1>
    <hr/>
    <p>
      {`Some of my projects, see more on my `}
      <a href="http://github.com/carloskvasir">GitHub</a>
    </p>
    <ul>
      <a href="https://github.com/carloskvasir/terraform-in-action">
        Terraform
      </a>
    </ul>
  </Layout>
)

export default Projects;
