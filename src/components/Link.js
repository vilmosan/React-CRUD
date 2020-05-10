import React from 'react'
import PropTypes from 'prop-types'

const Link = ({active, children, onClick}) => (
    <span
        onClick={onClick}
        style={{
            marginLeft: '4px',
        }}
    >
        {children}
    </span>
);

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link
