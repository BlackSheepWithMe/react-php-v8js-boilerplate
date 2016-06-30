import React from 'react';

function Root({ children }) {
    return (
        <div className="root">
            {children}
        </div>
    );
}

Root.propTypes = {
    children: React.PropTypes.object.isRequired,
};

export default Root;
