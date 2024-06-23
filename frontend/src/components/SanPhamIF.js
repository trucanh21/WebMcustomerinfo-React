import React from "react";
import Input from "./input/input";
import Text from "./input/text";
import Button from "./input/button";
const SanPhamIF = (props) => {
  return (
    <div style={{
      position: 'fixed',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '90vw',
      height: '400px',
      maxWidth: '400px',
      backgroundColor: '#f5f5dc',
      border: '1px solid #ccc',
      padding: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#0149CD',
      }}>
        <h2>{props.i4SP}</h2>
      </div>

      <div style={{
        width: '100%',
        height: '550px',
        backgroundColor: '#fff8dc',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '5px',
        padding: '10px',
        boxSizing: 'border-box',
      }}>
        <div>
        <Text text="Mã SP:"/>
        <Input/>
        <Text text="Ngày nhập:"/>
        <Input/>
        <Button colorScheme="warning">
        Hủy
      </Button>
        </div>
        <div>
        <Text text="Tên sản phẩm:"/>
        <Input/>
        <Text text="Bộ phận quản lý"/>
        <Input/>
        <Button colorScheme="primary">
          Thêm
        </Button>
        </div>
      </div>
    </div>
  );
}

export default SanPhamIF;
