import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/contacts/';
const ADDRESS_API_BASE_URL = 'http://localhost:3000/api';

// ----------------------- API PRODUCT --------------------

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${ADDRESS_API_BASE_URL}/product`);
    return response.data.products;
  } catch (error) {
    console.error('Error fetching products', error);
    throw error;
  }
};
// ----------------------- API CUSTOMER --------------------
export const fetchCustomers = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data.customers;
  } catch (error) {
    console.error('Error fetching customers', error);
    throw error;
  }
};

export const addCustomer = async (customer) => {
  try {
    const response = await axios.post(API_BASE_URL, customer);
    return response.data;
  } catch (error) {
    console.error('Error adding customer', error);
    throw error;
  }
};

export const updateCustomer = async (id, customer) => {
  try {
    const response = await axios.put(`${API_BASE_URL}${id}`, customer);
    return response.data;
  } catch (error) {
    console.error('Error updating customer', error);
    throw error;
  }
};

export const deleteCustomer = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting customer', error);
    throw error;
  }
};

export const fetchProvinces = async () => {
  try {
    const response = await axios.get(`${ADDRESS_API_BASE_URL}/provinces`);
    return response.data;
  } catch (error) {
    console.error('Error fetching provinces', error);
    throw error;
  }
};

export const fetchDistrictsByProvince = async (provinceId) => {
  try {
    const response = await axios.get(`${ADDRESS_API_BASE_URL}/districts?province_id=${provinceId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching districts', error);
    throw error;
  }
};

export const fetchWardsByDistrict = async (districtId) => {
  try {
    const response = await axios.get(`${ADDRESS_API_BASE_URL}/wards?district_id=${districtId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching wards', error);
    throw error;
  }
};



export const addProduct = async (product) => {
  try {
    const response = await axios.post(`${ADDRESS_API_BASE_URL}/product`, product);
    return response.data;
  } catch (error) {
    console.error('Error adding product', error);
    throw error;
  }
};

export const updateProduct = async (id, product) => {
  try {
    const response = await axios.put(`${ADDRESS_API_BASE_URL}/product/${id}`, product);
    return response.data;
  } catch (error) {
    console.error('Error updating product', error);
    throw error;
  }
};
