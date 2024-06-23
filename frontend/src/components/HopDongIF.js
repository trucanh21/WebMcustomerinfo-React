import React from "react";
import Input from "./input/input";
import Text from "./input/text";
import Button from "./input/button";
import Select1 from "./input/Select1";
const HopDongIF = (props) => {
  return (
    <div style={{
      position: 'fixed',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '90vw',
      height: '500px',
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
        <h2>{props.i4HD}</h2>
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
        <Text text="Mã BH:"/>
        <Input/>
        <Text text="Ngày nhập:"/>
        <Select1/>
        <Text text="Loại hợp đồng:"/>
        <Select1/>
        <Text text="Bộ phận quản lý:"/>
        <Select1/>
        <Button colorScheme="warning">
        Hủy
      </Button>
        </div>
        <div>
        <Text text="Tên đơn vị:"/>
        <Input/>
        <Text text="Sản Phẩm"/>
        <Select1/>
        <Text text="GT Hợp đồng"/>
        <Input/>
        <Text text="Cán bộ ghi nhận"/>
        <Input/>
        <Button colorScheme="primary">
          Thêm
        </Button>
        </div>
      </div>
    </div>
  );
}

export default HopDongIF;
