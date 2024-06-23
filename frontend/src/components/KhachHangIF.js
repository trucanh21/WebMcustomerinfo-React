import React from "react";
import Input from "./input/input";
import Text from "./input/text";
import Button from "./input/button";
import Select from "./input/select";
import Select1 from "./input/Select1";
const KhachHangIF = (props) => {
  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '90vw',
      height: '590px',
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
        <h2>{props.i4KH}</h2>
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
        <Text text="Mã KH:"/>
        <Input/>
        <Text text="Đại diện"/>
        <Select1/>
        <Text text="Tài khoản:"/>
        <Input/>
        <Text text="Bộ Phận quản:"/>
        <Select1/>
        <Text text="Huyện:"/>
        <Select1/>
        <Button colorScheme="warning">
        Hủy
      </Button>
        </div>
        <div>
        <Text text="Tên đơn vị"/>
        <Input/>
        <Text text="Điện thoại"/>
        <Input/>
        <Text text="Phân loại đơn vị:"/>
        <Input/>
        <Text text="Tỉnh:"/>
        <Select/>
        <Text text="Xã:"/>
        <Input/>
        <Button colorScheme="primary">
          Thêm
        </Button>
        </div>
      </div>
    </div>
  );
}

export default KhachHangIF;
