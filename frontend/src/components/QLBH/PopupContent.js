import React, { useState, useEffect } from 'react';
import '../../assets/css/Popup.css';
import { fetchTypeContract, fetchProducts, fetchCustomers, addContract } from '../../features/apiCalls';

const PopupShow = ({ onClose }) => {
  const [typeContracts, setTypeContracts] = useState([]);
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({
    QT_ID: '',
    KH_ID: '', // Ensure KH_ID is initialized here
    SP_ID: '',
    LHD_ID: '',
    HD_Ngay: '',
    HD_GiaTri: '',
    HD_HienTrang: '',
    HD_Note: '',
  });

  useEffect(() => {
    const loadTypeContracts = async () => {
      try {
        const data = await fetchTypeContract();
        setTypeContracts(data);
      } catch (error) {
        console.error('Error fetching type contracts:', error);
      }
    };

    loadTypeContracts();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    const getCustomers = async () => {
      try {
        const customersData = await fetchCustomers();
        setCustomers(customersData);
        console.log('Fetched customers:', customersData); // Debugging
      } catch (error) {
        console.error('Error fetching customers', error);
      }
    };

    getCustomers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log('Input change:', name, value); // Debugging
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addContract(formData);
      onClose(); // Close the popup on successful addition
    } catch (error) {
      console.error('Error adding contract', error);
      // Handle error (e.g., display an error message to the user)
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-header">
          <h2>Thêm hợp đồng</h2>
          <ion-icon name="close" className="close" onClick={onClose}></ion-icon>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="popup-body">
            <div className="popup-column column1">
              <div className="space-popup">
                <label>Mã đơn vị:</label>
                <select name="KH_ID" value={formData.KH_ID} onChange={handleInputChange}>
                  <option value="">Chọn mã đơn vị</option> {/* Add a placeholder option */}
                  {customers.map((customer) => (
                    <option key={customer.KH_ID} value={customer.KH_ID}>
                      {customer.KH_ID}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-popup">
                <label>Ngày nhập:</label>
                <input name="HD_Ngay" value={formData.HD_Ngay} type="date" onChange={handleInputChange} />
              </div>
              <div className="space-popup">
                <label>Loại hợp đồng:</label>
                <select name="LHD_ID" value={formData.LHD_ID} onChange={handleInputChange}>
                  <option value="">Chọn loại hợp đồng</option> {/* Add a placeholder option */}
                  {typeContracts.map((typeContract) => (
                    <option key={typeContract.LHD_ID} value={typeContract.LHD_ID}>
                      {typeContract.LHD_NAME}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-popup">
                <label>Hiện trạng xuất hóa đơn:</label>
                <select name="HD_HienTrang" value={formData.HD_HienTrang} onChange={handleInputChange}>
                  <option value="">Chọn hiện trạng xuất hóa đơn</option>  
                  <option value="Chưa xuất hóa đơn">Chưa xuất hóa đơn</option>
                  <option value="Đã xuất hóa đơn">Đã xuất hóa đơn</option>
                </select>
              </div>
            </div>
            <div className="popup-column">
              <div className="space-popup">
                <label>Sản phẩm:</label>
                <select name="SP_ID" value={formData.SP_ID} onChange={handleInputChange}>
                  <option value="">Chọn sản phẩm</option> {/* Add a placeholder option */}
                  {products.map((product) => (
                    <option key={product.SP_ID} value={product.SP_ID}>
                      {product.SP_Ten}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-popup">
                <label>Giá trị hợp đồng:</label>
                <input className="sanpham" name="HD_GiaTri" value={formData.HD_GiaTri} type="text" placeholder="Nhập giá trị hợp đồng" onChange={handleInputChange} />
              </div>
              <div className="space-popup">
                <label>Mã Cán bộ ghi nhận:</label>
                <input className="sanpham" type="text" placeholder="Nhập mã cán bộ ghi nhận" name="QT_ID" value={formData.QT_ID} onChange={handleInputChange} />
              </div>
              <div className="space-popup">
                <label className="label-note">Ghi chú:</label>
                <textarea rows="4" cols="50" placeholder="Nhập ghi chú của bạn..." name="HD_Note" value={formData.HD_Note} onChange={handleInputChange}></textarea>
              </div>
            </div>
          </div>
          <div className="button-popup">
            <button type="submit" className="btn btn-primary">Thêm</button>
            <button type="button" className="ml-2 btn btn-danger" onClick={onClose}>
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupShow;
