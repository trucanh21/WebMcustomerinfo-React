import React from 'react';

const ThongBao = (props) => {
 

  return (
    <div style={{
      position: 'fixed',
      top: '30%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '90vw',
      maxWidth: '400px',
      backgroundColor: '#f8f9fa',
      border: '1px solid #ccc',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
      boxSizing: 'border-box'
    }}>
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box'
      }}>
       <h3 className='topic'style={{color: '#f00'}}>THÔNG BÁO</h3>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '4px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          width: '100%',
          textAlign: 'center',
          boxSizing: 'border-box'
        }}>
          <div style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>{props.text}</div>
          <div style={{
            borderTop: '1px solid #ccc',
            margin: '1rem 0'
          }}></div>
          <div style={{
            color: '#000',
            fontSize: '1rem',
            fontWeight: '500',
            marginBottom: '1.5rem'
          }}>
            
          </div>
          <button
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007bff',
              color: 'white',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              boxSizing: 'border-box'
            }}
          >
            Tiếp tục
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThongBao;
