import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const Home = () => (
  <Layout>
    <Seo
      description="Back-end developer, developing apps and apis"
      keywords="Ruby, Rails, API, developer"
    />
    <header className="has-text-centered">
      <h1 className="title">Carlos Kvasir</h1>
      <h2 className="subtitle">Backend developer</h2>
    </header>
    <section className="has-text-centered">
      <a href="https://github.com/carloskvasir" aria-label="github">
        <span className="icon is-large fa-2x">
          <FontAwesomeIcon icon={faGithub} />
        </span>
      </a>
      <a href="https://twitter.com/carloskvasir" aria-label="twitter">
        <span className="icon is-large fa-2x">
          <FontAwesomeIcon icon={faTwitter} />
        </span>
      </a>
      <a href="https://linkedin.com/in/carloskvasir/" aria-label="linkedin">
        <span className="icon is-large fa-2x">
          <FontAwesomeIcon icon={faLinkedin} />
        </span>
      </a>
    </section>
    <section className="section content is-size-4-desktop is-size-5-touch">
      <h4 className="title">Hello, I'm Carlos Lima Junior but in internet aka Carlos Kvasir</h4>
      <p>I'm a Backend Developer and study about devops.</p>
      <p>I develop projects mostly with Ruby on Rails.</p>
      <p>
        {'Check out mostly '}
        <Link to="/projects">projects</Link>
      </p>
    </section>
  </Layout>
);

export default Home;
