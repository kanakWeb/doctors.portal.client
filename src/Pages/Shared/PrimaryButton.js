import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button class="btn btn-primary text-uppercase font-bold bg-gradient-to-r from-secondary to-primary text-white">
       {children}
      </button>
    );
};

export default PrimaryButton;