import React from 'react';
import colors from './colors';

const Button = ({ colorScheme = 'primary', children }) => {
  const { background, hover, text } = colors[colorScheme];

  return (
    <button
      className='btn'
      style={{
        marginLeft: "10%",
        padding: '10px 20px',
        height: '50px',
        width: "70%",
        marginTop: '10px',
        borderRadius: "5px",
        backgroundColor: background,
        border: 'none',
        color: text,
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background-color 0.3s, transform 0.3s',
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = hover;
        e.target.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = background;
        e.target.style.transform = 'scale(1)';
      }}
    >
      {children}
    </button>
  );
};

export default Button;