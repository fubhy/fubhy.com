import React from 'react';
import { default as InternalLink } from 'gatsby-link';
import { withRouter } from 'react-router';

function isInternalLink(to, history) {
  console.log(to, history);
  return true;
}

const Link = ({ to, history, children, ...props }) =>
  isInternalLink(to, history) ? (
    <InternalLink to={to} {...props}>
      {children}
    </InternalLink>
  ) : (
    <a href={to} {...props}>
      {children}
    </a>
  );

export default withRouter(Link);
