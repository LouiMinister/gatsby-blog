import React from 'react';

import PropTypes from 'prop-types';

import Category from '../Category';
import LatestPost from '../LatestPost';
import './index.scss';

// eslint-disable-next-line react/prop-types
const Information = ({ totalCount, posts }) => (
  <div className="d-none d-lg-block information my-2">
    <hr />
    <p>
      총 포스팅: &nbsp;
      {totalCount}
    </p>
    <hr />
    <LatestPost posts={posts} />
    <hr />
    <Category />
  </div>
);

Information.propTypes = {
  totalCount: PropTypes.number.isRequired,
  posts: PropTypes.array,
};

Information.defaultProps = {
  posts: [],
};

export default Information;
