import React from 'react';
import FormContainer from '../Form/FormContainer';
import PreviewContainer from '../Preview/PreviewContainer';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const Home = () => (
  <ErrorBoundary>
    <FormContainer />
    <PreviewContainer />
  </ErrorBoundary>
);

export default Home;
