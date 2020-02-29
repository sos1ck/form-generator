import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Preview from './Preview';

const PreviewContainer = ({ formValues: { name, nickname, email, field, positions } }) => (
  <section className="section__container section__container--preview">
    <h2 className="section__title">current form values</h2>
    <Preview name={name} nickname={nickname} email={email} field={field} positions={positions} />
  </section>
);

const mapStateToProps = state => ({
  formValues: state.formValues,
});

PreviewContainer.propTypes = {
  formValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    positions: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(PreviewContainer);
