import React from 'react';
import PropTypes from 'prop-types';

const Preview = ({ name, nickname, email, field, positions }) => (
  <>
    <p className="section__paragraph">
      name: <span className="section__paragraph--span">{name}</span>
    </p>
    <p className="section__paragraph">
      nickname: <span className="section__paragraph--span">{nickname}</span>
    </p>
    <p className="section__paragraph">
      email: <span className="section__paragraph--span">{email}</span>
    </p>
    <p className="section__paragraph">
      field: <span className="section__paragraph--span">{field}</span>
    </p>
    <p className="section__paragraph">
      positions: <span className="section__paragraph--span">{positions}</span>
    </p>
  </>
);

Preview.propTypes = {
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  positions: PropTypes.string.isRequired,
};

export default Preview;
