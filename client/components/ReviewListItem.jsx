/* eslint-disable no-underscore-dangle */
import React from 'react';
import moment from 'moment';
import propTypes from 'prop-types';
import Star from './Star';

const ReviewListItem = ({
  item,
  addHelpful,
  setModal,
  setIndex,
  thumbIds,
  setThumbIds,
}) => (
  <div className="reviews-list-item" id={item._id}>

    <div className="RLI-top-line">
      <Star rating={item.rating} />
      <div
        className="RLI-verified"
        style={{
          borderLeft: item.verified_purchase
            ? 'solid 1px rgba(139, 138, 138, 0.607)'
            : 'none',
        }}
      >
        {item.verified_purchase ? 'Verified Purchase' : ''}
      </div>
    </div>

    <div className="RLI-title">{item.review_title}</div>
    <div className="RLI-body">{item.review_body}</div>

    <div className="RLI-images">
      {item.images.map((_, i) => (
        <div
          id="RLI-img-div"
          data-testid="RLI-img"
          onKeyDown={() => {
            setIndex(i);
            setModal(item);
          }}
          onClick={() => {
            setIndex(i);
            setModal(item);
          }}
          role="button"
          title="img"
          tabIndex={0}
          key={`https://picsum.photos/200${item._id + i}`}
        >
          <img
            src={`https://loremflickr.com/320/240/home?random=${Math.floor(Math.random() * 10000)}`}
            alt="product"
          />
        </div>
      ))}
    </div>

    <div className="RLI-bottom-line">

      <div className="RLI-by-line">
        {item.customer_name}
        {' '}
        {moment(item.review_date).format('LL')}
      </div>

      <div className="RLI-helpful">
        Was this review helpful?
        <div
          className="RLI-helpful-thumb"
          role="button"
          tabIndex={0}
          title="thumbBtn"
          onKeyDown={() => {
            if (!thumbIds.includes(item._id)) {
              addHelpful(item._id);
              const newThumbs = JSON.parse(JSON.stringify(thumbIds));
              newThumbs.push(item._id);
              setThumbIds(newThumbs);
            }
          }}
          onClick={() => {
            if (!thumbIds.includes(item._id)) {
              addHelpful(item._id);
              const newThumbs = JSON.parse(JSON.stringify(thumbIds));
              newThumbs.push(item._id);
              setThumbIds(newThumbs);
            }
          }}
        >
          <i className={`${thumbIds.includes(item._id) ? 'fas' : 'far'} fa-thumbs-up`} />
          {item.helpful}
        </div>
      </div>

    </div>
  </div>
);

ReviewListItem.propTypes = {
  item: propTypes.shape().isRequired,
  addHelpful: propTypes.func.isRequired,
  setModal: propTypes.func.isRequired,
  setIndex: propTypes.func.isRequired,
  setThumbIds: propTypes.func.isRequired,
  thumbIds: propTypes.arrayOf(propTypes.any).isRequired,
};

export default ReviewListItem;
