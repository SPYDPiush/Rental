import React from 'react';

function ErrorComponent({ error }) {
  return (
    <div className="error-container">
      <p className="error-message">{error}</p>
    </div>
  );
}

export default ErrorComponent;
