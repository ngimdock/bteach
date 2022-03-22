import React from 'react';

function Container({ classe, children }) {
    return (
        <div className={`max-w-5xl h-full mx-auto ${ classe }`}>
            { children }
        </div>
    );
}

export default Container;