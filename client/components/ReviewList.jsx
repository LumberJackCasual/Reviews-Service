import React from 'react';
import propTypes from 'prop-types';
import ReviewListItem from './ReviewListItem';

const ReviewList = (props) => {
  const { list } = props;
  return (
    <div id="reviews-list">
      {list.map((item, i) => {
        const key = `${i}a`;
        return (
          <ReviewListItem
            item={item}
            key={key}
          />
        );
      })}

      <div id="reviews-list-compose">
        <div className="reviews-list-button" id="write-btn">See all Reviews</div>
        <div className="reviews-list-button">Write a Review</div>
      </div>

    </div>
  );
};

ReviewList.propTypes = {
  list: propTypes.arrayOf(propTypes.object).isRequired,
};

export default ReviewList;
