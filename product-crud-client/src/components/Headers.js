import React from 'react';
import { Link } from 'react-router-dom';

const Headers = () => {
  const linkStyle = {
    textDecoration: 'none',
    listStyleType: 'none',
    padding: '10px',
    margin: '0',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <li style={linkStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
      </li>
      <li style={linkStyle}>
        <Link to="/products" style={linkStyle}>Products</Link>
      </li>
      <li style={linkStyle}>
        <Link to="/update" style={linkStyle}>Update</Link>
      </li>
      <li style={linkStyle}>
        <Link to="/add" style={linkStyle}>Add</Link>
      </li>
    </div>
  );
};

export default Headers;
