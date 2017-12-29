import 'normalize.css';

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navigation from '../components/Navigation';
import Particles from '../components/Particles';
import styles from './index.module.css';

const Layout = ({ children }) => (
  <div>
    <Helmet
      defaultTitle="Sebastian Siemssen"
      titleTemplate="%s - Sebastian Siemssen"
    />
    {/* <Navigation /> */}
    <Particles />
    {/* {children()} */}
  </div>
);

export default Layout;
