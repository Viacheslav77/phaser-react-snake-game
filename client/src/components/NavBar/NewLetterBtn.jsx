import React from 'react';

const NewLetterBtn = ({ children, createNewMail }) => {
  return (
    <button
      onClick={createNewMail}
      type="button"
      className="btn btn-primary mr-3"
    >
      {children}
    </button>
  );
};

export default NewLetterBtn;
