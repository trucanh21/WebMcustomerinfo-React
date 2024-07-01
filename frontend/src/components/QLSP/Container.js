import React, { useState, useEffect } from 'react';
import '../../assets/css/Container.css';
import '../../assets/css/Popup.css';
import Popup from 'reactjs-popup';
import PopupContent from '../../components/QLSP/PopupContent'; 
import PopupEdit from '../../components/QLSP/PopupEdit'; 
import { fetchProducts } from '../../features/apiCalls';

const Container = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products', error); // Corrected the error message
      }
    };

    getProducts();
  }, []);

  const handleEditClick = (product) => {
    setSelectedProduct(product); // Set the selected product
    setIsEditPopupOpen(true);
  };

  const closeEditPopup = () => {
    setIsEditPopupOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3>Quản lý sản phẩm</h3>
          <div className="page-header-button">
            <Popup trigger={
              <button className="button-header">
                <div className="button-add-export">
                  <span className="button-icon"><ion-icon name="person-add"></ion-icon></span>
                  <span className="button-text">Thêm sản phẩm</span>
                </div>
              </button>} modal nested>
              {close => <PopupContent onClose={close} />}
            </Popup>
          </div>
        </div>
        <div className="col-sm-12 sticky-table">
          <div className="table-container">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Mã SP</th>
                  <th>Tên sản phẩm</th>
                  <th>Ngày nhập</th>
                  <th>Bộ phận quản lý</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.SP_ID}>
                    <td>{product.SP_ID}</td>
                    <td>{product.SP_Ten}</td>
                    <td>{product.SP_NgayNhap}</td>
                    <td>{product.SP_BPQuanLy}</td>
                    <td>
                      <ion-icon name="create" onClick={() => handleEditClick(product)}></ion-icon>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isEditPopupOpen && (
        <Popup open={isEditPopupOpen} onClose={closeEditPopup} modal nested>
          {close => <PopupEdit onClose={closeEditPopup} product={selectedProduct} />}
        </Popup>
      )}
    </div>
  );
};

export default Container;
