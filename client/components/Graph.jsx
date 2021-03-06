import propTypes from 'prop-types';
import React from 'react';
import Bar from './Bar';
import Star from './Star';

const Graph = ({ meta, filter }) => (
  <div id="reviews-graph">

    <div id="reviews-graph-header">
      <div id="RGH-average">{meta.avgRating}</div>
      <div id="RGH-stars-count">
        <Star rating={meta.avgRating} />
        <div className="RGH-count">{`${meta.totalReviews} Reviews`}</div>
      </div>
    </div>

    <div id="reviews-graph-body">
      <Bar
        rating={5}
        avg={meta.fiveStarReviews / meta.totalReviews}
        totalReviews={meta.fiveStarReviews}
        filter={filter}
      />
      <Bar
        rating={4}
        avg={meta.fourStarReviews / meta.totalReviews}
        totalReviews={meta.fourStarReviews}
        filter={filter}
      />
      <Bar
        rating={3}
        avg={meta.threeStarReviews / meta.totalReviews}
        totalReviews={meta.threeStarReviews}
        filter={filter}
      />
      <Bar
        rating={2}
        avg={meta.twoStarReviews / meta.totalReviews}
        totalReviews={meta.twoStarReviews}
        filter={filter}
      />
      <Bar
        rating={1}
        avg={meta.oneStarReviews / meta.totalReviews}
        totalReviews={meta.oneStarReviews}
        filter={filter}
      />
    </div>
  </div>
);

Graph.propTypes = {
  meta: propTypes.shape().isRequired,
  filter: propTypes.number.isRequired,
};

export default Graph;
